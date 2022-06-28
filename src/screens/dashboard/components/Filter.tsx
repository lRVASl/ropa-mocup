import { Card, Col, Row, DatePicker, Select, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

export const Filter = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <>
      <Card style={{ width: "100%" }}>
        <Row>
          <Col span={12} style={{ textAlign: "left" }}>
            <Space size={"middle"}>
              <RangePicker />
              <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="day">Day</Radio.Button>
                <Radio.Button value="week">Week</Radio.Button>
                <Radio.Button value="month">Month</Radio.Button>
              </Radio.Group>
            </Space>
          </Col>
          <Col span={12} style={{ textAlign: "right", alignSelf: "center" }}>
            <Select
              mode="tags"
              defaultValue={["ขอข้อมูล", "ขอเข้าถึงข้อมูล"]}
              allowClear
              style={{ width: 300 }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>
        </Row>
      </Card>
    </>
  );
};
