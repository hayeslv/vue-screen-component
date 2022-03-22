/**
 * 饼图数据类型
 */
export interface PieDataType {
  name: string
  value: number
}

/**
 * 饼图legend位置
 */
export type LegendLocation = "left" | "right" | "top" | "bottom";

/**
 * 饼图series类型
 */
export type SeriesType = "ring" | "solid";
