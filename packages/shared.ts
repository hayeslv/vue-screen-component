import type { CSSProperties } from "vue";

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
