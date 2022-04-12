import type { Directive, DirectiveBinding } from "vue";
import { Loading } from "./service";

const INSTANCE_KEY = Symbol("HayLoading");

const createInstance = (el: any, binding: DirectiveBinding) => {
  const options: any = {
    target: el,
  };

  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options),
  };
};

export const vLoading: Directive = {
  // @ts-ignore
  name: "loading",
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        createInstance(el, binding);
      } else {
        instance?.instance.close();
      }
    }
  },
};
