import { Col } from 'antd'
import React from 'react'
import { DashboardCard, DashboardCardData } from './DashboardCard'
import { PieChart } from './PieChart'
import { DashboardLineChart } from './DashboardLineChart'

type Props = {
  stats: Omit<DashboardCardData, 'loading'>[]
  loading: boolean
}

export const DashboardCanvas: React.FC<Props> = ({ stats, loading }) => (
  <>
    {stats.map(x => (
      <Col sm={24} md={12} lg={4} key={x.caption}>
        <DashboardCard {...x} loading={loading} />
      </Col>
    ))}
    <Col md={24} lg={8}>
      <PieChart
        loading={loading}
        data={stats.slice(1).map(x => ({ type: x.caption, value: x.value }))}
      />
    </Col>
    <Col md={24} lg={16}>
      <DashboardLineChart />
    </Col>
  </>
)
