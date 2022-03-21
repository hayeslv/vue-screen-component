import type { EChartOption } from "echarts";
import { colorList } from "~/config/common";
import { extend, chartConfigChangeSize } from "~/utils";

interface ChartDataList {
  name: string
  value: number
}

interface OptionConfig {
  fontsize?: number
}

export function getOption(dataList: Array<ChartDataList>, params: EChartOption = {}, config: OptionConfig = {}): EChartOption {
  const { fontsize } = config;
  const options: EChartOption = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    color: colorList,
    legend: {
      orient: "horizontal",
      type: "scroll",
      show: true,
      icon: "circle",
      top: "bottom",
      left: "center",
      itemWidth: chartConfigChangeSize(12, fontsize),
      itemHeight: chartConfigChangeSize(12, fontsize),
      itemGap: chartConfigChangeSize(8, fontsize),
      textStyle: {
        color: "#fff",
        fontSize: chartConfigChangeSize(12, fontsize),
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
              fontSize: chartConfigChangeSize(20, fontsize),
              fontWeight: "bold",
              lineHeight: chartConfigChangeSize(5, fontsize),
            },
            b: {
              color: "rgb(98,137,169)",
              fontSize: chartConfigChangeSize(16, fontsize),
              height: chartConfigChangeSize(40, fontsize),
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
  return extend(options, params);
}
