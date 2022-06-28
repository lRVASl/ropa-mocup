import React from "react";
import { Card, Tabs, Row, Col, Button } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

import { AssetsActivity } from "./components/AssetsActivity";
import { AssetsAttrachment } from "./components/AssetsAttrachment";
import { AssetsAssesment } from "./components/AssetsAssesment";
import { AssetsDetail } from "./components/AssetsDetail";
import { AssetsRelated } from "./components/AssetsRelated";
import { AssetsRisk } from "./components/AssetsRisk";

const { TabPane } = Tabs;

interface Props {
  baseUrl: string;
}
export const DetailAsset: React.FC<Props> = ({
  baseUrl,
}): React.ReactElement => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
      >
        <Card style={{ width: "100%", textAlign: "left" }}>
          <Row gutter={1}>
            <Col>
              <Button
                style={{ fontSize: "24px", border: "none", color: "#40A9FF" }}
              >
                <LeftCircleOutlined onClick={goBack} />
              </Button>
            </Col>
            <Col>
              <b style={{ fontSize: "24px" }}>Assets</b>
            </Col>
          </Row>
        </Card>
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "2rem" }}
      >
        <Card style={{ width: "100%" }}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Details " key="1">
              <AssetsDetail baseUrl={baseUrl} />
            </TabPane>
            <TabPane tab="Activity " key="2">
              <AssetsActivity baseUrl={baseUrl} />
            </TabPane>
            <TabPane tab="Assesment " key="3">
              <AssetsAssesment baseUrl={baseUrl} />
            </TabPane>
            <TabPane tab="Related " key="4">
              <AssetsRelated baseUrl={baseUrl} />
            </TabPane>
            <TabPane tab="Risk " key="5">
              <AssetsRisk baseUrl={baseUrl} />
            </TabPane>
            <TabPane tab="Attachment " key="6">
              <AssetsAttrachment baseUrl={baseUrl} />
            </TabPane>
          </Tabs>
        </Card>
      </Row>
    </>
  );
};
