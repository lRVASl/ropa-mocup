import axios from 'axios';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { TokenResponse, useAuth24 } from './use-auth24';

dayjs.extend(duration);

export const auth24Controller = async () => {
  const { auth24 } = useAuth24();
  const params = new URLSearchParams(window.location.search);
  const authUrl = process.env.REACT_APP_AUTH_URL;
  const code = params.get('code');
  const state = params.get('state');

  if (!code && !auth24.authenticated()) {
    return auth24.login();
  }
  if (code && state) {
    const codeVerifier = localStorage.getItem('code_verifier');
    if (!auth24.authenticated()) {
      try {
        const { data } = await axios.post<TokenResponse>(`${authUrl}/token`, {
          code,
          code_verifier: codeVerifier
        });
        const { access_token, refreshToken } = data;
        auth24.setAccessToken(access_token);
        auth24.setRefreshToken(refreshToken);
      } catch (error) {
        console.error('Failed to call token endpoint');
      }
      window.location.href = window.location.origin;
    }
  }

  if (code && state !== localStorage.getItem('state')) {
    const errMsg = 'Invalid state';
    console.error(errMsg);
    // throw { code: 400, msg: errMsg };
  }
  return true;
};
