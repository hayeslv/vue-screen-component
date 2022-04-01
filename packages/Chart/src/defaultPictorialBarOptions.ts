import type { PictorialBarSeriesOption } from "echarts";
import type { BarDataType } from "./types";

/**
 * 象形柱图series
 * @param dataList 数据
 * @param type 类型
 * @param config 配置项
 * @returns
 */
export const getPictorialBarSeriesItem = (
  data: Array<BarDataType> = [],
  type: "vertical" | "horizon" = "vertical",
): Array<PictorialBarSeriesOption> => {
  const arr: Array<PictorialBarSeriesOption> = [];
  data.forEach((e) => {
    const seriesConfig: PictorialBarSeriesOption = {
      name: e.name,
      type: "pictorialBar",
      data: e.value,
      barGap: "10%",
      symbolRepeat: "fixed",
      symbolMargin: 5,
      symbol: "rect",
      symbolClip: true,
      symbolSize: type === "vertical" ? [22, 11] : [11, 22],
      animationEasing: "elasticOut",
    };
    arr.push(seriesConfig);
  });
  return arr!;
};
