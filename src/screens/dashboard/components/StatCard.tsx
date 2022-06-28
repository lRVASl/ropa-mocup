import { Card, Row, Col } from "antd";
import {
  InfoCircleOutlined,
  TagsOutlined,
  FileTextOutlined,
  CloseCircleOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

export const StatCard = () => {
  return (
    <>
      <Col span={8}>
        <Card bordered={false}>
          <Row>
            <Col span={21} style={{ textAlign: "left" }}>
              <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>Total Activity</div>
              <div style={{ fontWeight: "bold", fontSize: 26 }}>51</div>
            </Col>
            <Col span={3} style={{ textAlign: "right" }}>
              <InfoCircleOutlined style={{ color: "black" }} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
          <Row>
            <Col span={5} style={{ alignSelf: "center" }}>
              <TagsOutlined
                style={{
                  color: "#109CF1",
                  fontSize: 28,
                  justifyContent: "left",
                  marginLeft: 7,
                  display: "flex",
                }}
              />
            </Col>
            <Col span={16} style={{ textAlign: "left" }}>
              <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                Total Assessment
              </div>
              <div style={{ fontWeight: "bold", fontSize: 26 }}>111</div>
            </Col>
            <Col span={3} style={{ textAlign: "right" }}>
              <InfoCircleOutlined style={{ color: "black" }} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
          <Row>
            <Col span={5} style={{ alignSelf: "center" }}>
              <FileTextOutlined
                style={{
                  color: "#F3AF2B",
                  fontSize: 28,
                  justifyContent: "left",
                  marginLeft: 7,
                  display: "flex",
                }}
              />
            </Col>
            <Col span={16} style={{ textAlign: "left" }}>
              <div style={{ color: "rgba(0, 0, 0, 0.45)" }}>Total Assets</div>
              <div style={{ fontWeight: "bold", fontSize: 26 }}>45 </div>
            </Col>
            <Col span={3} style={{ textAlign: "right" }}>
              <InfoCircleOutlined style={{ color: "black" }} />
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};
