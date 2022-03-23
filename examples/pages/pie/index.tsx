// import { EChartsOption } from "echarts";
import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import Echart from "~/components/Echart";
import { getOption5 as getOption } from "~/config/chart/pie";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];

export default defineComponent({
  setup() {
    const option: Ref = ref(getOption(demoList));

    return { option };
  },
  render() {
    return <Echart option={this.option} height={300} />;
  },
});
