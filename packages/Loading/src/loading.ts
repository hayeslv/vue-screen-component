import { h, reactive } from "vue";

// 创建Loading组件实例
export function createLoadingComponent(options: any) {
  const data = reactive({
    ...options,
    visible: false,
  });

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
      };
    },
  };
}
