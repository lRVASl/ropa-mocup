import { Moment } from "moment";

export type TSelectDateRange = {
  id: string;
  label: string;
  dateRange: [Moment, Moment];
  unit: UnitTimeSelect;
};

export enum UnitTimeSelect {
  Days = "days",
  Weeks = "weeks",
  Months = "months",
  Years = "years",
}

export type SummaryTransactionReportResponse = {
  data: any[];
  lastCalculated: string;
  staleAfter: string;
};

export type TSummaryPurposeReport = {
  data: {
    value: number;
    purposeId: string;
    purposeVersion: string;
    consentStatus: string;
    purposeName: string;
    type: string;
  }[];
  lastCalculated: string;
  staleAfter: string;
};

export type PurposeReport = {
  total: number;
  yes: number;
  no: number;
  none: number;
};

export type OverviewReport = {
  total: number;
  yesAll: number;
  yesSome: number;
  noAll: number;
};

export type ChannelReport = OverviewReport;

export type PickerType = "day" | "week" | "month" | "year" | "all";

export type Metric = { date: string; count: string };
