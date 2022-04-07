import { createApp, createVNode, h, reactive, toRefs, Transition, vShow, withDirectives } from "vue";

export function createLoadingComponent(options: any) {
  const data = reactive({
    ...options,
    originalPosition: "",
    visible: false,
  });

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
            default: withDirectives(
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
    vm,
    get $el(): HTMLElement {
      return vm.$el;
    },
  };
}
