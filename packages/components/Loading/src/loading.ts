import { createApp, createVNode, h, reactive, ref, toRefs, Transition, vShow, withDirectives } from "vue";
import { removeClass } from "../../../shared";

export function createLoadingComponent(options: any) {
  let afterLeaveTimer: number;

  const afterLeaveFlag = ref(false);

  const data = reactive({
    ...options,
    originalPosition: "",
    visible: false,
  });

  function destroySelf() {
    const target = data.parent;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute("loading-number");
      loadingNumber = Number.parseInt(loadingNumber as any) - 1;
      if (!loadingNumber) {
        removeClass(target, "el-loading-parent--relative");
        target.removeAttribute("loading-number");
      } else {
        target.setAttribute("loading-number", loadingNumber.toString());
      }
      removeClass(target, "el-loading-parent--hidden");
    }
    remvoeElLoadingChild();
  }
  function remvoeElLoadingChild(): void {
    vm.$el?.parentNode?.removeChild(vm.$el);
  }

  function close() {
    const target = data.parent;
    target.vLoadingAddClassList = undefined;
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);

    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false;
        destroySelf();
      }
    }, 400);

    data.visible = false;

    // options.closed?.();
  }

  // Loading组件
  const hayLoadingComponent = {
    name: "HayLoading",
    setup() {
      return () => {
        const svg = data.spinner || data.svg;
        // 旋转器图标
        const spinner = h(
          "svg",
          {
            class: "circular",
            viewBox: data.svgViewBox || "25 25 50 50", // 默认从 25 25 开始，向右侧和下侧延伸 50px
            ...(svg ? { innerHTML: svg } : {}),
          },
          [
            h("circle", {
              class: "path",
              cx: "50",
              cy: "50",
              r: "20",
              fill: "none",
            }),
          ],
        );
        // 旋转器文字
        const spinnerText = data.text
          ? h("p", { class: "hay-loading-text" }, [data.text])
          : undefined;

        return h(
          Transition,
          {
            name: "hay-loading-fade",
          },
          {
            // 默认位置
            default: () => withDirectives(
              createVNode(
                "div",
                {
                  style: {
                    backgroundColor: data.background || "",
                  },
                  class: [
                    "hay-loading-mask",
                    data.customClass,
                  ],
                },
                [
                  h(
                    "div",
                    {
                      class: "hay-loading-spinner",
                    },
                    [spinner, spinnerText],
                  ),
                ],
              ),
              [[vShow, data.visible]],
            ),
          },
        );
      };
    },
  };

  // 创建组件实例并挂载到一个空的div上
  const vm = createApp(hayLoadingComponent).mount(document.createElement("div"));

  return {
    ...toRefs(data),
    close,
    vm,
    get $el(): HTMLElement {
      return vm.$el;
    },
  };
}
