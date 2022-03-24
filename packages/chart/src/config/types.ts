
/**
 * 饼图type
 */
export type PieType = "normal" | "fanshaped";

/**
 * 饼图数据类型
 */
export interface PieDataType {
  name: string
  value: number
}

/**
 * legend位置
 */
export type LegendLocation = "left" | "right" | "top" | "bottom";

/**
 * 饼图series类型
 */
export type PieSeriesType = "ring" | "solid";

export class PieChart {
  private type: PieType;
  constructor(type: PieType) {
    this.type = type;
  }

  getConfigByType(dataList: PieDataType[]) {
    const { getOption } = require("./pie/normal");
    return getOption(dataList);
  }
}
