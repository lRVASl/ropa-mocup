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
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
// import { Route, useRouteMatch, Switch, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// const { TabPane } = Tabs;

export const Main: React.FC<{}> = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
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
      width: 200,
      dataIndex: "type",
      key: "type",
      fixed: "left",
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
          <b style={{ fontSize: "24px" }}>Processing Activity</b>
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
            <Row gutter={10}>
              <Col span={5} offset={15}>
                Filter : <Input placeholder="Search" />
              </Col>
              <Col span={4} style={{ textAlign: "right" }}>
                <Button type="primary" onClick={showModal}>
                  {"Add Processing Activity"}
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
      <Modal
        title={"Add processing activity"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label={"No"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Name"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Type"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Policy Template"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Created By"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Last Updated"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Created date"}>
            <Input />
          </Form.Item>
          <div style={{ textAlign: "right" }}>
            <Button onClick={handleSubmit} type="primary">
              Add
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
