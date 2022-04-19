import { createApp } from "vue";
import App from "./App";
import router from "./router";

import "hay-ui/dist/index.min.css";
import HayUI, { HayLoading } from "hay-ui";

createApp(App)
  .use(router)
  .use(HayLoading)
  .use(HayUI)
  .mount("#app");
