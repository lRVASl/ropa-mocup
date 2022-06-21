import { DashboardFilled } from "@ant-design/icons";
import { Card, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";

export const Activity: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
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
          <b style={{ fontSize: "24px" }}>Activity</b>
        </Card>
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "2rem" }}
      >
        <Card style={{ width: "100%", textAlign: "left" }}>
          <h1>TEST2</h1>
        </Card>
      </Row>
    </>
  );
};
