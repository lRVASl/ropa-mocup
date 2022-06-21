import React from "react"
import {Card} from "antd"
import {Pie} from '@ant-design/charts';

import {TSummaryPurposeReport} from "../model/overview";

interface Interface {
  summaryPurpose: TSummaryPurposeReport
  loading: boolean
}

const mapLabelFromType = (status: string) => ({
  'yes': 'ยินยอม',
  'no': 'ไม่ยินยอม',
  'none': 'ยินยอมบางวัตถุประสงค์',
}[status])

export const DashboardPieChart: React.FC<Interface> = ({summaryPurpose, loading}): React.ReactElement => {
  const cardStyle = {
    borderRadius: '5px',
    textAlign: 'left'
  } as const

  const config = {
    data: summaryPurpose.data || [],
    angleField: 'value',
    colorField: 'type',
    // color: ['#48C9B0', '#A6ACAF', '#EC7063'],
    label: {
      labelEmit: true,
      type: 'inner',
      // content: (value: any) => {
      //   const parsePercentage = (value.percent * 100).toFixed(2)
      //   return `version: ${value.purposeVersion} ${parsePercentage}` as any
      // },
      content: () => "",
      style: {
        fontSize: 14,
        fill: 'black',
      },
    },
    interactions: [{type: 'element-selected'}, {type: 'element-active'}],
    loading
  };

  return <>
    <Card title="Consents Distribution" style={cardStyle}>
      <Pie {...config}
           legend={false}
           tooltip={{
             customContent: (title, data) => `
                <div style="padding: 12px">
                  <p>
                   [v${data[0]?.data?.purposeVersion}] ${title}
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <div>
                        ${mapLabelFromType(data[0]?.data?.consentStatus)}
                    </div>
                    <div>
                     ${data[0]?.data?.value}
                    </div>
                  </div>
                </div>
             `
           }}
      />
    </Card>
  </>
}
