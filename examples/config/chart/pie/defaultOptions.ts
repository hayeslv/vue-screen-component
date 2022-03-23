/**
 * @Author: Lvhz
 * @Date: 2022-03-21 11:12:44
 * @Description: echart options 默认配置
 */

import type { LegendComponentOption, SeriesOption, TitleComponentOption, TooltipComponentOption } from "echarts";
import { colorList as defaultColorList } from "~/config/common";
import { chartConfigChangeSize, _innerPie } from "~/utils";
import type { LegendLocation, PieDataType, SeriesType } from "./type";

// fontsize基位，基于1920*1080。大屏根据具体情况进行调整
const baseFontSize = 12;

/**
 * 默认背景
 */
export const defaultBackgroundColor = "transparent";

/**
 * 默认tooltip
 */
export const defaultTooltip = (): TooltipComponentOption => {
  const tooltipConfig: TooltipComponentOption = {
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
  return tooltipConfig;
};

/**
 * 获取内圈
 * @param center 圆心
 * @param radius 半径
 * @returns
 */
export const getInnerPie = (center: string[], radius: string[]): SeriesOption => {
  return {
    type: "pie",
    zlevel: 3,
    silent: true, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    center, // 例：["30%", "50%"]
    radius, // 例：["52%", "56%"]
    label: {
      show: false,
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
  let legend: LegendComponentOption = {};
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
      data: dataList.map(v => v.name),
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

/**
 * 获取饼图Title
 * @param title
 * @param subTitle
 * @returns title config
 */
export const getTitle = (title: string | number, subTitle: string | number) => {
  const titleConfig: TitleComponentOption = {
    text: `{name|${title}}\n{value|${subTitle}}`,
    top: "center",
    left: "30%",
    textStyle: {
      rich: {
        name: {
          fontSize: 14,
          fontWeight: "normal",
          color: "#fff",
          padding: [10, 0],
        },
        value: {
          fontSize: 32,
          fontWeight: "bold",
          color: "#bbb",
        },
      },
    },
    textAlign: "center",
  };
  return titleConfig;
};

/**
 * 获取饼图series
 * @param dataList 数据
 * @param type 类型
 * @param config 配置项
 * @returns
 */
export const getSeriesItem = (
  dataList: Array<PieDataType>,
  type: SeriesType = "solid",
  config: { colorList?: string[] } = {},
): SeriesOption => {
  let seriesConfig: SeriesOption;
  if (type === "solid") {
    seriesConfig = {
      type: "pie",
      center: ["25%", "50%"],
      avoidLabelOverlap: true, // 避免标签重叠
      itemStyle: {
        color: function(params: any) {
          return config.colorList ? config.colorList[params.dataIndex] : defaultColorList[params.dataIndex];
        },
      },
      labelLine: {
        show: false,
      },
      label: {
        show: false,
      },
      data: dataList,
    };
  }
  if (type === "ring") {
    seriesConfig = {
      type: "pie",
      z: 3,
      center: ["30%", "50%"],
      radius: ["60%", "75%"],
      clockwise: true,
      avoidLabelOverlap: true,
      itemStyle: {
        color: function(params: any) {
          return config.colorList ? config.colorList[params.dataIndex] : defaultColorList[params.dataIndex];
        },
      },
      labelLine: {
        show: false,
      },
      label: {
        show: false,
        position: "outside",
        formatter: "{a|{b}：{d}%}\n{hr|}",
        rich: {
          hr: {
            backgroundColor: "t",
            borderRadius: 3,
            width: 3,
            height: 3,
            padding: [3, 3, 0, -12],
          },
          a: {
            padding: [-30, 15, -20, 15],
          },
        },
      },
      data: dataList,
    };
  }

  return seriesConfig!;
};
