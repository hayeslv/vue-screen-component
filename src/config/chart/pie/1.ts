import type { EChartOption } from "echarts";
import { colorList } from "~/config/common";
import { extend, _innerPie } from "~/utils";

interface ChartDataList {
  name: string
  value: number
  itemStyle?: any
}

const getDataList = (dataList: Array<ChartDataList>) => {
  let seriesData: Array<ChartDataList> = []; let legendData: Array<string> = [];
  seriesData = dataList;
  legendData = dataList.map(item => item.name);
  return { seriesData, legendData };
};

export const getOption = (dataList: Array<ChartDataList>, params: EChartOption = {}) => {
  const { seriesData, legendData } = getDataList(dataList);
  const totalNumber = 999;
  const title = "总数(件)";

  const options: EChartOption = {
    backgroundColor: "transparent",
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
    tooltip: {
      trigger: "item",
      borderColor: "rgba(255,255,255,.3)",
      backgroundColor: "rgba(13,5,30)",
      borderWidth: 1,
      padding: 5,
      formatter: function(parms: any) {
        const str = parms.marker + "" + parms.data.name + "</br>" +
                "数量：" + parms.data.value + "件</br>" +
                "占比：" + parms.percent + "%";
        return str;
      },
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      left: "55%",
      align: "left",
      top: "middle",
      icon: "circle",
      formatter: function(name: any) {
        const item = seriesData.filter(item => item.name === name)[0];
        return `{name|${item.name}}{value|${item.value}}`;
      },
      textStyle: {
        color: "#fff",
        rich: {
          name: {
            width: 110,
            fontSize: 16,
          },
          value: {
            width: 100,
            fontSize: 16,
          },
        },
      },
      data: legendData,
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
        data: seriesData,
      },
      {
        type: "pie",
        zlevel: 3,
        silent: true,
        center: ["30%", "50%"],
        radius: ["52%", "56%"],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: _innerPie(),
      },
    ],
  };
  return extend(options, params);
};
