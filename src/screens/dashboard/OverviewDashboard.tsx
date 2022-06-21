import { Card, Row, Col, Typography, Space, Breadcrumb } from "antd";
import React from "react";
import { StatCard } from "./components/StatCard";
import { Dashboard1 } from "./components/Dashboard1";
import { Dashboard2 } from "./components/Dashboard2";
import { GraphLine } from "./components/GraphLine";
import { Filter } from "./components/Filter";

export const OverviewDashboard: React.FC<{}> = () => {
  const { Title } = Typography;

  return (
    <>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        <Card style={{ width: "100%", textAlign: "left" }}>
          <Space direction="vertical" size={"small"}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item>DASHBOARD</Breadcrumb.Item>
            </Breadcrumb>
            <Title> DASHBOARD</Title>
          </Space>
        </Card>
      </Row>

      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "1rem" }}
      >
        <Filter />
      </Row>

      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "1rem" }}
      >
        <StatCard />
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "1rem" }}
      >
        <Col span={12}>
          <Card
            title="Activity Status Summary"
            bordered={false}
            style={{ width: "100%", textAlign: "left" }}
          >
            <Dashboard1 />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Assets Status Summary"
            bordered={false}
            style={{ width: "100%", textAlign: "left" }}
          >
            <Dashboard2 />
          </Card>
        </Col>
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "1rem" }}
      >
        <Col span={24}>
          <Card
            title="Total Activity"
            style={{ width: "100%", textAlign: "left" }}
          >
            <GraphLine />
          </Card>
        </Col>
      </Row>
    </>
  );
};
