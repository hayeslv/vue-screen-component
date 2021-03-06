
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

export type BarType =
  "bar_normal" |
  "bar_horizon" |
  "bar_pictorial" |
  "bar_pictorial_horizon";

export type ChartType = PieType | LineType | BarType | "comlun_normal";

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
 * 柱状图数据类型
 */
export interface BarDataType {
  name: string
  value: number[]
}

export type DataType = BarDataType | PieDataType | LineDataType;

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
 * 柱状图series类型
 */
export type BarSeriesType = "vertical" | "horizon";

/**
 * legend图标类型
 */
export type LegendIconType = "line" | "bar" | "pie";

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
  stack?: string
  barWidth?: number
}
