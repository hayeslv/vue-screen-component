import type Chart from "./packages/chart";
declare module "vue" {
  export interface GlobalComponents {
    hayChart: typeof Chart
  }
}
