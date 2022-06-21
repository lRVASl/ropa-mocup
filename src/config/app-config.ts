import dotenv from "dotenv";

export interface AppConfig {
  apiBaseUrl: string;
  authUrl: string;
  language?: string;
  secret: string;
  appVersion: string;
  auth24BaseUrl: string;
  appClientId: string;
  purposeProfileId: string;
  xAccessToken: string;
  featurePublicConsentEnable: false;
}

export const loadAppConfig = (): AppConfig => {
  dotenv.config();
  const {
    REACT_APP_API_BASE_URL,
    REACT_APP_AUTH_URL,
    REACT_APP_VERSION,
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTH24_BASE_URL,
    REACT_APP_CHANNEL_ID,
    REACT_APP_X_ACCESS_TOKEN,
    REACT_APP_FEATURE_PUBLIC_CONSENT,
  } = process.env;

  const appConfig = {};
  Object.assign(appConfig, { language: "TH" });
  Object.assign(appConfig, { secret: "25E74932-8B8C-4D55-A585-2B31E6EB30E0" });

  if (REACT_APP_API_BASE_URL) {
    Object.assign(appConfig, { apiBaseUrl: REACT_APP_API_BASE_URL });
  }

  if (REACT_APP_AUTH_URL) {
    Object.assign(appConfig, { authUrl: REACT_APP_AUTH_URL });
  }

  if (REACT_APP_VERSION) {
    Object.assign(appConfig, { appVersion: REACT_APP_VERSION });
  }

  if (REACT_APP_CLIENT_ID) {
    Object.assign(appConfig, { appClientId: REACT_APP_CLIENT_ID });
  }

  if (REACT_APP_X_ACCESS_TOKEN) {
    Object.assign(appConfig, { xAccessToken: REACT_APP_X_ACCESS_TOKEN });
  }

  if (REACT_APP_FEATURE_PUBLIC_CONSENT) {
    Object.assign(appConfig, {
      featurePublicConsentEnable: REACT_APP_FEATURE_PUBLIC_CONSENT,
    });
  }

  if (REACT_APP_AUTH24_BASE_URL) {
    Object.assign(appConfig, { auth24BaseUrl: REACT_APP_AUTH24_BASE_URL });
  } else {
    throw new Error("unable to load environment REACT_APP_AUTH24_BASE_URL");
  }

  return <AppConfig>appConfig;
};
