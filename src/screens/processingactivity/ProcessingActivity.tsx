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
export const ProcessingActivity: React.FC<Props> = ({ baseUrl }) => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { Title } = Typography;

  const onChange = (key: string) => {
    console.log(key);
  };

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
                push(`processingactivity/detail/${data.key}`);
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

  const data = [
    {
      key: 1,
      name: `Activity 1`,
      ownerorganize: `HR 1`,
      processowner: `HR 1`,
      status: `Status 1`,
      risk: `Low 1`,
      createdby: `Createdby 1`,
      respondent: `Respondent 1`,
      approver: `Approver 1`,
      lastupdated: `lastupdated 1`,
      createddate: `Created date 1`,
    },
    {
      key: 2,
      name: `Activity 2`,
      ownerorganize: `HR 2`,
      processowner: `HR 2`,
      status: `Status 2`,
      risk: `Low 2`,
      createdby: `Createdby 2`,
      respondent: `Respondent 2`,
      approver: `Approver 2`,
      lastupdated: `lastupdated 2`,
      createddate: `Created date 2`,
    },
    {
      key: 3,
      name: `Activity 3`,
      ownerorganize: `HR 3`,
      processowner: `HR 3`,
      status: `Status 3`,
      risk: `Low 3`,
      createdby: `Createdby 3`,
      respondent: `Respondent 3`,
      approver: `Approver 3`,
      lastupdated: `lastupdated 3`,
      createddate: `Created date 3`,
    },
    {
      key: 4,
      name: `Activity 4`,
      ownerorganize: `HR 4`,
      processowner: `HR 4`,
      status: `Status 4`,
      risk: `Low 4`,
      createdby: `Createdby 4`,
      respondent: `Respondent 4`,
      approver: `Approver 4`,
      lastupdated: `lastupdated 4`,
      createddate: `Created date 4`,
    },
  ];

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
                  + Add Processing Activity
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
      </Row>
    </>
  );
};
