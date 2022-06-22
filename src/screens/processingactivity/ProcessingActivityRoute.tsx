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
import { Route, Switch } from "react-router";
import { ProcessingActivity } from "./ProcessingActivity";
import { ProcessingActivityAssessment } from "./components/ProcessingActivityAssessments";
import { ProcessingActivityDetail } from "./components/ProcessingActivityDetail";
import { ProcessingActivityRouteIn } from "./components/ProcessingActivityRouteIn";
interface Props {
  baseUrl: string;
}
const { TabPane } = Tabs;
export const ProcessingActivityRoute: React.FC<Props> = ({ baseUrl }) => {
  return (
    <>
      <Switch>
        {/* <Route path={`${baseUrl}/assessment/:id`}>
          <ProcessingActivityAssessment baseUrl={baseUrl} />
        </Route> */}
        <Route path={`${baseUrl}/detail/:id`}>
          <ProcessingActivityRouteIn baseUrl={baseUrl} />
        </Route>
        <Route path={`${baseUrl}`}>
          <ProcessingActivity baseUrl={baseUrl} />
        </Route>
      </Switch>
    </>
  );
};
