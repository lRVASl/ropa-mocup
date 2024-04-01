import React, { useEffect, useState } from "react";
import { MainLayout } from "./MainLayout";
import { useId24 } from "../drivers/id24/Id24-provider";
import { Button, Result, Spin } from "antd";

export const AuthorizationController: React.FC = (): React.ReactElement => {
  const { authenticated, login, logout, id24Axios } = useId24();

  useEffect(() => {}, [authenticated]);

  const challenge = "challenge";
  const codeVerifier = localStorage.getItem(challenge);
  if (!authenticated || !codeVerifier) {
    return <>{login(window.location.href)}</>;
  } else {
    return <MainLayout />;
  }
};
