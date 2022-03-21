import type { EChartOption } from "echarts";
import { colorList } from "~/config/common";
import { extend } from "~/utils";
import { defaultBackgroundColor, defaultTooltip, getInnerPie, getLegend } from "./defaultOptions";
import type { PieDataType } from "./type";

export const getOption = (dataList: Array<PieDataType>, params: EChartOption = {}) => {
  const totalNumber = dataList.map(v => v.value).reduce((pre, cur) => pre + cur, 0);
  const title = "总数(件)";

  const options: EChartOption = {
    backgroundColor: defaultBackgroundColor,
    tooltip: defaultTooltip,
    legend: getLegend(dataList),
    title: {
      text: `{name|${title}}\n{value|${totalNumber}}`,
      top: "center",
      left: "30%",
      textStyle: {
        rich: {
          name: {
            fontSize: 14,
            fontWeight: "normal",
            color: "#fff",
            padding: [10, 0],
          },
          value: {
            fontSize: 32,
            fontWeight: "bold",
            color: "#bbb",
          },
        },
      },
      textAlign: "center",
    },
    series: [
      {
        type: "pie",
        z: 3,
        center: ["30%", "50%"],
        radius: ["60%", "75%"],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 4,
        itemStyle: {
          normal: {
            color: function(params: any) {
              return colorList[params.dataIndex];
            },
          },
        },
        labelLine: {
          show: false,
        },
        label: {
          show: false,
          position: "outside",
          formatter: "{a|{b}：{d}%}\n{hr|}",
          rich: {
            hr: {
              backgroundColor: "t",
              borderRadius: 3,
              width: 3,
              height: 3,
              padding: [3, 3, 0, -12],
            },
            a: {
              padding: [-30, 15, -20, 15],
            },
          },
        },
        data: dataList,
      },
      getInnerPie(["30%", "50%"], ["52%", "56%"]),
    ],
  };
  return extend(options, params);
};
