import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Menu,
  Modal,
  Row,
  Table,
  Tabs,
  Typography,
  Form,
  DatePicker,
} from "antd";
import { useHistory } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

interface Props {
  baseUrl: string;
}

export const MainAsset: React.FC<Props> = ({ baseUrl }): React.ReactElement => {
  const { push } = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
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
      width: "5%",
      dataIndex: "key",
      fixed: "left",
      key: "key",
      render: (text: any) => text + 1,
    },
    {
      title: "Assest Lists",
      width: "10%",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text: string, record: any, index: number) => (
        <a onClick={() => push(`/Assets/${record.key}`)}>{text}</a>
      ),
    },
    {
      title: "Owner Organize",
      dataIndex: "policytemplate",
      key: "4",
      width: "10%",
    },
    {
      title: "Host Location",
      dataIndex: "hostlocation",
      key: "4",
      width: "10%",
    },
    {
      title: "Type",
      width: "7%",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Respondent",
      dataIndex: "respondent",
      key: "1",
      width: "10%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "4",
      width: "7%",
    },

    {
      title: "Risk",
      dataIndex: "risk",
      key: "4",
      width: "7%",
    },
    {
      title: "Created by",
      dataIndex: "createdby",
      key: "2",
      width: "10%",
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "3",
      width: "15%",
    },
    {
      title: "Created date",
      dataIndex: "lastUpdated",
      key: "3",
      width: "15%",
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: "6%",
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
      name: `IT Centrol ${i}`,
      type: `App ${i}`,
      policytemplate: `PDPA${i}`,
      createdby: `Jones Dermot ${i}`,
      lastUpdated: `2021-04-21 11:59:24 ${i}`,
      createddate: `2021-04-21 11:59:24 ${i}`,
      risk: `Low ${i}`,
      hostlocation: `Thailand ${i}`,
      status: `New ${i}`,
      respondent: `UserA ${i}`,
    });
  }

  return (
    <>
      <Modal
        title={"Add Asset"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="No">
            <Input />
          </Form.Item>
          <Form.Item label="Name of Activity">
            <Input />
          </Form.Item>
          <Form.Item label="Owner Organize">
            <Input />
          </Form.Item>
          <Form.Item label="Assessor">
            <Input />
          </Form.Item>
          <Form.Item label="Completed Date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Created By">
            <Input />
          </Form.Item>
          <Form.Item label="Created date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <div style={{ textAlign: "right" }}>
            <Button type="primary" onClick={handleOk}>
              Add
            </Button>
          </div>
        </Form>
      </Modal>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        <Card style={{ width: "100%", textAlign: "left" }}>
          <b style={{ fontSize: "24px" }}>Assets</b>
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
              <Col span={6} offset={15}>
                Filter : <Input placeholder="Search" />
              </Col>
              <Col span={3} style={{ textAlign: "right" }}>
                <Button type="primary" onClick={showModal}>
                  {"Add Asset"}
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
