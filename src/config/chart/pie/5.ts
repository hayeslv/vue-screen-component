import type { EChartOption } from "echarts";
import { colorList } from "~/config/common";
import { extend, chartConfigChangeSize } from "~/utils";
import { defaultBackgroundColor, defaultTooltip, getLegend } from "./defaultOptions";
import type { PieDataType } from "./type";

interface OptionConfig {
  fontsize?: number
}

export function getOption(dataList: Array<PieDataType>, params: EChartOption = {}, config: OptionConfig = {}): EChartOption {
  const { fontsize } = config;
  const options: EChartOption = {
    backgroundColor: defaultBackgroundColor,
    tooltip: defaultTooltip,
    color: colorList,
    legend: getLegend(dataList, "bottom"),
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
