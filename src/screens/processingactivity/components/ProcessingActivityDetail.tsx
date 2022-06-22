import { DashboardFilled, MenuOutlined } from "@ant-design/icons";
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
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
interface Props {
  baseUrl: string;
}
const { TabPane } = Tabs;
const { Option } = Select;
export const ProcessingActivityDetail: React.FC<Props> = ({ baseUrl }) => {
  const { push } = useHistory();
  return (
    <>
      <Card title={"Inventory Details"}>
        <Form
          layout="vertical"
          name="advanced_search"
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Name of Activity`} label={`Name of Activity`}>
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
              <Form.Item name={`Note`} label={`Note`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Process Owner`} label={`Process Owner`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Type`} label={`Type`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Categories of  Customer`}
                label={`Categories of  Customer`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name={`Categories of  Data`}
                label={`Categories of  Data`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Data Elements`} label={`Data Elements`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Process Owner`} label={`Process Owner`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name={`Data Subject Region`}
                label={`Data Subject Region`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Data Subject Volume`}
                label={`Data Subject Volume`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Purpose of Processing`}
                label={`Purpose of Processing`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name={`Data Source`} label={`Data Source`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Source Asset`} label={`Source Asset`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Primary Storage Asset`}
                label={`Primary Storage Asset`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name={`Transfer Method (From Sources)`}
                label={`Transfer Method (From Sources)`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Destinations`} label={`Destinations`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name={`Destination Asset`} label={`Destination Asset`}>
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name={`Transfer Method (From Destinations)`}
                label={`Transfer Method (From Destinations)`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Parties who Access/Use data`}
                label={`Parties who Access/Use data`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name={`Locations of Parties (Access/Use)`}
                label={`Locations of Parties (Access/Use)`}
              >
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};
