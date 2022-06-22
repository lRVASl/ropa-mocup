import { DashboardFilled, MenuOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Input,
  Menu,
  Row,
  Table,
  Tabs,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Route, useRouteMatch, Switch, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ProcessingActivityDetail } from "../processingactivity/components/ProcessingActivityDetail";
import { ProcessingActivityAssessment } from "../processingactivity/components/ProcessingActivityAssessments";
import { ProcessingActivityRisk } from "../processingactivity/components/ProcessingActivityRisk";
import { ProcessingActivityAttachment } from "../processingactivity/components/ProcessingActivityAttachment";

const { TabPane } = Tabs;
interface Props {
  baseUrl: string;
}

export const Detail: React.FC<Props> = ({ baseUrl }) => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  // const { Title } = Typography;

  const onChange = (key: string) => {
    console.log(key);
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a target="_blank" rel="noopener noreferrer">
              Edit
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer">
              Delete
            </a>
          ),
        },
      ]}
    />
  );

  const { Title } = Typography;
  const columns: any = [
    {
      title: "No",
      width: "5%",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      render: (text: any) => text + 1,
    },
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text: string, record: any, index: number) => (
        <a onClick={() => push(`/ProcessingActivity/${record.key}`)}>{text}</a>
      ),
    },
    {
      title: "Type",
      width: 100,
      dataIndex: "type",
      key: "type",
      fixed: "left",
    },
    {
      title: "Policy Template",
      dataIndex: "policytemplate",
      key: "1",
      width: 150,
    },
    {
      title: "Created by",
      dataIndex: "createdby",
      key: "2",
      width: 150,
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "3",
      width: 150,
    },
    {
      title: "Created date",
      dataIndex: "createddate",
      key: "4",
      width: 150,
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => {
        return (
          <>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <MenuOutlined />
            </Dropdown>
          </>
        );
      },
    },
  ];

  const data = [];

  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      type: `การจัดเก็บ ลบ และทำลายข้อมูล ${i}`,
      policytemplate: `PDPA${i}`,
      createdby: `Jones Dermot ${i}`,
      lastUpdated: `2021-04-21 11:59:24 ${i}`,
      createddate: `2021-04-21 11:59:24 ${i}`,
    });
  }
  const tabList = [
    {
      key: "tab1",
      tab: "tab1",
    },
    {
      key: "tab2",
      tab: "tab2",
    },
  ];
  return (
    <>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details " key="1">
            <ProcessingActivityDetail baseUrl={baseUrl} />
          </TabPane>
          <TabPane tab="Assessment " key="2">
            <ProcessingActivityAssessment baseUrl={baseUrl} />
          </TabPane>
          <TabPane tab="Risk " key="3">
            <ProcessingActivityRisk baseUrl={baseUrl} />
          </TabPane>
          <TabPane tab="Attachment " key="4">
            <ProcessingActivityAttachment baseUrl={baseUrl} />
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
