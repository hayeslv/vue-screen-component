import { graphic } from "echarts";
import type { LineSeriesOption, TooltipComponentOption } from "echarts";
import { colorList as defaultColorList, hexToRgba } from "./common";
import type { LineDataType, LineSeriesType } from "./types";

/**
 * 线图series
 * @param dataList 数据
 * @param type 类型
 * @param config 配置项
 * @returns
 */
export const getLineSeriesItem = (
  data: Array<LineDataType> = [],
  type: LineSeriesType = "line",
  config: { smooth?: boolean; symbol?: string; colorList?: string[] } = {},
): Array<LineSeriesOption> => {
  const arr: Array<LineSeriesOption> = [];
  data.forEach((e, i) => {
    const seriesConfig: LineSeriesOption = {
      name: e.name,
      type: "line",
      data: e.value,
      smooth: config.smooth ?? true,
      symbolSize: 2,
      symbol: config.symbol ?? "none",
    };
    if (type === "area") {
      seriesConfig.areaStyle = {
        color: new graphic.LinearGradient(0, 0, 0, 1,
          [{
            offset: 0,
            color: config.colorList ? hexToRgba(config.colorList[i], 0.2) : hexToRgba(defaultColorList[i], 0.2),
          }, {
            offset: 1,
            color: config.colorList ? hexToRgba(config.colorList[i], 0) : hexToRgba(defaultColorList[i], 0),
          }],
        ),
        shadowColor: config.colorList ? hexToRgba(config.colorList[i], 0.1) : hexToRgba(defaultColorList[i], 0.1),
        shadowBlur: 10,
      };
    }
    arr.push(seriesConfig);
  });

  return arr!;
};

/**
 * 默认tooltip样式
 * @returns {}
 */
export const getDefaultTooltip = (): TooltipComponentOption => {
  return {
    trigger: "axis",
    borderColor: "rgba(255,255,255,.3)",
    backgroundColor: "rgba(13,5,30)",
    borderWidth: 1,
    textStyle: {
      color: "#fff",
    },
    formatter: function(params: any) {
      let html = "";
      html += `
        <div style="font-size: 12px;">${params[0].name || 0}</div>
      `;
      params.forEach((v: any) => {
        html += `
        <div style="display:flex; justify-content: space-between;">
          <div style="display:flex; align-items: center;">
            <span style="display:inline-block;
              margin-right: 6px;
              width: 10px;
              min-width: 10px;
              height: 2px;
              min-height: 2px;
              background-color:${v.color};"
            ></span>
            <span style="margin-right: 8px;">${v.seriesName}</span>
          </div>
          <span style="font-size: 12px;">${v.value}</span>
        </div>
        `;
      });
      return html;
    },
  };
};
