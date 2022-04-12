import { nextTick } from "vue";
import { addClass, removeClass } from "../../../shared";
import type { LoadingInstance } from "./loading";
import { createLoadingComponent } from "./loading";
import type { LoadingOptions, LoadingOptionsResolved } from "./types";

export const Loading = function(options: LoadingOptions = {}) {
  const resolved = resolvedOptions(options);

  const instance = createLoadingComponent({
    ...resolved,
  });

  // addStyle(resolved.parent, instance);
  addClassList(resolved, resolved.parent, instance);

  resolved.parent.appendChild(instance.$el);

  // 实例渲染完之后, 再修改 visible 来触发 transition
  // @ts-ignore
  nextTick(() => (instance.visible.value = resolved.visible));

  return instance;
};

const resolvedOptions = (options: LoadingOptions): LoadingOptionsResolved => {
  let target: HTMLElement;
  if (typeof options.target === "string") {
    target = document.querySelector(options.target) || document.body;
  } else {
    target = options.target || document.body;
  }
  return {
    parent: target === document.body || options.body ? document.body : target,
    background: options.background || "",
    svg: options.svg || "",
    svgViewBox: options.svgViewBox || "",
    spinner: options.spinner || false,
    text: options.text || "",
    fullscreen: target === document.body && (options.fullscreen ?? true),
    lock: options.lock ?? false,
    customClass: options.customClass || "",
    visible: options.visible ?? true,
    target,
  };
};

// const addStyle = (parent: HTMLElement, instance: any) => {
//   instance.originalPosition.value = getStyle(parent, "position");
// };

const addClassList = (options: LoadingOptions, parent: HTMLElement, instance: LoadingInstance) => {
  if (instance.originalPosition.value !== "absolute" && instance.originalPosition.value !== "fixed") {
    addClass(parent, "hay-loading-parent--relative");
  } else {
    removeClass(parent, "hay-loading-parent--relative");
  }
};
