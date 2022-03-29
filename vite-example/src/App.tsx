import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import "./style/common.scss";
import { HayChart, HayPanelBac } from "hay-ui";
import type { EChartsOption } from "echarts";

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
      // title: {
      //   text: "车辆数(辆)",
      //   left: "30%",
      // },
      // legend: {
      //   orient: "horizontal",
      //   top: "bottom",
      //   left: "center",
      //   itemWidth: 12,
      //   itemHeight: 12,
      //   itemGap: 18,
      //   textStyle: {
      //     color: "#fff",
      //     fontSize: 12,
      //     borderWidth: 0,
      //   },
      // },
    };

    const config = {
      // center: ["30%", "50%"],
    };

    return { option, config };
  },
  render() {
    return <div>
      {/* <HayChart type={"pie_ring_dot"} dataList={demoList} option={this.option} config={this.config} width={600} height={300} /> */}
      <HayPanelBac
        width={600}
        v-slots={() => <HayChart type={"pie_ring_shadow"} dataList={demoList} option={this.option} config={this.config} width={600} height={300} />}
      >
      </HayPanelBac>
    </div>;
  },
});
