import type { App } from "vue";
import HayVideo from "./src";

// 安装
HayVideo.install = (app: App): void => {
  app.component(HayVideo.name, HayVideo);
};

export default HayVideo;
