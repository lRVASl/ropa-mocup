import React, { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Table,
  Input,
  Modal,
  Form,
  Select,
} from "antd";

const { Option } = Select;

interface Props {
  baseUrl: string;
}

const columns: any = [
  {
    title: "No",
    width: 50,
    dataIndex: "key",
    key: "key",
    fixed: "left",
  },
  {
    title: "Name of Activity",
    width: 120,
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
    width: 170,
    dataIndex: "ownerorganize",
    key: "ownerorganize",
    fixed: "left",
  },
  {
    title: "Assessor",
    dataIndex: "assessor",
    key: "assessor",
    width: 170,
  },
  {
    title: "Completed Date",
    dataIndex: "completeddate",
    key: "completeddate",
    width: 170,
  },
  {
    title: "Created by",
    dataIndex: "createby",
    key: "createby",
    width: 170,
  },
  {
    title: "Created date",
    dataIndex: "createddate",
    key: "completeddate",
    width: 170,
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
];

export const AssetsRelated: React.FC<Props> = (): React.ReactElement => {
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

  return (
    <>
      <Modal
        title="Add Activity [Activity 1]"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>Cancel</Button>,
          <Button type="primary" onClick={handleOk}>
            Add
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="Assess Template:">
            <Select defaultValue={"Select Type"}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Assets">
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["Microsoft", "HR Analytics"]}
            ></Select>
          </Form.Item>
        </Form>
      </Modal>
      <Card
        title={
          <Row gutter={10}>
            <Col span={6} offset={15}>
              Filter : <Input placeholder="Search" />
            </Col>
            <Col span={3} style={{ textAlign: "right" }}>
              <Button type="primary" onClick={showModal}>
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
    </>
  );
};
