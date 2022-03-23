# screen-component
大屏组件库

## 安装

```bash
npm i hay-ui@latest
```

## 使用

```js
import { createApp } from "vue";
import App from "./App.vue";
import HayUI from "hay-ui";
import "hay-ui/lib/theme-default/index.css";

const app = createApp(App);
app.use(HayUI);
app.mount("#app");
```

