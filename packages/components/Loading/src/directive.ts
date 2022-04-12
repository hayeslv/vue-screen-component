import type { Directive, DirectiveBinding, UnwrapRef } from "vue";
import type { LoadingInstance } from "./loading";
import { Loading } from "./service";
import type { LoadingOptions } from "./types";

const INSTANCE_KEY = Symbol("HayLoading");

export type LoadingBinding = boolean | UnwrapRef<LoadingOptions>;
export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]?: {
    instance: LoadingInstance
    options: LoadingOptions
  }
}

const createInstance = (el: ElementLoading, binding: DirectiveBinding<LoadingBinding>) => {
  const options: LoadingOptions = {
    target: el,
  };

  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options),
  };
};

export const vLoading: Directive<ElementLoading, LoadingBinding> = {
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
