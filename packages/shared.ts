import type { CSSProperties } from "vue";
import { getCurrentInstance, inject, computed, ref } from "vue";

export const extend = Object.assign;

export const getStyle = (element: HTMLElement, styleName: keyof CSSProperties): string => {
  if (!element || !styleName) return "";

  try {
    const style = element.style[styleName as any];
    if (style) return style;
    const computed = document.defaultView?.getComputedStyle(element, "");
    return computed ? computed[styleName as any] : "";
  } catch {
    return element.style[styleName as any];
  }
};

export const addClass = (el: HTMLElement, className: string) => {
  if (!el || !className.trim()) return;
  // 如果当前元素样式列表中没有 className
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
};

export const removeClass = (el: HTMLElement, className: string) => {
  if (!el || !className.trim()) return;
  el.classList.remove(className);
};

const zIndex = ref(0);

export const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2000); // TODO: move to @element-plus/constants
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);

  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  };
};

const configProviderContextKey = Symbol("globalConfig");
const globalConfig = ref();
function useGlobalConfig(
  key?: any,
  defaultValue = undefined,
) {
  const config = getCurrentInstance()
    ? inject(configProviderContextKey, globalConfig)
    : globalConfig;
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue);
  } else {
    return config;
  }
}
