import type { EChartsOption } from "echarts";
import { defaultBackgroundColor } from "../../common";
import { getPictorialBarSeriesItem } from "../../defaultPictorialBarOptions";
import { getDefaultTooltip } from "../../defaultBarOptions";
import { getDefaultXAxis, getDefaultYAxis, getLegendBottom, getGridBottom } from "../../defaultOptions";
import type { BarDataType, OptionConfig } from "../../types";

export const getOption = (dataList: Array<BarDataType>, config: OptionConfig = {}) => {
  const options: EChartsOption = {
    grid: getGridBottom(),
    legend: getLegendBottom("bar"),
    tooltip: getDefaultTooltip(),
    xAxis: getDefaultXAxis(),
    yAxis: getDefaultYAxis(),
    backgroundColor: defaultBackgroundColor,
    series: getPictorialBarSeriesItem(dataList, "vertical", config),
  };
  return options;
};
