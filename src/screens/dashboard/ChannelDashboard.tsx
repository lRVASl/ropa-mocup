import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useService } from "../../drivers/auth24/use-service";
import { DashboardCanvas } from "./components/DasboardCanvas";
import { DashboardCardData } from "./components/DashboardCard";
import { ChannelReport } from "./model/overview";
import { DashboardService } from "./services/dashboard-service";

export const ChannelDashboard: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [channelReport, setChannelReport] = useState<ChannelReport>({
    total: 0,
    yesAll: 0,
    yesSome: 0,
    noAll: 0,
  });

  const stats: Omit<DashboardCardData, "loading">[] = [
    { caption: "จำนวนการบันทึกความยินยอมทั้งหมด", value: channelReport.total },
    { caption: "ยินยอมทุกวัตถุประสงค์", value: channelReport.yesAll },
    { caption: "ไม่ยินยอมทุกวัตถุประสงค์", value: channelReport.noAll },
    { caption: "เลือกยินยอมบางวัตถุประสงค์", value: channelReport.yesSome },
  ];
  return (
    <Row
      gutter={[
        { xs: 8, sm: 16 },
        { xs: 8, sm: 16 },
      ]}
    >
      <DashboardCanvas stats={stats} loading={loading} />
    </Row>
  );
};
