import React from "react";
import { Button, Card, Row, Col, Table, Input } from "antd";

interface Props {
  baseUrl: string;
}

const columns: any = [
  {
    title: "No",
    width: 30,
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
  return (
    <>
      <Card
        title={
          <Row gutter={10}>
            <Col span={2} offset={14}></Col>
            <Col span={6}>
              Filter : <Input placeholder="Search" />
            </Col>
            <Col span={2} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                // onClick={showModal}
              >
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
