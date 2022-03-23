// import { EChartsOption } from "echarts";
import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import { HayChart } from "../../../lib/index";
// import HayChart from "../../../packages/Chart/src/hayChart";
import { getOption5 as getOption } from "../../config/chart/pie";
// import HayChart from "../../components/Echart";

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
    return <HayChart option={this.option} height={300} />;
  },
});
