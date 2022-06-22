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
import { useHistory } from "react-router";

const { TabPane } = Tabs;

interface Props {
  baseUrl: string;
}
const { Option } = Select;
export const ProcessingActivityAssessment: React.FC<Props> = ({ baseUrl }) => {
  const columns: any = [
    {
      title: "No",
      width: 100,
      dataIndex: "key",
      key: "key",
      fixed: "left",
    },
    {
      title: "Name",
      width: 150,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text: any, data: any) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                // push(`processingactivity/detail/${data.key}`);
              }}
            >
              {text}
            </Button>
          </>
        );
      },
    },
    {
      title: "Owner Organize",
      width: 150,
      dataIndex: "ownerorganize",
      key: "ownerorganize",
      fixed: "left",
    },
    {
      title: "processowner",
      dataIndex: "processowner",
      key: "processowner",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Risk",
      dataIndex: "risk",
      key: "risk",
      width: 150,
    },
    {
      title: "Created By",
      dataIndex: "createdby",
      key: "createdby",
      width: 150,
    },
    {
      title: "Respondent",
      dataIndex: "respondent",
      key: "respondent",
      width: 100,
    },
    {
      title: "Approver",
      dataIndex: "Approver",
      key: "Approver",
      width: 100,
    },
    {
      title: "Last Updated",
      dataIndex: "lastupdated",
      key: "lastupdated",
      width: 150,
    },
    {
      title: "Created date",
      dataIndex: "createddate",
      key: "createddate",
      width: 150,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
    },
  ];

  const data = [
    {
      key: 1,
      name: `Microsoft`,
      assessment: `Assessment 1`,
      ownerorganize: `HR 1`,
      assessor: `Status 1`,
      completeddate: `Low 1`,
      createddate: `Created date 1`,
    },
    {
      key: 2,
      name: `Activity 2`,
      assessment: `HR 2`,
      ownerorganize: `HR 2`,
      assessor: `Status 2`,
      completeddate: `Low 2`,
      createddate: `Created date 2`,
    },
    {
      key: 3,
      name: `Activity 1`,
      assessment: `HR 1`,
      ownerorganize: `HR 1`,
      assessor: `Status 1`,
      completeddate: `Low 1`,
      createddate: `Created date 1`,
    },
    {
      key: 4,
      name: `Activity 1`,
      assessment: `HR 1`,
      ownerorganize: `HR 1`,
      assessor: `Status 1`,
      completeddate: `Low 1`,
      createddate: `Created date 1`,
    },
  ];

  return (
    <>
      {/* <Row> */}
      <Card
        title={
          <Row>
            <Col span={2} offset={11}></Col>
            <Col span={6}>
              Filter : <Input placeholder="Search" />
            </Col>
            <Col span={3} offset={2}>
              <Button type="primary">+Add Asset</Button>
            </Col>
          </Row>
        }
      >
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1500,
            y: 300,
          }}
        />
      </Card>
      {/* </Row> */}
    </>
  );
};
