import { createLoadingComponent } from "./loading";

export const Loading = function(options: any) {
  const resolved = resolvedOptions(options);

  const instance = createLoadingComponent({
    ...resolved,
  });
};

const resolvedOptions = (options: any) => {
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
    spinner: options.spinner || false,
    text: options.text || "",
    customClass: options.customClass || "",
    visible: options.visible ?? true,
    target,
  };
};

const addClassList = (options: any, parent: HTMLElement, instance: any) => {
  // if(instance.)
};
