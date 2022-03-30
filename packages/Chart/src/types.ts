
export type PieType =
  "pie_normal" |
  "pie_fanshaped" |
  "pie_ring" |
  "pie_ring_dot" |
  "pie_ring_shadow" |
  "pie_rate" |
  "pie_dashboard_rate";

export type LineType =
  "line_normal" |
  "line_area";

export type ChartType = PieType | LineType | "comlun_normal";

/**
 * 饼图数据类型
 */
export interface PieDataType {
  name: string
  value: number
}

/**
 * 线图数据类型
 */
export interface LineDataType {
  name: string
  value: number[]
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
 * 线图series类型
 */
export type LineSeriesType = "line" | "area";

/**
 * getOption配置参数
 */
export interface OptionConfig {
  fontsize?: number
  colorList?: string[]
  center?: string[]
  radius?: string[]
  smooth?: boolean
  symbol?: string
}
