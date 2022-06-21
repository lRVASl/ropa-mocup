import React, { useEffect, useState } from 'react'
import { Card, Select, Typography, DatePicker, Radio } from 'antd'
import { Line } from '@ant-design/charts'
import { useService } from '../../../drivers/auth24/use-service'
import { Metric, PickerType } from '../model/overview'
import { DashboardService } from '../services/dashboard-service'

const { Option } = Select

const pickerTypes: PickerType[] = ['day', 'week', 'month', 'year', 'all']

// const { Text } = Typography

// const { RangePicker } = DatePicker

const cardStyle = {
  borderRadius: '5px',
  textAlign: 'left'
} as const

export const DashboardLineChart: React.FC<{}> = (): React.ReactElement => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Metric[]>([])
  const [pickerType, setPickerType] = useState<PickerType>('day')

  const { service: dashboardService } = useService(DashboardService)
  const { getMetricsReport } = dashboardService()

  useEffect(() => {
    setLoading(true)
    getMetricsReport(pickerType).then(xs => {
      setLoading(false)
      setData(xs)
    })
  }, [pickerType])

  const config = {
    data,
    xField: 'date',
    yField: 'count',
    label: {},
    point: {
      size: 2,
      shape: 'circle',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2
      }
    },
    smooth: true,
    tooltip: {
      showMarkers: false,
      formatter: (value: any) => ({
        name: 'จำนวน',
        value: `${value?.count || 0} ราย`
      })
    },
    state: {
      active: {
        style: {
          shadowColor: 'yellow',
          shadowBlur: 4,
          stroke: 'transparent',
          fill: 'red'
        }
      }
    },
    theme: {
      geometries: {
        point: {
          circle: {
            active: {
              style: {
                shadowColor: '#FCEBB9',
                shadowBlur: 2,
                stroke: '#F6BD16'
              }
            }
          }
        }
      }
    },
    interactions: [{ type: 'marker-active' }],
    loading
  }

  const onChangePickerType = (e: any) => {
    setPickerType(e.target.value)
  }

  return (
    <Card
      title="Subject Summary By Date"
      style={cardStyle}
      extra={
        <>
          {/* <Text>จำนวนคนทั้งหมด:40 ราย</Text>
          &nbsp;
          <RangePicker />
          &nbsp;
          <Radio.Group onChange={onChangePickerType}>
            <Radio.Button value="day">Day</Radio.Button>
            <Radio.Button value="week">Week</Radio.Button>
            <Radio.Button value="month">Month</Radio.Button>
            <Radio.Button value="year">Year</Radio.Button>
            <Radio.Button value="all">All</Radio.Button>
          </Radio.Group> */}
          <Select
            defaultValue={pickerTypes[0]}
            style={{ width: 100 }}
            onChange={setPickerType}
          >
            {pickerTypes.map(x => (
              <Option value={x} key={x}>
                {`${x.charAt(0).toUpperCase()}${x.slice(1)}`}
              </Option>
            ))}
          </Select>
        </>
      }
    >
      <Line {...config} />
    </Card>
  )
}
