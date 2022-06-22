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
  Space,
  Table,
  Tooltip,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";

const { Option } = Select;
interface Props {
  baseUrl: string;
}
export const PolicyManagement: React.FC<Props> = ({ baseUrl }) => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

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
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onGenderChange = (value: any) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
    }
  };

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
      render: (name: any) => {
        return <a>{name}</a>;
      },
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

  for (let i = 1; i < 6; i++) {
    data.push({
      key: i,
      name: `Name ${i}`,
      type: `การจัดเก็บ ลบ และทำลายข้อมูล ${i}`,
      policytemplate: `PDPA${i}`,
      createdby: `Jones Dermot ${i}`,
      lastUpdated: `2021-04-21 11:59:24 ${i}`,
      createddate: `2021-04-21 11:59:24 ${i}`,
    });
  }
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        <Card style={{ width: "100%", textAlign: "left" }}>
          <b style={{ fontSize: "24px" }}>Policy Management</b>
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
            <Row>
              <Col span={1} offset={12}>
                Filter:
              </Col>
              <Col span={6}>
                <Input placeholder="search" />
              </Col>
              <Col span={4} offset={1}>
                <Button type="primary" onClick={showModal}>
                  {" "}
                  + Add Policy
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
          <Modal
            title="Add Policy"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form {...layout} form={form} name="control-hooks">
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select Type"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="policytemplate"
                label="Policy Template"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select Template"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Form>
          </Modal>
        </Card>
      </Row>
    </>
  );
};
