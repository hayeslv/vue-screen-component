
import type { EChartsOption, SeriesOption, TitleComponentOption } from "echarts";
import { extend } from "../../../../../shared";
import { colorList as defaultColorList, defaultBackgroundColor } from "../../common";
import { defaultTooltip, getSeriesItem, getTitle } from "../../defaultOptions";
import type { OptionConfig, PieDataType } from "../../types";

export const getOption = (dataList: Array<PieDataType>, config: OptionConfig = {}) => {
  const { colorList } = config;
  const totalNum = dataList.reduce((pre, cur) => pre + cur.value, 0);

  const options: EChartsOption = {
    backgroundColor: defaultBackgroundColor,
    legend: {
      orient: "vertical",
      show: true,
      right: "10%",
      top: "middle",
      itemWidth: 3,
      itemHeight: 30,
      itemGap: 20,
      textStyle: {
        color: "#7a8c9f",
        fontSize: 12,
        lineHeight: 16,
        rich: {
          percent: {
            color: "#fff",
            fontSize: 12,
          },
        },
      },
      formatter: (name: string) => {
        const number = dataList.find(v => v.name === name)?.value;
        if (number === undefined) return "";
        return `${name}\r\n{percent|${(number * 100 / totalNum).toFixed(2)}%}  ${number}`;
      },
    },
    title: extend({}, getTitle("总数", `${totalNum} 个`), {
      left: "40%",
      textStyle: {
        color: "#fff",
        rich: {
          name: {
            fontSize: 18,
            padding: [10, 0],
          },
          value: {
            fontSize: 24,
          },
        },
      },
    } as TitleComponentOption),
    tooltip: defaultTooltip(),
    series: [
      extend(
        {},
        getSeriesItem(dataList, "ring", { radius: ["70%", "85%"], center: ["40%", "50%"] }),
        {
          emphasis: {
            scale: false,
          },
          data: dataList.map((v, i) => ({
            name: v.name,
            value: v.value,
            itemStyle: {
              color: colorList ? colorList[i] : defaultColorList[i],
              opacity: 1,
            },
          })),
        } as SeriesOption,
      ),
      extend(
        {},
        getSeriesItem(dataList, "ring", { radius: ["60%", "70%"], center: ["40%", "50%"] }),
        {
          emphasis: {
            scale: false,
          },
          data: dataList.map((v, i) => ({
            name: v.name,
            value: v.value,
            itemStyle: {
              color: colorList ? colorList[i] : defaultColorList[i],
              opacity: 0.5,
            },
          })),
        } as SeriesOption,
      ),
      extend(
        {},
        getSeriesItem(dataList, "ring", { radius: ["50%", "60%"], center: ["40%", "50%"] }),
        {
          emphasis: { // 高亮状态的扇区和标签样式。
            scale: false, // 是否开启高亮后扇区的放大效果。
          },
          data: dataList.map((v, i) => ({
            name: v.name,
            value: v.value,
            itemStyle: {
              color: colorList ? colorList[i] : defaultColorList[i],
              opacity: 0.2,
            },
          })),
        } as SeriesOption,
      ),
    ],
  };
  return options;
};
