import { DashboardFilled, MenuOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
  Row,
  Select,
  Table,
  Tabs,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import { ProcessingActivityAssessment } from "./ProcessingActivityAssessments";
import { ProcessingActivityDetail } from "./ProcessingActivityDetail";
interface Props {
  baseUrl: string;
}
const { TabPane } = Tabs;
export const ProcessingActivityRouteIn: React.FC<Props> = ({ baseUrl }) => {
  const { push } = useHistory();
  //   useEffect(() => {
  //     onChange("1");
  //   }, []);
  const onChange = (key: string) => {};
  return (
    <>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        <Card style={{ width: "100%", textAlign: "left" }}>
          <b style={{ fontSize: "24px" }}>Processing Activity</b>
          <Tabs onChange={onChange}>
            <TabPane tab="details" key="1">
              <ProcessingActivityDetail baseUrl={baseUrl} />
            </TabPane>
            <TabPane tab="assessment" key="2">
              <ProcessingActivityAssessment baseUrl={baseUrl} />
            </TabPane>
            <TabPane tab="risk" key="3">
              CRisk
            </TabPane>
            <TabPane tab="attachment" key="4">
              Attachment
            </TabPane>
          </Tabs>
        </Card>
      </Row>
    </>
  );
};
