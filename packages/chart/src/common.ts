import type { PieType, PieDataType } from "./types";

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

const PieTypeMap = {
  normal: () => require("./config/pie/normal"),
  fanshaped: () => require("./config/pie/fanshaped"),
};

/**
 * 根据类型和数据获取图表config配置
 * @param type
 * @param dataList
 * @returns
 */
export const getConfigByType = (type: PieType, dataList: PieDataType[]) => {
  const { getOption } = PieTypeMap[type]();
  return getOption(dataList);
};
