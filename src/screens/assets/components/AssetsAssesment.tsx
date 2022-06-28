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
  DatePicker,
} from "antd";
import FormItem from "antd/lib/form/FormItem";

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

export const AssetsAssesment: React.FC<Props> = (): React.ReactElement => {
  //  set modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ModalAsset = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e: any) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        title={
          <Row gutter={10}>
            <Col span={6} offset={15}>
              Filter : <Input placeholder="Search" />
            </Col>
            <Col span={3} style={{ textAlign: "right" }}>
              <Button type="primary" onClick={ModalAsset}>
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
      <Modal
        title="Add Assesment"
        visible={isModalVisible}
        onCancel={handleCancel}
        width="700px"
        footer={[]}
      >
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
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
    </>
  );
};
