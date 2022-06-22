import { Card, Col, Row, Select, Input, Table, Button } from "antd";
import React from "react";

const { Option } = Select;
const { Search } = Input;

interface Props {
  baseUrl: string;
}

const onSearch = (value: any) => {
  console.log(value);
};

const columns: any = [
  {
    title: "No",
    width: 30,
    dataIndex: "key",
    key: "key",
    fixed: "left",
  },
  {
    title: "Assest Lits",
    width: 70,
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
    title: "Assessment",
    width: 100,
    dataIndex: "assessment",
    key: "assessment",
    fixed: "left",
  },
  {
    title: "Owner Organize",
    dataIndex: "ownerorganize",
    key: "ownerorganize",
    width: 100,
  },
  {
    title: "Assessor",
    dataIndex: "assessor",
    key: "assessor",
    width: 100,
  },
  {
    title: "Completed Date",
    dataIndex: "completeddate",
    key: "completeddate",
    width: 100,
  },
  {
    title: "Created by",
    dataIndex: "createby",
    key: "createby",
    width: 100,
  },
  {
    title: "Created date",
    dataIndex: "createddate",
    key: "createddate",
    width: 100,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 100,
    render: (text: any, data: any) => {
      return (
        <>
          <a> Edit</a>
        </>
      );
    },
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
  {
    key: 3,
    name: `HR Analytics`,
    assessment: `Assessment 3`,
    ownerorganize: `IT`,
    assessor: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
  },
  {
    key: 4,
    name: `Salesforce`,
    assessment: `Assessment 4`,
    ownerorganize: `IT`,
    assessor: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
  },
];

export const ProcessingActivityRisk: React.FC<Props> = ({ baseUrl }) => {
  return (
    <>
      <Card
        title={
          <Row gutter={2}>
            <Col span={1} offset={19} style={{ textAlign: "right" }}>
              <Select defaultValue={"Filter"}>
                <Option value="name1">Name1</Option>
                <Option value="name2">Name2</Option>
                <Option value="name3">Name3</Option>
                <Option value="name4">Name4</Option>
              </Select>
            </Col>
            <Col span={4} style={{ textAlign: "right" }}>
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 200 }}
              />
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
