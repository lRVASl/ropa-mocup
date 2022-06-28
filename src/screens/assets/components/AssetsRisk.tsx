import React from "react";
import { Button, Card, Row, Col, Table, Input } from "antd";

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
    title: "Activity Lists",
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
    width: 120,
    dataIndex: "ownerorganize",
    key: "ownerorganize",
    fixed: "left",
  },
  {
    title: "Host Location",
    dataIndex: "hostlocation",
    key: "hostlocation",
    width: 100,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 80,
  },
  {
    title: "IT Owner",
    dataIndex: "itowner",
    key: "itowner",
    width: 100,
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
    width: 80,
  },
  {
    title: "Created by",
    dataIndex: "createby",
    key: "createby",
    width: 150,
  },
  {
    title: "Created date",
    dataIndex: "createddate",
    key: "createddate",
    width: 170,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 80,
    render: (text: any, data: any) => {
      return (
        <>
          <a>Edit</a>
        </>
      );
    },
  },
];

const data = [
  {
    key: 1,
    name: `Microsoft`,
    hostlocation: `Thailand`,
    ownerorganize: `HR`,
    itowner: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
    status: `New`,
    risk: `Low`,
    type: `App`,
  },
  {
    key: 2,
    name: `IT Centrol`,
    hostlocation: `Thailand`,
    ownerorganize: `BSD`,
    itowner: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
    status: `In progress`,
    risk: `Medium`,
    type: `Vender`,
  },
];

export const AssetsRisk: React.FC<Props> = (): React.ReactElement => {
  return (
    <>
      <Card
        title={
          <Row>
            <Col span={2} offset={15}></Col>
            <Col span={6}>
              Filter : <Input placeholder="Search" />
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
