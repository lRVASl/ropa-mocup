import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  DatePicker,
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
  //  set modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // set state add
  const [getnumbervalue, setNumbervalue] = useState("");
  const [getactivitylist, setActivitylist] = useState("");
  const [getnote, setNote] = useState("");
  const [getcreateddate, setCreateddate] = useState("");

  const ShowModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e: any) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns: any = [
    {
      title: "No",
      width: 50,
      dataIndex: "key",
      key: "key",
      fixed: "left",
    },
    {
      title: "Activity List",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text: any, data: any) => {
        return (
          <>
            <Button type="link" onClick={() => {}}>
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
            <Col span={5} offset={16}>
              Filter : <Input placeholder="Search" />
            </Col>
            <Col span={3} style={{ textAlign: "right" }}>
              <Button type="primary" onClick={ShowModal}>
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
        title="Add Attrachment"
        visible={isModalVisible}
        onCancel={handleCancel}
        width="700px"
        footer={[]}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={handleOk}
          style={{ textAlign: "right" }}
        >
          <Form.Item label={"No."} name="key">
            <Input
              placeholder="Please input text"
              onChange={(e) => setNumbervalue(e.target.value)}
            />
          </Form.Item>

          <Form.Item label={"Activity List"} name="activity-name">
            <Input
              placeholder="Please input text"
              onChange={(e) => setActivitylist(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="note" label={"Note"}>
            <Input
              placeholder="Please input text "
              onChange={(e) => setNote(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="created-date" label={"Created date"}>
            <DatePicker
              style={{ width: "100%" }}
              onChange={(e: any) => setCreateddate(e)}
            />
          </Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};
