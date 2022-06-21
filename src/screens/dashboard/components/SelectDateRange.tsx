import React from "react"
import {Row, Select} from "antd"
import moment from "moment";

import {TSelectDateRange, UnitTimeSelect} from '../model/overview'

const dateRange: TSelectDateRange[] = [
  {id: '1', label: '1 Day', dateRange: [moment().startOf('days'), moment().endOf('days')], unit: UnitTimeSelect.Days},
  {
    id: '2',
    label: '1 Week',
    dateRange: [moment().startOf(UnitTimeSelect.Weeks), moment().endOf(UnitTimeSelect.Weeks)],
    unit: UnitTimeSelect.Weeks
  },
  {
    id: '3',
    label: '1 Month',
    dateRange: [moment().startOf(UnitTimeSelect.Months), moment().endOf(UnitTimeSelect.Months)],
    unit: UnitTimeSelect.Months
  },
  {
    id: '4',
    label: '1 Year',
    dateRange: [moment().startOf(UnitTimeSelect.Years), moment().endOf(UnitTimeSelect.Years)],
    unit: UnitTimeSelect.Years
  }
]

interface Interface {
  handlerDateRange: (dateRange: string, unit: string) => void
}

const SelectDateRange: React.FunctionComponent<Interface> = ({handlerDateRange}): React.ReactElement => {

  const findUnit = (id: string) => {
    const item = dateRange.find(date => date.id === id)
    handlerDateRange(`${item?.dateRange}` || '', item?.unit || '')
  }

  return (
    <>
      <Row justify="end">
        <Select
          style={{minWidth: '100px'}}
          defaultValue={dateRange[0].label}
          onSelect={findUnit}
        >
          {
            dateRange.map(date => (
              <Select.Option key={date.id} value={date.id}>{date.label}</Select.Option>
            ))
          }
        </Select>
      </Row>
    </>
  )
}

export default SelectDateRange
