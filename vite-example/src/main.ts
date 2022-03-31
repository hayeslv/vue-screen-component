import { createApp } from "vue";
import App from "./App";

import "hay-ui/dist/index.min.css";
import loadingDirective from "../../packages/Loading";

createApp(App)
  .directive("loading", loadingDirective)
  .mount("#app");
