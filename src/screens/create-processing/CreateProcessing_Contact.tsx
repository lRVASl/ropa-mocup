import React from "react";
import { Switch, Route } from "react-router-dom";
import { Card, Form, Input, Row, Col } from "antd";
const { TextArea } = Input;

import { AddProduct } from "./components/AddProduct";

export const CreateProcessing_Contact: React.FC<{}> = () => {
  return (
    <>
      <Card
        style={{ width: "100%", textAlign: "left" }}
        title={<b>ข้อมูลชื่อและราายชื่อการติดต่อ</b>}
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={8} style={{ padding: "8px 8px" }}>
              <Form.Item label="ชื่อ - สกุล">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
            <Col span={8} style={{ padding: "8px 8px" }}>
              <Form.Item label="เบอร์โทรศัพท์">
                <Input maxLength={10} placeholder="example" />
              </Form.Item>
            </Col>
            <Col span={8} style={{ padding: "8px 8px" }}>
              <Form.Item label="อีเมล">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} style={{ padding: "8px 8px" }}>
              <Form.Item label="ที่อยู่">
                <TextArea placeholder="Text" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Switch>
        <Route>
          <AddProduct />
        </Route>
      </Switch>
    </>
  );
};
