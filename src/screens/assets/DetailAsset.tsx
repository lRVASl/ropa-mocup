import React from "react";
import { Card, Tabs } from "antd";

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
  return (
    <>
      <Card>
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
    </>
  );
};
