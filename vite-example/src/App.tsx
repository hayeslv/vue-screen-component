import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import "./style/common.scss";
import { HayChart } from "hay-ui";
import type { EChartsOption } from "echarts";
import * as R from "ramda";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];

// const rateList = [
//   { name: "占比", value: 66 },
//   { name: "剩余", value: 34 },
// ];

export default defineComponent({
  setup() {
    const option: Ref<EChartsOption> = ref({});
    option.value = {
      title: {
        text: "车辆数(辆)",
      },
    };

    return { option };
  },
  render() {
    return <div>
      <HayChart type={"pie_ring_dot"} dataList={demoList} option={this.option} width={600} height={300} />
    </div>;
  },
});
