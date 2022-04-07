import type { App } from "vue";
import "./base.scss";

/* 基础组件 */
import HayChart from "./Chart"; // 图表
// import HayVideo from "./Video"; // 视频
import HayMessage from "./Message"; // 消息

/* 自定义指令 */
import HayLoading from "./Loading"; // v-loading指令

/* 样式组件 */
import HayPanelBac from "./PanelBac";

// 所有组件
const components: any[] = [
  HayChart,
  // HayVideo,
  HayPanelBac,
  HayMessage,
];

// 全部自定义指令
const directions: any[] = [
  HayLoading,
];

/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = (app: App) => {
  // 注册组件
  components.forEach(component => app.component(component.name, component));
  // 自定义指令注册
  directions.forEach(direction => app.directive(direction.name, direction));
};

export {
  HayChart,
  // HayVideo,
  HayPanelBac,
  HayMessage,
};

// 全部导出
export default {
  install,
  ...components,
};
