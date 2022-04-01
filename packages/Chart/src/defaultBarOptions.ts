import type { BarSeriesOption, TooltipComponentOption } from "echarts";
import type { BarDataType } from "./types";

/**
 * 柱状图图series
 * @param dataList 数据
 * @param config 配置项
 * @returns
 */
export const getBarSeriesItem = (
  data: Array<BarDataType> = [],
  config: { stack?: string; barWidth?: number } = {},
): Array<BarSeriesOption> => {
  const arr: Array<BarSeriesOption> = [];
  data.forEach((e) => {
    const seriesConfig: BarSeriesOption = {
      name: e.name,
      type: "bar",
      data: e.value,
      barWidth: config.barWidth || 14,
    };
    if (Object.hasOwnProperty.call(config, "stack")) {
      seriesConfig.stack = config.stack;
    }
    arr.push(seriesConfig);
  });

  return arr!;
};

/**
 * 默认tooltip样式
 * @returns {}
 */
export const getDefaultTooltip = (): TooltipComponentOption => {
  return {
    trigger: "axis",
    borderColor: "rgba(255,255,255,.3)",
    backgroundColor: "rgba(13,5,30)",
    borderWidth: 1,
    textStyle: {
      color: "#fff",
    },
  };
};
