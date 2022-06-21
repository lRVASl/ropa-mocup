import React, { useState } from "react";
import { Card, Row, Col, Button, Input, Form, Select } from "antd";
const { Option } = Select;
const { TextArea } = Input;
import { PlusOutlined } from "@ant-design/icons";

const { v4: uuidv4 } = require("uuid");

export const AddProduct: React.FC<{}> = () => {
  const [addProduct, setaddProduct] = useState([
    {
      check: true,
      id: uuidv4(),
      nameproduct: "",
    },
  ]);

  // console.log(addProduct);

  const handleaddProduct = () => {
    const oldProduct = addProduct;
    const changeOldProduct = oldProduct.map((AddProduct) => {
      return {
        ...AddProduct,
        check: false,
      };
    });
    // console.log(changeOldProduct);
    setaddProduct([
      ...changeOldProduct,
      { check: true, id: uuidv4(), nameproduct: "" },
    ]);
    // console.log(addProduct);
  };

  const HandleChangeform = (id: any) => {
    const oldProduct = addProduct.map((x) => {
      if (x.id == id) {
        x.check = true;
      } else {
        x.check = false;
      }
      return x;
    });
    setaddProduct([...oldProduct]);
    // console.log(oldProduct);
  };

  const handlechangeInput = (index: any, e: any) => {
    console.log(index, e.target.nameproduct);
  };

  return (
    <>
      <Card style={{ width: "100%" }}>
        <Row
          gutter={[
            { xs: 4, sm: 16 },
            { xs: 4, sm: 16 },
          ]}
        >
          <Col span={2} style={{ textAlign: "left" }}>
            Product :
          </Col>
          <Col span={18} style={{ textAlign: "left" }}>
            {addProduct.map((addProduct, index) => (
              <div
                style={{ display: "inline" }}
                key={index}
                className="service"
              >
                <Button
                  style={{ marginRight: "10px", border: "none" }}
                  onClick={() => HandleChangeform(addProduct.id)}
                >
                  Product {index}
                </Button>
              </div>
            ))}
          </Col>
          <Col span={4} style={{ textAlign: "right" }}>
            <Button onClick={handleaddProduct} type="primary">
              <PlusOutlined /> Add
            </Button>
          </Col>
        </Row>
      </Card>

      <Card style={{ width: "100%" }}>
        {addProduct.map(
          (addProduct, index) =>
            addProduct.check && (
              <div
                style={{ display: "inline" }}
                key={index}
                className="service"
              >
                <Card
                  style={{ width: "100%", textAlign: "left" }}
                  title={<b>การประมวลผลข้อมูลส่วนบุคคล {addProduct.id}</b>}
                >
                  <Form layout="vertical" >
                    <Row gutter={16}>
                      <Col span={12} style={{ padding: "10px 10px" }}>
                        <Form.Item label="ประเภทสินค้า">
                          <Input
                            name="nameproduct"
                            placeholder="example"
                            value={addProduct.nameproduct}
                            onChange={(e) => handlechangeInput(e, index)}
                          />
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
                </Card>
              </div>
            )
        )}
        <Row gutter={12} style={{ marginTop: "20px" }}>
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
