import type { App } from "vue";
import HayChart from "./src/hayChart.vue";

// 安装
HayChart.install = (app: App): void => {
  app.component(HayChart.name, HayChart);
};

// const InHayChart: SFCWithInstall<typeof HayChart> = HayChart; // 增加类型
export default HayChart;
