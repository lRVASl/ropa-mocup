import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Button, Result } from "antd";
import { auth24Controller, useAuth24 } from "./common-auth";
import App from "./App";

auth24Controller()
  .then((data) => {
    console.log(`🚀 ~ file: index.tsx ~ line 10 ~ .then ~ data`, data);

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Result
          status="403"
          title="403"
          subTitle="ท่านยังไม่มีสิทธิ์ในการเข้าถึงระบบ กรุณาตรวจสอบสิทธิ์ในการเข้าถึงกับผู้ดูแลระบบ."
          extra={
            <Button type="primary" onClick={() => useAuth24().auth24.login()}>
              Click to Login
            </Button>
          }
        />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
