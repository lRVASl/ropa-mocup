import "./index.css";
import axios from "axios";
import App from "./App";
import ReactDOM from "react-dom";
import { Id24 } from "./drivers/id24/Id24";
import { AuthService } from "./drivers/id24/services/auth-service";
import { AuthenticationHelper } from "./drivers/id24/models/authentication-helper";
import { Id24State } from "./drivers/id24/models/Id24-state";
import { configuredLocale } from "./utils/index";
import { ConfigProvider } from "antd";
import { Id24InstanceProvider } from "./drivers/id24/Id24-instance-provider";
import reportWebVitals from "./reportWebVitals";

const app = async () => {
  try {
    const appConfig = {
      clientId: process.env["REACT_APP_CLIENT_ID"] || "46a6652e-eb76-4563-ae07-cab233a9cf1d",
      authUrl: process.env["REACT_APP_AUTH_URL"] || "http://localhost:8080",
    };
    const { authUrl, clientId } = appConfig;
    const id24 = Id24(
      window,
      localStorage,
      AuthService(
        axios.create({
          baseURL: authUrl,
          withCredentials: true,
        }),
      ),
      authUrl,
      clientId,
    );
    const id24Instance = await id24.init();

    const { authorize, renewAccessToken, logout, reloadPage } = id24;
    const authenticationHelper: AuthenticationHelper = {
      authorize,
      renewAccessToken: () =>
        renewAccessToken()
          .then((id24Instance) => {
            return id24Instance.state === Id24State.Authorized
              ? {
                  tokenAccess: id24Instance.tokenAccess,
                  rawAccessToken: id24Instance.rawAccessToken,
                }
              : null;
          })
          .catch(() => {
            return null;
          }),
      logout,
      reloadPage,
    };

    ReactDOM.render(
      <Id24InstanceProvider instance={id24Instance} authenticationHelper={authenticationHelper}>
        <ConfigProvider locale={configuredLocale}>
          <App />
        </ConfigProvider>
      </Id24InstanceProvider>,
      document.getElementById("root"),
    );
    reportWebVitals();
  } catch (e) {
    console.log(e);
  }
};

app();
