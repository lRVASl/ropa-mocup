import { AxiosInstance } from "axios";
import {
  ChannelReport,
  Metric,
  OverviewReport,
  PickerType,
  PurposeReport,
  SummaryTransactionReportResponse,
  TSummaryPurposeReport,
} from "../model/overview";

export interface IDashboardService {
  getSummaryTransactionReport: (
    filter: any
  ) => Promise<SummaryTransactionReportResponse>;
  getSummaryPurposeReport: (filter: any) => Promise<TSummaryPurposeReport>;
  getOverviewReport: (
    purposeIds: string[]
  ) => Promise<OverviewReport & { noneAll: number }>;
  getPurposeReport: (purposeId: string) => Promise<PurposeReport>;
  getMetricsReport: (pickerType: PickerType) => Promise<Metric[]>;
}

export const DashboardService = (
  axiosInstance: AxiosInstance
): IDashboardService => ({
  getMetricsReport: async (pickerType) => {
    const result = await axiosInstance.get("/transaction-dashboard-metrics", {
      params: { pickerType },
    });
    return result?.data || {};
  },
  getOverviewReport: async (purposeIds) => {
    const result = await axiosInstance.get("/transaction-dashboard-overview", {
      params: { selectedPurposeIds: purposeIds },
    });
    return result?.data || {};
  },
  getPurposeReport: async (purposeId) => {
    const result = await axiosInstance.get("/transaction-dashboard-purpose", {
      params: { purposeId },
    });
    return result?.data || {};
  },
  getSummaryTransactionReport: async (
    filter: any
  ): Promise<SummaryTransactionReportResponse> => {
    const version = filter?.version ? `&version=${filter.version}` : "";
    const Id = filter?.id ? `&id=${filter.id}` : "";
    const groupBy = filter?.groupBy ? `&groupBy=${filter.groupBy}` : "";

    const { status, statusText, data } = await axiosInstance.get(
      `summary-report-profile?unit=${filter.unit}${Id}${version}${groupBy}`
    );
    if (status === 200) {
      return data || [];
    }
    throw new Error(statusText);
  },
  getSummaryPurposeReport: async (
    filter: any
  ): Promise<TSummaryPurposeReport> => {
    const version = filter?.version ? `&version=${filter.version}` : "";
    const Id = filter?.id ? `&id=${filter.id}` : "";
    const groupBy = filter?.groupBy ? `&groupBy=${filter.groupBy}` : "";

    const { status, statusText, data } = await axiosInstance.get(
      `summary-report-purpose?unit=${filter.unit}${Id}${version}${groupBy}`
    );
    if (status === 200) {
      return data || [];
    }
    throw new Error(statusText);
  },
});
