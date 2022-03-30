import type { EChartsOption } from "echarts";
import { defaultBackgroundColor } from "../../common";
import { getLineSeriesItem, getDefaultTooltip, getDefaultGrid, getDefaultLegend } from "../../defaultLineOptions";
import { getDefaultXAxis, getDefaultYAxis } from "../../defaultOptions";
import type { LineDataType, OptionConfig } from "../../types";

export const getOption = (dataList: Array<LineDataType>, config: OptionConfig = {}) => {
  const options: EChartsOption = {
    grid: getDefaultGrid(),
    legend: getDefaultLegend(),
    tooltip: getDefaultTooltip(),
    xAxis: getDefaultXAxis(),
    yAxis: getDefaultYAxis(),
    backgroundColor: defaultBackgroundColor,
    series: getLineSeriesItem(dataList, "line", config),
  };
  return options;
};
