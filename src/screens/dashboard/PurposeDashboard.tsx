import { Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { useService } from '../../drivers/auth24/use-service'
import { DashboardCanvas } from './components/DasboardCanvas'
import { DashboardCardData } from './components/DashboardCard'
import { PurposeReport } from './model/overview'
import { DashboardService } from './services/dashboard-service'

export const PurposeDashboard: React.FC<{}> = () => {
  const { purposeId } = useParams<{ purposeId: string }>()
  const { state } = useLocation<{ description: string }>()
  const [loading, setLoading] = useState(false)
  const [purposeReport, setPurposeReport] = useState<PurposeReport>({
    total: 0,
    yes: 0,
    no: 0,
    none: 0
  })
  const { service: dashboardService } = useService(DashboardService)
  const { getPurposeReport } = dashboardService()

  useEffect(() => {
    setLoading(true)
    getPurposeReport(purposeId).then(x => {
      setLoading(false)
      setPurposeReport(x)
    })
  }, [])

  const stats: Omit<DashboardCardData, 'loading'>[] = [
    {
      caption: 'จำนวนการบันทึกความยินยอมทั้งหมด',
      value: purposeReport.yes + purposeReport.no + purposeReport.none
    },
    { caption: 'ยินยอม', value: purposeReport.yes },
    { caption: 'ไม่ยินยอม', value: purposeReport.no },
    { caption: 'ไม่ระบุ', value: purposeReport.none }
  ]
  return (
    <Row
      gutter={[
        { xs: 8, sm: 16 },
        { xs: 8, sm: 16 }
      ]}
    >
      <Col span={24}>
        <Card>
          <Row justify="start">
            <Col>{state?.description}</Col>
          </Row>
        </Card>
      </Col>
      <DashboardCanvas stats={stats} loading={loading} />
    </Row>
  )
}
