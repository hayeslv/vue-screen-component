import type { PropType } from "vue";
import { defineComponent, onMounted, ref } from "vue";
import "./index.scss";
import type { MessageType } from "./types";

export default defineComponent({
  name: "HayMessage",
  props: {
    type: { type: String as PropType<MessageType>, default: "success" },
    message: { type: String, default: "" },
  },
  setup() {
    const style = {
      warn: {
        icon: "icon-warning",
        color: "#E6A23C",
        backgroundColor: "rgb(253, 246, 236)",
        borderColor: "rgb(250, 236, 216)",
      },
      error: {
        icon: "icon-shanchu",
        color: "#F56C6C",
        backgroundColor: "rgb(254, 240, 240)",
        borderColor: "rgb(253, 226, 226)",
      },
      success: {
        icon: "icon-queren2",
        color: "#67C23A",
        backgroundColor: "rgb(240, 249, 235)",
        borderColor: "rgb(225, 243, 216)",
      },
    };
    // 定义一个数据控制显示隐藏，默认是隐藏，组件挂载完毕显示
    const visible = ref(false);
    onMounted(() => { // 需调用钩子函数，等dom渲染完成后，再进行赋值，如果在setup中直接赋值，则会被直接渲染成true
      visible.value = true;
    });
    return { style, visible };
  },
  render() {
    // vue动画：从上滑入且淡出
    return <transition name="down">
      {
        this.visible && <div class="hay-message" style={this.style[this.type]}>
          <i class={["iconfont", this.style[this.type].icon]}></i>
          <span class="text">{this.message}</span>
        </div>
      }
    </transition>;
  },
});
