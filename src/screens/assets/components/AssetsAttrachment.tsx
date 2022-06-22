import React from "react";
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
} from "antd";
import { useHistory } from "react-router";

const { TabPane } = Tabs;

interface Props {
  baseUrl: string;
}
const { Option } = Select;

export const AssetsAttrachment: React.FC<Props> = ({ baseUrl }) => {
  const columns: any = [
    {
      title: "No",
      width: 30,
      dataIndex: "key",
      key: "key",
      fixed: "left",
    },
    {
      title: "Activity List",
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
      key: "assessment",
      fixed: "left",
    },
    {
      title: "Created date",
      dataIndex: "createddate",
      key: "createddate",
      width: 150,
    },
    {
      title: "Created by",
      dataIndex: "createby",
      key: "createby",
      width: 150,
    },
  ];

  const data = [
    {
      key: 1,
      name: `Microsoft`,
      note: "This document contains responses",
      createddate: `2021-04-21 11:59:24`,
      createby: `Jones Dermot`,
    },
    {
      key: 2,
      name: `IT Centrol`,
      note: "This document contains responses",
      createddate: `2021-04-21 11:59:24`,
      createby: `Jones Dermot`,
    },
  ];

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
                //  onClick={showModal}
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
