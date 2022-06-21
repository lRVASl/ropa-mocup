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
  Tabs,
} from "antd";
import React, { useEffect, useState } from "react";

const { TabPane } = Tabs;
export const Assets: React.FC<{}> = () => {
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

  const { Title } = Typography;
  const columns: any = [
    {
      title: "No",
      width: "5%",
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

  const onChange = (key: string) => {
    console.log(key);
  };
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
      ></Row>
      <Card
        style={{ width: "100%", textAlign: "left" }}
        title={
          <Row>
            <b style={{ fontSize: "24px" }}>Processing Activity</b>
          </Row>
        }
      >
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Details" key="1">
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
                  <Row>
                    <Col span={1} offset={12}>
                      Filter:
                    </Col>
                    <Col span={6}>
                      <Input placeholder="search" />
                    </Col>
                    <Col span={4} offset={1}>
                      <Button type="primary"> + Add Policy</Button>
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
          </TabPane>
          <TabPane tab="Activity" key="2">
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
                  <Row>
                    <Col span={1} offset={12}>
                      Filter:
                    </Col>
                    <Col span={6}>
                      <Input placeholder="search" />
                    </Col>
                    <Col span={4} offset={1}>
                      <Button type="primary"> + Add Policy</Button>
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
          </TabPane>
          <TabPane tab="Assessment" key="3">
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
                  <Row>
                    <Col span={1} offset={12}>
                      Filter:
                    </Col>
                    <Col span={6}>
                      <Input placeholder="search" />
                    </Col>
                    <Col span={4} offset={1}>
                      <Button type="primary"> + Add Policy</Button>
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
          </TabPane>
          <TabPane tab="Related" key="4">
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
                  <Row>
                    <Col span={1} offset={12}>
                      Filter:
                    </Col>
                    <Col span={6}>
                      <Input placeholder="search" />
                    </Col>
                    <Col span={4} offset={1}>
                      <Button type="primary"> + Add Policy</Button>
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
          </TabPane>
          <TabPane tab="Risk" key="5">
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
                  <Row>
                    <Col span={1} offset={12}>
                      Filter:
                    </Col>
                    <Col span={6}>
                      <Input placeholder="search" />
                    </Col>
                    <Col span={4} offset={1}>
                      <Button type="primary"> + Add Policy</Button>
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
          </TabPane>
          <TabPane tab="Attachment" key="6">
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
                  <Row>
                    <Col span={1} offset={12}>
                      Filter:
                    </Col>
                    <Col span={6}>
                      <Input placeholder="search" />
                    </Col>
                    <Col span={4} offset={1}>
                      <Button type="primary"> + Add Policy</Button>
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
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
