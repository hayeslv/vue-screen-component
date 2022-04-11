import { isObject } from ".pnpm/@vue+shared@3.2.31/node_modules/@vue/shared";
import type { Directive, DirectiveBinding } from "vue";
import { Loading } from "./service";

const INSTANCE_KEY = Symbol("HayLoading");

const createInstance = (el: any, binding: DirectiveBinding) => {
  // 通过key获取Prop的value
  const getBindingProp = (key: any) => isObject(binding.value) ? binding.value[key] : undefined;

  const options: any = {
    target: getBindingProp("target") ?? el,
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
