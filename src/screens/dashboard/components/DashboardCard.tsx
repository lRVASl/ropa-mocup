import React from 'react'
import { Card } from 'antd'

export interface DashboardCardData {
  caption: string
  value: number
  loading: boolean
}

export const DashboardCard: React.FC<DashboardCardData> = ({
  caption,
  value,
  loading
}): React.ReactElement => {
  const cardStyle = {
    borderRadius: '5px'
  }

  const valueStyle = {
    fontSize: '18px',
    fontWeight: 'bold'
  } as const
  return (
    <Card style={cardStyle} loading={loading}>
      <p>{caption}</p>
      <p style={valueStyle}>{value.toLocaleString()}</p>
    </Card>
  )
}
