import React from "react"
import {Row, Select, Space} from "antd"

interface Interface {
  version: {
    version: string
  }[]
  handlerVersion: (version: string) => void
}

const SelectVersion: React.FunctionComponent<Interface> = ({handlerVersion, version}): React.ReactElement => {

  const findVersion = (version: string) => {
    handlerVersion(version)
  }

  return (
    <Row justify="end" align="middle">
      <Space>
        version
        <Select
          onSelect={findVersion}
          placeholder="Select Version"
          defaultValue="1"
          style={{width: 100}}
        >
          {
            version && version.map(v => (
              <Select.Option key={v.version} value={v.version}>{v.version}</Select.Option>
            ))
          }
        </Select>
      </Space>
    </Row>
  )
}

export default SelectVersion
