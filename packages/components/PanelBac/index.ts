import type { App } from "vue";
import HayPanelBac from "./src";

// 安装
HayPanelBac.install = (app: App): void => {
  app.component(HayPanelBac.name, HayPanelBac);
};

export default HayPanelBac;
