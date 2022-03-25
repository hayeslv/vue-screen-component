
export type PieType =
  "pie_normal" |
  "pie_fanshaped" |
  "pie_ring" |
  "pie_ring_dot" |
  "pie_ring_shadow";

export type ChartType = PieType | "comlun_normal";

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

/**
 * getOption配置参数
 */
export interface OptionConfig {
  fontsize?: number
  colorList?: string[]
}
