import axios, { AxiosInstance } from "axios";
import { useCallback } from "react";
import { Modal } from "antd";
import { useAuth24 } from "../../common-auth";
import { loadAppConfig } from "../../config/app-config";

export function useService<S>(serviceFn: (axiosInstance: AxiosInstance) => S) {
  const appConfig = loadAppConfig();
  const auth24Util = useAuth24();

  const { confirm } = Modal;

  const showLoginConfirmation = () => {
    confirm({
      title: "Session หมดอายุ กรุณา login ใหม่",
      async onOk() {
        auth24Util.auth24.logout();
      },
    });
  };

  const axiosInstance = axios.create({
    baseURL: appConfig.apiBaseUrl,
    headers: auth24Util
      ? { Authorization: `Bearer ${auth24Util.auth24.token().rawToken}` }
      : undefined,
  });

  axiosInstance.interceptors.request.use(
    async (config) => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: auth24Util
          ? `Bearer ${auth24Util.auth24.token().rawToken}`
          : undefined,
      },
    }),
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (
        originalRequest.headers.Authorization &&
        error.response &&
        error.response.status === 401 &&
        !originalRequest.retryFlagForRefreshToken
      ) {
        const refreshToken = auth24Util.auth24.getRefreshToken();
        if (!refreshToken) return Promise.reject(new Error("No refresh token"));

        originalRequest.retryFlagForRefreshToken = true;
        try {
          const accessToken = await auth24Util.auth24.refreshToken();
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;

          return axiosInstance(originalRequest);
        } catch (error) {
          showLoginConfirmation();
        }
      }
      return Promise.reject(error);
    }
  );

  // @ts-ignore
  if (!window.refreshTimer) {
    // @ts-ignore
    window.refreshTimer = true;
    if (auth24Util.auth24.getRefreshTTL() > 0) {
      const refreshInterval = setInterval(async () => {
        await auth24Util.auth24.refreshToken().catch(() => {
          clearInterval(refreshInterval);
          showLoginConfirmation();
        });
      }, auth24Util.auth24.getRefreshTTL());
    } else {
      showLoginConfirmation();
    }
  }

  return {
    service: useCallback(
      () => serviceFn(axiosInstance as any),
      [axiosInstance, serviceFn]
    ) as () => S,
    ready: true,
  };
}
