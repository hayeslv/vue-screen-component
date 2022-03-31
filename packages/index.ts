import type { App } from "vue";
import "./base.scss";

/* 基础组件 */
import HayChart from "./Chart"; // 图表
// import HayVideo from "./Video"; // 视频

/* 指令组件 */
// import HayLoading from "./Loading"; // v-loading指令

/* 样式组件 */
import HayPanelBac from "./PanelBac"; // 背景面板

// 所有组件
const components: any[] = [
  HayChart,
  // HayVideo,
  HayPanelBac,
];

/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = (app: App) => {
  // 注册组件
  components.forEach(component => app.component(component.name, component));
};

export {
  HayChart,
  // HayVideo,
  HayPanelBac,
};

// 全部导出
export default {
  install,
  ...components,
};
