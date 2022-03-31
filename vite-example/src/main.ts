import { createApp } from "vue";
import App from "./App";

import "hay-ui/dist/index.min.css";
import HayUI from "hay-ui";

createApp(App)
  .use(HayUI)
  .mount("#app");
