/**
 * @Author: Lvhz
 * @Date: 2022-03-21 11:12:44
 * @Description: echart options 默认配置
 */

import type { EChartOption } from "echarts";
import { extend } from "~/utils";

/**
 * 默认背景
 */
export const defaultBackgroundColor = "transparent";

/**
 * 默认tooltip
 */
export const defaultTooltip: EChartOption.Tooltip = {
  trigger: "item",
  borderColor: "rgba(255,255,255,.3)",
  backgroundColor: "rgba(13,5,30)",
  borderWidth: 1,
  padding: [3, 8],
  textStyle: {
    color: "#fff",
  },
  formatter: function(parms: any) {
    const str = parms.marker + "" + parms.data.name + "</br>" +
            "数量：" + parms.data.value + "</br>" +
            "占比：" + parms.percent + "";
    return `<div style="text-align: left;">${str}</div>`;
  },
};

/**
 * 扩展tooltip
 * @param tooltip
 */
export const extendTooltip = (tooltip: EChartOption.Tooltip) => {
  return extend({}, defaultTooltip, tooltip);
};
