import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
  Table,
  Tabs,
  Typography,
} from "antd";
import { useHistory } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

interface Props {
  baseUrl: string;
}

export const MainAsset: React.FC<Props> = ({ baseUrl }): React.ReactElement => {
  const { push } = useHistory();

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

  const columns: any = [
    {
      title: "No",
      width: 30,
      dataIndex: "key",
      key: "key",
      fixed: "left",
      render: (text: any) => text + 1,
    },
    {
      title: "Assest Lists",
      width: 70,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text: string, record: any, index: number) => (
        <a onClick={() => push(`/Assets/${record.key}`)}>{text}</a>
      ),
    },
    {
      title: "Owner Organize",
      dataIndex: "createddate",
      key: "4",
      width: 100,
    },
    {
      title: "Host Location",
      dataIndex: "createddate",
      key: "4",
      width: 100,
    },
    {
      title: "Type",
      width: 100,
      dataIndex: "type",
      key: "type",
      fixed: "left",
    },
    {
      title: "Respondent",
      dataIndex: "policytemplate",
      key: "1",
      width: 60,
    },
    {
      title: "Status",
      dataIndex: "createddate",
      key: "4",
      width: 100,
    },

    {
      title: "Risk",
      dataIndex: "createddate",
      key: "4",
      width: 100,
    },
    {
      title: "Created by",
      dataIndex: "createdby",
      key: "2",
      width: 100,
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "3",
      width: 100,
    },
    {
      title: "Created date",
      dataIndex: "lastUpdated",
      key: "3",
      width: 100,
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 40,
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
      name: `Joe Biden ${i}`,
      type: `การจัดเก็บ ลบ และทำลายข้อมูล ${i}`,
      policytemplate: `PDPA${i}`,
      createdby: `Jones Dermot ${i}`,
      lastUpdated: `2021-04-21 11:59:24 ${i}`,
      createddate: `2021-04-21 11:59:24 ${i}`,
    });
  }

  return (
    <>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        <Card
          style={{ width: "100%", textAlign: "left" }}
          title={
            <Row>
              <b style={{ fontSize: "24px" }}>Assets</b>
            </Row>
          }
        >
          <Row
            gutter={[
              { xs: 8, sm: 16 },
              { xs: 8, sm: 16 },
            ]}
            style={{ marginTop: "2rem" }}
          >
            <Card
              style={{ width: "100%", textAlign: "left" }}
              title={
                <Row gutter={10}>
                  <Col span={2} offset={14}></Col>
                  <Col span={6}>
                    Filter : <Input placeholder="Search" />
                  </Col>
                  <Col span={2} style={{ textAlign: "right" }}>
                    <Button
                      type="primary"
                      //  onClick={showModal}
                    >
                      +Add Asset
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
          </Row>
        </Card>
      </Row>
    </>
  );
};
