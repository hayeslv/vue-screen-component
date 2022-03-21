import type { EChartOption } from "echarts";

const colorList = ["#009DFF", "#11C372", "#FDAD43", "#FF4F5C", "#8560FF", "#FF7951", "#93CB23", "#00CAB5"];

interface ChartDataList {
  name: string
  value: number
}

export function getOption(dataList: Array<ChartDataList>): EChartOption {
  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    color: colorList,
    visualMap: [
      {
        show: false,
        inRange: {},
      },
    ],
    legend: {
      orient: "horizontal",
      type: "scroll",
      show: true,
      icon: "circle",
      top: "bottom",
      left: "center",
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 8,
      textStyle: {
        color: "#fff",
        fontSize: 12,
        borderWidth: 0,
      },
    },
    series: [{
      name: "访问来源",
      type: "pie",
      radius: "80%",
      center: ["50%", "40%"],
      data: dataList.sort((a, b) => a.value - b.value),
      roseType: "radius",
      label: {
        normal: {
          formatter: ["{c|{c}次}", "{b|{b}}"].join("\n"),
          rich: {
            c: {
              color: "rgb(241,246,104)",
              fontSize: 20,
              fontWeight: "bold",
              lineHeight: 5,
            },
            b: {
              color: "rgb(98,137,169)",
              fontSize: 15,
              height: 40,
            },
          },
        },
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: "transparent",
          },
          smooth: 0.2,
          length: 1,
          length2: 1,
        },
      },
      itemStyle: {
        normal: {
          shadowColor: "rgba(0, 0, 0, 0.8)",
          shadowBlur: 50,
        },
      },
    }],
  };
}
