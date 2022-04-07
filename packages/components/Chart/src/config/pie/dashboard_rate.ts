import type { EChartsOption } from "echarts";
import type { OptionConfig, PieDataType } from "../../types";

export function getOption(dataList: Array<PieDataType>, config: OptionConfig = {}): EChartsOption {
  const per = dataList[0].value / 100; // 数据的占比：0~1之间

  const option: EChartsOption = {
    series: [{
      type: "gauge",
      center: ["50%", "50%"],
      radius: "100%",
      startAngle: 220,
      endAngle: -40,
      min: 0,
      max: 100,
      progress: {
        show: true,
        width: 12,
      },

      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 12,
          color: [
            [per, "#009DFF"],
            [1, "#273143"],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      anchor: {
        show: false,
      },
      title: {
        show: false,
      },
      detail: {
        valueAnimation: true,
        width: "60%",
        lineHeight: 40,
        height: 15,
        borderRadius: 8,
        offsetCenter: [0, "-40%"],
        fontWeight: "bolder",
        formatter: function(value: any) {
          return `{c|${value}%\n}{a|${dataList[0].name}}`;
        },
        rich: {
          c: {
            color: "#fff",
            fontSize: 30,
            padding: [0, 0, 0, 0],
          },
          a: {
            fontSize: 18,
            color: "#bbbb",
          },
        },
      },
      data: [{
        value: dataList[0].value,
      }],
    }],
  };

  return option;
}
