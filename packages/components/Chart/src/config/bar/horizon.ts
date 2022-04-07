import type { EChartsOption } from "echarts";
import { defaultBackgroundColor } from "../../common";
import { getBarSeriesItem, getDefaultTooltip } from "../../defaultBarOptions";
import { getDefaultXAxis, getDefaultYAxis, getLegendBottom, getGridBottom } from "../../defaultOptions";
import type { BarDataType, OptionConfig } from "../../types";

export const getOption = (dataList: Array<BarDataType>, config: OptionConfig = {}) => {
  const options: EChartsOption = {
    grid: getGridBottom(),
    legend: getLegendBottom("bar"),
    tooltip: getDefaultTooltip(),
    xAxis: getDefaultXAxis("value"),
    yAxis: getDefaultYAxis("category"),
    backgroundColor: defaultBackgroundColor,
    series: getBarSeriesItem(dataList, config),
  };
  return options;
};
