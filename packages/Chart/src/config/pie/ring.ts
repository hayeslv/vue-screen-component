import type { EChartsOption } from "echarts";
import { defaultBackgroundColor } from "../../common";
import { defaultTooltip, getLegend, getSeriesItem, getTitle } from "../../defaultOptions";
import type { OptionConfig, PieDataType } from "../../types";

export const getOption = (dataList: Array<PieDataType>, config: OptionConfig = {}) => {
  const totalNumber = dataList.map(v => v.value).reduce((pre, cur) => pre + cur, 0);
  const title = "总数(件)";

  const options: EChartsOption = {
    backgroundColor: defaultBackgroundColor,
    tooltip: defaultTooltip(),
    legend: getLegend(dataList),
    title: getTitle(title, totalNumber),
    series: [
      getSeriesItem(dataList, "ring", config),
      // getInnerPie(["30%", "50%"], ["52%", "56%"]),
    ],
  };
  return options;
};
