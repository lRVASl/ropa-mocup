import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Id24Provider } from "./drivers/id24/Id24-provider";
import { AuthorizationController } from "./layouts/AuthorizationController";
import { TokenInfo } from "./drivers/id24/models/token-info";
import { AuthProvider } from "./utils/auth";

export type AuthenticationHelper = {
  authorize: (redirectUrl: string) => void;
  renewAccessToken: () => Promise<TokenInfo | null>;
  logout: () => Promise<void>;
  reloadPage: () => void;
};

const App: React.FC = () => {
  const host = window.location.host;
  const id24Config = {
    refreshTokenIntervalInSeconds: 60,
    resourceApiBaseUrl: `https://${host}/public/api`,
  };
  return (
    <BrowserRouter basename={"/"}>
      <Id24Provider config={id24Config}>
        <AuthProvider>
          <AuthorizationController />
        </AuthProvider>
      </Id24Provider>
    </BrowserRouter>
  );
};

export default App;
