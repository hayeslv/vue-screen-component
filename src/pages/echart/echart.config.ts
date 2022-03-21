import type { EChartOption } from "echarts";

const colorList = ["#37a2da", "#32c5e9", "#9fe6b8", "#ffdb5c", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378ea"];

// const nameList = ["问题上报处置数", "问题上报数"];
interface ChartDataList {
  name: string
  value: number
}

export function getOption(dataList: Array<ChartDataList>): EChartOption {
  const legendData = [];
  for (let j = 0; j < dataList.length; j++) {
    const data = {
      name: dataList[j].name,
      icon: "circle",
      textStyle: {
        fontSize: 18,
        color: colorList[j],
      },
    };
    legendData.push(data);
  }
  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    visualMap: [
      {
        show: false,
        inRange: {},
      },
    ],
    legend: {
      orient: "horizontal",
      type: "scroll",
      show: true,
      icon: "circle",
      top: "bottom",
      left: "center",
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 8,
      textStyle: {
        color: "#fff",
        fontSize: 12,
        borderWidth: 0,
      },
    },
    series: [{
      name: "访问来源",
      type: "pie",
      radius: "80%",
      center: ["50%", "40%"],
      // color: ["rgb(131,249,103)", "#FBFE27", "#FE5050", "#1DB7E5"], // '#FBFE27','rgb(11,228,96)','#FE5050'
      data: [{
        value: 285,
        name: "黑名单查询",
      },
      {
        value: 410,
        name: "红名单查询",
      },
      {
        value: 274,
        name: "法人行政处罚",
      },
      {
        value: 235,
        name: "其它查询",
      },
      ].sort(function(a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      // label: {
      //   normal: {
      //     formatter: (params: any) => {
      //       return `{b|${params.value}}`;
      //     },
      //     rich: {
      //       b: {
      //         color: "#fff",
      //         fontSize: 12,
      //         height: 10,
      //       },
      //     },
      //     // formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
      //     // rich: {
      //     //     c: {
      //     //         color: 'rgb(241,246,104)',
      //     //         fontSize: 20,
      //     //         fontWeight:'bold',
      //     //         lineHeight: 5
      //     //     },
      //     //     b: {
      //     //         color: 'rgb(98,137,169)',
      //     //         fontSize: 15,
      //     //         height: 40
      //     //     },
      //     // },
      //   },
      // },
      // labelLine: {
      //   normal: {
      //     lineStyle: {
      //       color: "transparent",
      //     },
      //     smooth: 0.2,
      //     length: 1,
      //     length2: 1,
      //   },
      // },
      // itemStyle: {
      //   normal: {
      //     shadowColor: "rgba(0, 0, 0, 0.8)",
      //     shadowBlur: 50,
      //   },
      // },
    }],
  };
}
