import { Card, Col, Row, Select, Input, Button, Table } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Search } = Input;

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
    title: "Note",
    width: 700,
    dataIndex: "note",
    key: "note",
    fixed: "left",
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
];

const data = [
  {
    key: 1,
    name: `Microsoft`,
    note: `This document contains responses`,
    ownerorganize: `HR`,
    assessor: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
  },
  {
    key: 2,
    name: `IT Centrol`,
    note: `This document contains responses`,
    ownerorganize: `BSD`,
    assessor: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
  },
  {
    key: 3,
    name: `HR Analytics`,
    note: `This document contains responses`,
    ownerorganize: `IT`,
    assessor: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
  },
  {
    key: 4,
    name: `Salesforce`,
    note: `This document contains responses`,
    ownerorganize: `IT`,
    assessor: `Jones Dermot`,
    completeddate: `2021-04-21 11:59:24`,
    createddate: `2021-04-21 11:59:24`,
    createby: `Jones Dermot`,
  },
];
export const ProcessingActivityAttachment: React.FC<Props> = ({ baseUrl }) => {
  const onSearch = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Card>
        <Row gutter={10}>
          <Col span={1} offset={17}>
            <Select defaultValue={"Filter"} style={{ textAlign: "right" }}>
              <Option value="name1">name1</Option>
              <Option value="name2">name2</Option>
              <Option value="name3">name3</Option>
              <Option value="name4">name4</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </Col>
          <Col span={2}>
            <Button type="primary">
              <PlusOutlined /> {"Add Asses"}
            </Button>
          </Col>
        </Row>
      </Card>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />
    </>
  );
};
