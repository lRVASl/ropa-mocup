import React from "react";
import { Card, Row, Form, Col, Input, Select, Button } from "antd";
const { TextArea } = Input;
const { Option } = Select;

export const FormAddProduct: React.FC<{}> = () => {
  return (
    <>
      <Card
        style={{ width: "100%", textAlign: "left" }}
        title={<b>การประมวลผลข้อมูลส่วนบุคคล</b>}
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12} style={{ padding: "10px 10px" }}>
              <Form.Item label="ประเภทสินค้า">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
            <Col span={12} style={{ padding: "10px 10px" }}>
              <Form.Item label="หน่วยงาน / แผนก">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} style={{ padding: "10px 10px" }}>
              <Form.Item label="วัตถุประสงค์ในการเก็บ รวบรวม ใช้หรือเปิดเผย">
                <TextArea placeholder="Text" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8} style={{ padding: "10px 10px" }}>
              <Form.Item label="ฐานความชอบด้วยกฎหมายในการประมวลผล">
                <Select defaultValue={"กรุณาเลือก"}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8} style={{ padding: "10px 10px" }}>
              <Form.Item label="ประเภทของเจ้าของข้อมูลส่วนบุคคล">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
            <Col span={8} style={{ padding: "10px 10px" }}>
              <Form.Item label="ประเภทของข้อมูลส่วนบุคคล">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8} style={{ padding: "10px 10px" }}>
              <Form.Item label="ประเภทผู้รับข้อมูลส่วนบุคคล">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
            <Col span={8} style={{ padding: "10px 10px" }}>
              <Form.Item label="มีการส่งข้อมูลให้ผู้ประมวลผลข้อมูลส่วนบุคคลหรือไม่">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
            <Col span={8} style={{ padding: "10px 10px" }}>
              <Form.Item label="ประเทศ หรือ องค์กรต่างประเทศที่มีการโอนข้อมูลส่วนบุคคล">
                <Input placeholder="example" />
              </Form.Item>
            </Col>
            <Col span={8} style={{ padding: "10px 10px" }}>
              <Form.Item label="ระยะเวลาการจัดเก็บข้อมูลส่วนบุคคล">
                <Input placeholder="ระยะเวลาการจัดเก็บข้อมูลส่วนบุคคล" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Row gutter={12}>
          <Col>
            <Button>Cancel</Button>
          </Col>
          <Col>
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
