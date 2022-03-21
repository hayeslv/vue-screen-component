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
    }
    else {
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
