import type { PieType, PieDataType } from "./types";

export const colorList = ["#009DFF", "#11C372", "#FDAD43", "#FF4F5C", "#8560FF", "#FF7951", "#93CB23", "#00CAB5", "#5B76FF", "#D343DA"];

const pageBaseFontSize = 12;
interface ChartDataList {
  name: string
  value: number
  itemStyle?: any
}

// 基于12px修改字体大小 6/12   12/24
export const chartConfigChangeSize = (fontsize: number, baseSize = 12): number => {
  return fontsize * (baseSize / pageBaseFontSize);
};

// 饼图内圈虚点
export const _innerPie = (): ChartDataList[] => {
  const dataArr = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        name: (i + 1).toString(),
        value: 1,
        itemStyle: {
          normal: {
            color: "#bbb",
            borderWidth: 0,
            borderColor: "#bbb",
          },
        },
      });
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: 5,
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0,
            borderColor: "rgba(0,0,0,0)",
          },
        },
      });
    }
  }
  return dataArr;
};

const PieTypeMap = {
  normal: () => require("./pie/normal"),
  fanshaped: () => {},
};

/**
 * 根据类型和数据获取图表config配置
 * @param type
 * @param dataList
 * @returns
 */
export const getConfigByType = (type: PieType, dataList: PieDataType[]) => {
  const { getOption } = PieTypeMap[type]();
  return getOption(dataList);
};
