import { DashboardFilled } from "@ant-design/icons";
import { Card, Row, Typography, Image } from "antd";
import React, { useEffect, useState } from "react";
import images from "./images/map.jpg";
export const Location: React.FC<{}> = () => {
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
          <b style={{ fontSize: "24px" }}>Location</b>
        </Card>
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "2rem" }}
      >
        <Card>
          <Image width={1600} src={images} />
        </Card>
      </Row>
    </>
  );
};
