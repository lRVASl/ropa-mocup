import React, { useEffect, useState } from "react";
import { Col, message, Row, Space, Typography } from "antd";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
interface IParams {
  purposeId: string | undefined;
  policyId: string | undefined;
}

export const Dashboard: React.FC<{}> = (): React.ReactElement => {
  const paramsId = useParams<IParams>();

  return (
    <>
      <Row justify="space-between" style={{ marginBottom: "6px" }}></Row>
    </>
  );
};
