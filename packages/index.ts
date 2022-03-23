import type { App } from "vue";

/* 基础组件 start */
import HayChart from "./Chart";
import MeButton from "./MeButton"; // 按钮
/* 基础组件 end */

// 所有组件
const components: any[] = [
  HayChart,
  MeButton,
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
  MeButton,
};

// 全部导出
export default {
  install,
  ...components,
};
