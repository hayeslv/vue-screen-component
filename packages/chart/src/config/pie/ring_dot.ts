import type { EChartsOption } from "echarts";
import { extend } from "../../../../shared";
import { defaultBackgroundColor } from "../../common";
import { defaultTooltip, getInnerPie, getLegend, getSeriesItem, getTitle } from "../../defaultOptions";
import type { PieDataType } from "../../types";

export const getOption = (dataList: Array<PieDataType>, params: EChartsOption = {}) => {
  const totalNumber = dataList.map(v => v.value).reduce((pre, cur) => pre + cur, 0);
  const title = "总数(件)";

  const options: EChartsOption = {
    backgroundColor: defaultBackgroundColor,
    tooltip: defaultTooltip(),
    legend: getLegend(dataList),
    title: getTitle(title, totalNumber),
    series: [
      getSeriesItem(dataList, "ring"),
      getInnerPie(["30%", "50%"], ["52%", "56%"]),
    ],
  };
  return extend(options, params);
};
