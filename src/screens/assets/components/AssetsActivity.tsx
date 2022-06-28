import React, { useState } from "react";
import { Button, Card, Row, Col, Table, Input, Modal } from "antd";

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

export const AssetsActivity: React.FC<Props> = (): React.ReactElement => {
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
        title={"Activity"}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
      ></Modal>
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
