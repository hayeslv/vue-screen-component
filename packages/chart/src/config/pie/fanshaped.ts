import type { EChartsOption } from "echarts";
import { chartConfigChangeSize, colorList as defaultColorList, defaultBackgroundColor } from "../../common";
import { defaultTooltip, getLegend } from "../../defaultOptions";
import type { OptionConfig, PieDataType } from "../../types";

/**
 * 扇形
 * @param dataList
 * @param params
 * @param config
 * @returns
 */
export function getOption(dataList: Array<PieDataType>, config: OptionConfig = {}): EChartsOption {
  const { colorList } = config;
  const { fontsize } = config;
  const options: EChartsOption = {
    backgroundColor: defaultBackgroundColor,
    tooltip: defaultTooltip(),
    color: colorList || defaultColorList,
    legend: getLegend(dataList, "bottom"),
    series: [{
      name: "访问来源",
      type: "pie",
      radius: "80%",
      center: ["50%", "40%"],
      data: dataList.sort((a, b) => a.value - b.value),
      roseType: "radius",
      label: {
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
      labelLine: {
        lineStyle: {
          color: "transparent",
        },
        smooth: 0.2,
        length: 1,
        length2: 1,
      },
      itemStyle: {
        shadowColor: "rgba(0, 0, 0, 0.8)",
        shadowBlur: 50,
      },
    }],
  };
  return options;
}
