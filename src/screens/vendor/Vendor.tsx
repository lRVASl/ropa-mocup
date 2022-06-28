import { DashboardFilled, MenuOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";

export const Vendor: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  // const { Title } = Typography;
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
      width: 40,
      dataIndex: "key",
      key: "key",
      fixed: "left",
    },
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Type",
      width: 200,
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Policy Template",
      dataIndex: "policytemplate",
      key: "1",
      width: 70,
    },
    {
      title: "Created by",
      dataIndex: "createdby",
      key: "2",
      width: 80,
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "3",
      width: 100,
    },
    {
      title: "Created date",
      dataIndex: "createddate",
      key: "4",
      width: 100,
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 50,
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
  return (
    <>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        <Card style={{ width: "100%", textAlign: "left" }}>
          <b style={{ fontSize: "24px" }}>Inventory</b>
        </Card>
      </Row>
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
            <Row gutter={20}>
              <Col span={1} offset={15}>
                {"Filter:"}
              </Col>
              <Col span={6}>
                <Input placeholder="search" />
              </Col>
              <Col span={2}>
                <Button style={{ textAlign: "center" }} type="primary">
                  {"Add Vender"}
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
    </>
  );
};
