import { Loading } from "./src/service";
import { vLoading } from "./src/directive";
import "./src/index.scss";

import type { App } from "vue";

// installer and everything in all
export const HayLoading = {
  install(app: App) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default HayLoading;
export { vLoading, vLoading as HayLoadingDirective, Loading as HayLoadingService };

export * from "./src/types";
