/**
 * @Author: Lvhz
 * @Date: 2022-03-21 11:12:44
 * @Description: echart options 默认配置
 */

import type { LegendComponentOption, SeriesOption, TitleComponentOption, TooltipComponentOption, XAXisComponentOption, YAXisComponentOption, GridComponentOption } from "echarts";
import { colorList as defaultColorList, chartConfigChangeSize, pageBaseFontSize } from "./common";
import type { LegendLocation, OptionConfig, PieDataType, PieSeriesType, LegendIconType } from "./types";

interface ChartDataList {
  name: string
  value: number
  itemStyle?: any
}

/**
 * 饼图内圈虚点
 * @returns
 */
export const _innerPie = (): ChartDataList[] => {
  const dataArr = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        name: (i + 1).toString(),
        value: 1,
        itemStyle: {
          normal: {
            color: "#bbb",
            borderWidth: 0,
            borderColor: "#bbb",
          },
        },
      });
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: 5,
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0,
            borderColor: "rgba(0,0,0,0)",
          },
        },
      });
    }
  }
  return dataArr;
};

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
export const getInnerPie = (config: OptionConfig = {}): SeriesOption => {
  const { center, radius } = config;
  return {
    type: "pie",
    zlevel: 3,
    silent: true, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    center: center || ["30%", "50%"], // 例：["30%", "50%"]
    radius: radius || ["52%", "56%"], // 例：["52%", "56%"]
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
 * @param location legend位置
 * @returns legendOption
 */
export const getLegend = (dataList: PieDataType[], location: LegendLocation = "right") => {
  let legend: LegendComponentOption = {};
  if (location === "right") {
    legend = {
      show: true,
      type: "scroll",
      orient: "vertical",
      left: "55%",
      align: "left",
      top: "middle",
      icon: "circle",
      // formatter: function(name: any) {
      //   const item = dataList.find(item => item.name === name);
      //   if (!item) return "";
      //   return `{name|${item.name}}{value|${item.value}}`;
      // },
      textStyle: {
        color: "#fff",
        // rich: {
        //   name: {
        //     width: chartConfigChangeSize(110, pageBaseFontSize),
        //     fontSize: chartConfigChangeSize(16, pageBaseFontSize),
        //   },
        //   value: {
        //     width: chartConfigChangeSize(100, pageBaseFontSize),
        //     fontSize: chartConfigChangeSize(16, pageBaseFontSize),
        //   },
        // },
      },
      data: dataList.map(v => v.name),
    };
  }

  if (location === "bottom") {
    legend = {
      show: true,
      type: "scroll",
      orient: "horizontal",
      icon: "circle",
      top: "bottom",
      left: "center",
      itemWidth: chartConfigChangeSize(12, pageBaseFontSize),
      itemHeight: chartConfigChangeSize(12, pageBaseFontSize),
      itemGap: chartConfigChangeSize(8, pageBaseFontSize),
      textStyle: {
        color: "#fff",
        fontSize: chartConfigChangeSize(12, pageBaseFontSize),
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
export const getTitle = (title: string | number, subTitle: string | number = "") => {
  const titleConfig: TitleComponentOption = {
    top: "center",
    left: "30%",
    text: title.toString(),
    textAlign: "center",
    textVerticalAlign: "top",
    textStyle: {
      fontSize: 14,
      fontWeight: "normal",
      color: "#fff",

    },
    subtext: subTitle.toString(),
    subtextStyle: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#bbb",
    },
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
  type: PieSeriesType = "solid",
  config: { colorList?: string[]; center?: string[]; radius?: string[] } = {},
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
      center: config.center || ["30%", "50%"],
      radius: config.radius || ["60%", "75%"],
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
      },
      data: dataList,
    };
  }

  return seriesConfig!;
};

/**
 * 默认x轴样式
 * @returns {}
 */
export const getDefaultXAxis = (type: "value" | "category" | "time" | "log" | undefined = "category"): XAXisComponentOption => {
  return {
    type,
    axisLabel: {
      color: "rgba(255,255,255,0.65)",
      fontSize: 12,
    },
    axisLine: { // 横坐标轴
      lineStyle: {
        color: "rgba(255,255,255,0.3)",
      },
    },
    axisTick: { // 横坐标轴上的脚标（竖线）
      show: false,
    },
  };
};

/**
 * 默认Y轴样式
 * @returns {}
 */
export const getDefaultYAxis = (type: "value" | "category" | "time" | "log" | undefined = "value"): YAXisComponentOption => {
  return {
    type,
    axisLabel: {
      color: "rgba(255,255,255,0.65)",
      fontSize: 12,
    },
    axisLine: { // 竖坐标轴
      show: false,
    },
    splitLine: { // 竖坐标出来的线
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.15)",
        type: "dotted",
      },
    },
  };
};

/**
 * 默认grid，离底部20%
 * @returns {}
 */
export const getGridBottom = (): GridComponentOption => {
  return {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "20%",
    containLabel: true,
  };
};

/**
 * lengend，位于图表下方
 * @returns {}
 */
export const getLegendBottom = (type: LegendIconType = "line"): LegendComponentOption => {
  const obj: LegendComponentOption = {
    show: true,
    bottom: "5%",
    textStyle: {
      fontSize: 12,
      color: "rgba(255,255,255,0.8)",
    },
  };
  const dict = {
    line: {
      icon: "rect",
      itemWidth: 16,
      itemHeight: 2,
    },
    bar: {
      icon: "rect",
      itemWidth: 20,
      itemHeight: 10,
    },
    pie: {
      icon: "circle",
    },
  };
  Object.assign(obj, dict[type]);
  return obj;
};
