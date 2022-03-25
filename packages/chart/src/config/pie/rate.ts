
import type { EChartsOption, TooltipComponentOption } from "echarts";
import { extend } from "../../../../shared";
import { defaultTooltip, getInnerPie } from "../../defaultOptions";
import type { PieDataType } from "../../types";

export function getOption(dataList: Array<PieDataType>) {
  const nameList = dataList.map(v => v.name);
  const total = dataList.reduce((pre, cur) => pre + cur.value, 0);
  const options: EChartsOption = {
    title: {
      text: (dataList[0].value * 100 / total).toFixed(2) + "%",
      left: "center",
      top: "center",
      textStyle: {
        fontWeight: "normal",
        color: "#29EEF3",
        fontSize: "20",
      },
    },
    tooltip: extend({}, defaultTooltip(), {
      formatter: function(params: any) {
        return params.name + "：" + params.percent + " %";
      },
    } as TooltipComponentOption),
    legend: {
      show: true,
      itemGap: 12,
      data: dataList.map(v => v.name),
      textStyle: {
        fontWeight: "normal",
        color: "#fff",
        fontSize: "12",
      },
    },
    series: [
      {
        name: "circle",
        type: "pie",
        clockwise: true,
        center: ["50%", "50%"],
        radius: ["55%", "70%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        emphasis: { // 高亮状态的扇区和标签样式。
          scale: false, // 是否开启高亮后扇区的放大效果。
        },
        data: [
          {
            name: nameList[0],
            value: dataList[0].value,
            itemStyle: {
              color: { // 颜色渐变
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: "#28E8FA", // 0% 处的颜色
                }, {
                  offset: 1, color: "#4FADFD", // 100% 处的颜色
                }],
              },
            },
          },
          {
            name: nameList[1],
            value: dataList[1].value,
            itemStyle: {
              color: "#E1E8EE",
            },
          },
        ],
      },
      getInnerPie(["50%", "50%"], ["46%", "50%"]),
    ],
  };
  return options;
}
