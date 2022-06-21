import React from 'react'
import { Card } from 'antd'
import { Pie } from '@ant-design/charts'

type Props = {
  data: { type: string; value: number }[]
  loading: boolean
}

export const PieChart: React.FC<Props> = ({
  data,
  loading
}): React.ReactElement => {
  const cardStyle = {
    borderRadius: '5px',
    textAlign: 'left'
  } as const

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      labelEmit: true,
      type: 'inner',
      content: () => '',
      style: {
        fontSize: 14,
        fill: 'black'
      }
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    loading
  }

  return (
    <Card title="Consents Distribution" style={cardStyle}>
      <Pie {...config} legend={false} />
    </Card>
  )
}
