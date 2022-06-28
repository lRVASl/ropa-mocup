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
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";

const { Option } = Select;
export const Assessments: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  // const { Title } = Typography;

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
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
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
      title: "Status",
      width: 100,
      dataIndex: "status",
      key: "status",
      fixed: "left",
    },
    {
      title: "Organization",
      width: 100,
      dataIndex: "organization",
      key: "organization",
      fixed: "left",
    },
    {
      title: "Created by",
      dataIndex: "createdby",
      key: "createdby",
      width: 150,
    },
    {
      title: "Respondent",
      dataIndex: "respondent",
      key: "respondent",
      width: 150,
    },
    {
      title: "Approver",
      dataIndex: "approver",
      key: "approver",
      width: 150,
    },
    {
      title: "Created data",
      dataIndex: "createddata",
      key: "2",
      width: 150,
    },
    {
      title: "Expire",
      dataIndex: "expire",
      key: "3",
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
      name: `Assessment ${i}`,
      type: `type ${i}`,
      status: `status ${i}`,
      organization: `Organization ${i}`,
      createdby: `Jones Dermot ${i}`,
      respondent: `Respondent ${i}`,
      approver: `Approver ${i}`,
      createddata: `2021-04-21 11:59:24 ${i}`,
      expire: `2021-04-21 11:59:24 ${i}`,
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
          <b style={{ fontSize: "24px" }}>Assessments</b>
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
              <Col span={1} offset={13}>
                Filter:
              </Col>
              <Col span={7}>
                <Input placeholder="search" />
              </Col>
              <Col span={3} style={{ textAlign: "right" }}>
                <Button type="primary" onClick={showModal}>
                  + Add Assessment
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
    </>
  );
};
