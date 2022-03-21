const pageBaseFontSize = 12;

// 基于12px修改字体大小 6/12   12/24
export const chartConfigChangeSize = (fontsize: number, baseSize = 12): number => {
  return fontsize * (baseSize / pageBaseFontSize);
};
