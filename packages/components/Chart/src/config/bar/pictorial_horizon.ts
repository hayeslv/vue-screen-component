import type { EChartsOption } from "echarts";
import { defaultBackgroundColor } from "../../common";
import { getPictorialBarSeriesItem } from "../../defaultPictorialBarOptions";
import { getDefaultTooltip } from "../../defaultBarOptions";
import { getDefaultXAxis, getDefaultYAxis, getLegendBottom, getGridBottom } from "../../defaultOptions";
import type { BarDataType } from "../../types";

export const getOption = (dataList: Array<BarDataType>) => {
  const options: EChartsOption = {
    grid: getGridBottom(),
    legend: getLegendBottom("bar"),
    tooltip: getDefaultTooltip(),
    xAxis: getDefaultXAxis("value"),
    yAxis: getDefaultYAxis("category"),
    backgroundColor: defaultBackgroundColor,
    series: getPictorialBarSeriesItem(dataList, "horizon"),
  };
  return options;
};
