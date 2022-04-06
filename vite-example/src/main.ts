import { createApp } from "vue";
import App from "./App";
import router from "./router";

import "hay-ui/dist/index.min.css";
import HayUI from "hay-ui";

createApp(App)
  .use(router)
  .use(HayUI)
  .mount("#app");
