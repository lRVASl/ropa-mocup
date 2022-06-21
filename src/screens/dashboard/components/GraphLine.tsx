import { Line } from "@ant-design/plots";

export const GraphLine = () => {
  const data = [
    {
      year: "Jan",
      count: 49,
    },
    {
      year: "Feb",
      count: 90,
    },
    {
      year: "Mar",
      count: 99,
    },
    {
      year: "Apr",
      count: 101,
    },
    {
      year: "May",
      count: 175,
    },
    {
      year: "Jun",
      count: 88,
    },
    {
      year: "Jul",
      count: 60,
    },
    {
      year: "Aug",
      count: 80,
    },
    {
      year: "Sep",
      count: 120,
    },
    {
      year: "Oct",
      count: 153,
    },
    {
      year: "Nov",
      count: 151,
    },
    {
      year: "Dec",
      count: 150,
    },
  ];
  const config = {
    data,
    xField: "year",
    yField: "count",
    smooth: true,
    color: '#109CF1',
    lineStyle: {
      lineWidth: 2.5,
    },
    label: {
      formatter: (datum: any) => {
        return `${datum.count}`;
      },
    },
    point: {
      shape: "circle",
      size: 4,
      style: {
        stroke: "#109CF1",
        fill: "#fff",
      },
    },
  };

  return (
    <>
      <Line {...config} />
    </>
  );
};
