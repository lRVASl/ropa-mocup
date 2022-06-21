import { FormOutlined } from "@ant-design/icons";
import { Card, Row, Typography, Col , Space } from "antd";
import React, { useEffect, useState } from "react";
import { Switch , Route  } from "react-router-dom";

import { CreateProcessing_Contact } from "./CreateProcessing_Contact";

export const OverviewCreate: React.FC<{}> = () => {
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
          <Row>
              <Space>
            <Col>
              <Typography style={{color: 'gray'}}> Home / </Typography>
            </Col>
            <Col>
              <Typography> Create Processing Activities Profile</Typography>
            </Col>
            </Space>
          </Row>

          <Title>Create Processing Activities Profile</Title>
        </Card>
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16 },
          { xs: 8, sm: 16 },
        ]}
        style={{ marginTop: "2rem" }}
      >
        <Switch>
            <Route >
                < CreateProcessing_Contact />
            </Route>
        </Switch>
      </Row>
    </>
  );
};
