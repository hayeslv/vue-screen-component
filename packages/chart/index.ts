import type { App } from "vue";
import hayChart from "./src/hayChart.vue";

type SFCWithInstall<T> = T & { install(app: App): void }; // vue 安装

// 安装
hayChart.install = (app: App): void => {
  app.component(hayChart.name, hayChart);
};

const InHayChart: SFCWithInstall<typeof hayChart> = hayChart; // 增加类型
export default InHayChart;
