/**
 * @Author: Lvhz
 * @Date: 2022-03-21 11:12:44
 * @Description: echart options 默认配置
 */

import type { EChartOption } from "echarts";
import { chartConfigChangeSize, extend, _innerPie } from "~/utils";
import type { LegendLocation, PieDataType } from "./type";

// fontsize基位，基于1920*1080。大屏根据具体情况进行调整
const baseFontSize = 12;

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

/**
 * 获取内圈
 * @param center 圆心
 * @param radius 半径
 * @returns
 */
export const getInnerPie = (center: string[], radius: string[]) => {
  return {
    type: "pie",
    zlevel: 3,
    silent: true, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    center, // 例：["30%", "50%"]
    radius, // 例：["52%", "56%"]
    label: {
      normal: {
        show: false,
      },
    },
    labelLine: {
      show: false,
    },
    data: _innerPie(),
  };
};

/**
 * 获取饼图Legend
 * @param dataList [{name:..., value:...}]
 * @returns legendOption
 */
export const getLegend = (dataList: PieDataType[], type: LegendLocation = "right") => {
  let legend: EChartOption.Legend = {};
  if (type === "right") {
    legend = {
      type: "scroll",
      orient: "vertical",
      left: "55%",
      align: "left",
      top: "middle",
      icon: "circle",
      formatter: function(name: any) {
        const item = dataList.find(item => item.name === name);
        if (!item) return "";
        return `{name|${item.name}}{value|${item.value}}`;
      },
      textStyle: {
        color: "#fff",
        rich: {
          name: {
            width: chartConfigChangeSize(110, baseFontSize),
            fontSize: chartConfigChangeSize(16, baseFontSize),
          },
          value: {
            width: chartConfigChangeSize(100, baseFontSize),
            fontSize: chartConfigChangeSize(16, baseFontSize),
          },
        },
      },
      data: dataList.map(item => item.name),
    };
  }

  if (type === "bottom") {
    legend = {
      orient: "horizontal",
      type: "scroll",
      show: true,
      icon: "circle",
      top: "bottom",
      left: "center",
      itemWidth: chartConfigChangeSize(12, baseFontSize),
      itemHeight: chartConfigChangeSize(12, baseFontSize),
      itemGap: chartConfigChangeSize(8, baseFontSize),
      textStyle: {
        color: "#fff",
        fontSize: chartConfigChangeSize(12, baseFontSize),
        borderWidth: 0,
      },
    };
  }

  return legend;
};
