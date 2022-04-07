import type { Directive, DirectiveBinding } from "vue";

const INSTANCE_KEY = Symbol("HayLoading");

// export interface HayLoading extends HTMLElement {
//   [INSTANCE_KEY]?: {
//     instance:
//   }
// }

const createInstance = (el: any, binding: DirectiveBinding) => {
  const vm = binding.instance;
};

export const vLoading: Directive = {
  mounted(el, binding) {
    if (binding.value) {
      // createInstance
    }
  },
};
