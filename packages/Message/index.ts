import { createVNode, render } from "vue";
import HayMessage from "./src";

// 准备 dom 容器
const div = document.createElement("div");
div.setAttribute("class", "message-container");
document.body.appendChild(div);

export default ({ type, message }: { type?: string; message?: string }) => {
  // 1. 导入组件
  // 2. 根据组件创建虚拟节点
  const vnode = createVNode(HayMessage, { type, message });
  // 3. 准备一个DOM容器
  // 4. 把虚拟节点渲染后，挂载到DOM容器中
  render(vnode, div);
  // 5. 开启定时，移除DOM容器中的内容
  setTimeout(() => {
    render(null, div);
  }, 3000);
};
