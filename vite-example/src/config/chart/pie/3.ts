import type { EChartsOption } from "echarts";
import { extend } from "../../common";
import { defaultBackgroundColor, defaultTooltip, getLegend, getSeriesItem } from "./defaultOptions";
import type { PieDataType } from "./type";

export const getOption = (dataList: Array<PieDataType>, params: EChartsOption = {}) => {
  const options: EChartsOption = {
    backgroundColor: defaultBackgroundColor,
    tooltip: extend(defaultTooltip(), {
      formatter: function(parms: any) {
        const str = parms.marker + "" + parms.data.name + "</br>" +
                    "数量：" + parms.data.value + "件</br>" +
                    "占比：" + parms.percent + "%";
        return `<div style="text-align: left;">${str}</div>`;
      },
    }),
    legend: extend(getLegend(dataList), {
      formatter: function(name: any) {
        const item = dataList.find(item => item.name === name);
        if (!item) return "";
        return `{name|${item.name}}{value|${item.value} 件}`;
      },
    }),
    series: [
      getSeriesItem(dataList, "solid"),
    ],
  };
  return extend(options, params);
};
