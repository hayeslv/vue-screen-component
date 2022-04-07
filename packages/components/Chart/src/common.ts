import type { ChartType, OptionConfig, DataType } from "./types";

export const colorList = ["#009DFF", "#11C372", "#FDAD43", "#FF4F5C", "#8560FF", "#FF7951", "#93CB23", "#00CAB5", "#5B76FF", "#D343DA"];

/**
 * fontsize基位，基于1920*1080。大屏根据具体情况进行调整
 */
export const pageBaseFontSize = 12;

/**
  * 默认背景
  */
export const defaultBackgroundColor = "transparent";

// 基于12px修改字体大小 6/12   12/24
export const chartConfigChangeSize = (fontsize: number, baseSize = 12): number => {
  return fontsize * (baseSize / pageBaseFontSize);
};

const PieTypeMap: any = {
  normal: () => require("./config/pie/normal"),
  fanshaped: () => require("./config/pie/fanshaped"),
  ring: () => require("./config/pie/ring"),
  ring_dot: () => require("./config/pie/ring_dot"),
  ring_shadow: () => require("./config/pie/ring_shadow"),
  rate: () => require("./config/pie/rate"),
  dashboard_rate: () => require("./config/pie/dashboard_rate"),
};

const LineTypeMap: any = {
  normal: () => require("./config/line/line"),
  area: () => require("./config/line/area"),
};

const BarTypeMap: any = {
  normal: () => require("./config/bar/normal"),
  horizon: () => require("./config/bar/horizon"),
  pictorial: () => require("./config/bar/pictorial"),
  pictorial_horizon: () => require("./config/bar/pictorial_horizon"),
};

/**
 * 根据类型和数据获取图表config配置
 * @param type
 * @param dataList
 * @returns
 */
export const getConfigByType = (type: ChartType, dataList: DataType[], config: OptionConfig) => {
  const getOption = getOptionFunc(type);

  return getOption(dataList, config);
};

const getOptionFunc = (type: ChartType) => {
  let getOption;
  if (/^pie_/.test(type)) {
    const target = type.replace(/^pie_/, "");
    getOption = PieTypeMap[target]().getOption;
  }
  if (/^line_/.test(type)) {
    const target = type.replace(/^line_/, "");
    getOption = LineTypeMap[target]().getOption;
  }
  if (/^bar_/.test(type)) {
    const target = type.replace(/^bar_/, "");
    getOption = BarTypeMap[target]().getOption;
  }
  return getOption;
};

/**
 * 十六进制颜色值转rgba
 * @param hex 十六进制颜色值
 * @param opacity 透明度
 * @returns
 */
export const hexToRgba = (hex: string, opacity: number) => {
  let rgbaColor = "";
  const reg = /^#[\da-f]{6}$/i;
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt("0x" + hex.slice(3, 5))},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
  }
  return rgbaColor;
};
