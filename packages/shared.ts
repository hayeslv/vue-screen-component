export const extend = Object.assign;

export const addClass = (el: HTMLElement, className: string) => {
  // 如果当前元素样式列表中没有 className
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
};

export const removeClass = (el: HTMLElement, className: string) => {
  el.classList.remove(className);
};
