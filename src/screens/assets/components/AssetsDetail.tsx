import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Row, Col, Input } from "antd";
interface Props {
  baseUrl: string;
}
export const AssetsDetail: React.FC<Props> = (): React.ReactElement => {
  const { push } = useHistory();
  return (
    <>
      <Card style={{ textAlign: "left" }} title={"Inventory Details"}>
        <Form
          layout="vertical"
          name="advanced_search"
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Name of Asset`} label={`Name of Asset`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Managing Organization`}
                label={`Managing Organization`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Hosting Location`} label={`Hosting Location`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Type`} label={`Type`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Note`} label={`Note`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`IT OWner`} label={`IT OWner`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name={`Internal or 3rd Party`}
                label={`Internal or 3rd Party`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Storage Format`} label={`Storage Format`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Hosting Type`} label={`Hosting Type`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Hosting Provider`} label={`Hosting Provider`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Technical Security Measures`}
                label={`Technical Security Measures`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Volume of Data Subjects`}
                label={`Volume of Data Subjects`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Data Retention`} label={`Data Retention`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Processing Activities`}
                label={`Processing Activities`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Data Disposal`} label={`Data Disposal`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Status`} label={`Status`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Risk Level`} label={`Risk Level`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};
