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
      width: 50,
      dataIndex: "key",
      key: "key",
      fixed: "left",
    },
    {
      title: "Assest Lits",
      width: 70,
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
      title: "Assessment",
      width: 100,
      dataIndex: "assessment",
      key: "assessment",
      fixed: "left",
    },
    {
      title: "Owner Organize",
      dataIndex: "ownerorganize",
      key: "ownerorganize",
      width: 150,
    },
    {
      title: "Assessor",
      dataIndex: "assessor",
      key: "assessor",
      width: 150,
    },
    {
      title: "Completed Date",
      dataIndex: "completeddate",
      key: "completeddate",
      width: 150,
    },
    {
      title: "Created by",
      dataIndex: "createby",
      key: "createby",
      width: 150,
    },
    {
      title: "Created date",
      dataIndex: "createddate",
      key: "createddate",
      width: 150,
    },
  ];

  const data = [
    {
      key: 1,
      name: `Microsoft`,
      assessment: `Assessment 1`,
      ownerorganize: `HR`,
      assessor: `Jones Dermot`,
      completeddate: `2021-04-21 11:59:24`,
      createddate: `2021-04-21 11:59:24`,
      createby: `Jones Dermot`,
    },
    {
      key: 2,
      name: `IT Centrol`,
      assessment: `Assessment 2`,
      ownerorganize: `BSD`,
      assessor: `Jones Dermot`,
      completeddate: `2021-04-21 11:59:24`,
      createddate: `2021-04-21 11:59:24`,
      createby: `Jones Dermot`,
    },
    {
      key: 3,
      name: `HR Analytics`,
      assessment: `Assessment 3`,
      ownerorganize: `IT`,
      assessor: `Jones Dermot`,
      completeddate: `2021-04-21 11:59:24`,
      createddate: `2021-04-21 11:59:24`,
      createby: `Jones Dermot`,
    },
    {
      key: 4,
      name: `Salesforce`,
      assessment: `Assessment 4`,
      ownerorganize: `IT`,
      assessor: `Jones Dermot`,
      completeddate: `2021-04-21 11:59:24`,
      createddate: `2021-04-21 11:59:24`,
      createby: `Jones Dermot`,
    },
  ];

  return (
    <>
      <Card
        title={
          <Row gutter={10}>
            <Col span={2} offset={13}></Col>
            <Col span={6}>
              Filter : <Input placeholder="Search" />
            </Col>
            <Col span={3} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                // onClick={showModal}
              >
                + Add Asset
              </Button>
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
    </>
  );
};
