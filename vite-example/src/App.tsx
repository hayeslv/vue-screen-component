import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import { HayChart, HayPanelBac } from "hay-ui";
import type { EChartsOption } from "echarts";
import "./style/common.scss";
// import EmptyImg from "./assets/empty.png";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];

const demoLineList = [
  { name: "数量", value: [1, 2, 3, 4, 5, 6, 7] },
  { name: "数量2", value: [12, 23, 43, 42, 56, 67, 72] },
];

// const rateList = [
//   { name: "占比", value: 66 },
//   { name: "剩余", value: 34 },
// ];

export default defineComponent({
  setup() {
    const loading = ref(false);
    const option: Ref<EChartsOption> = ref({});
    option.value = {
      title: {
        text: "总数（件）",
      },
    };

    const config = {
      // center: ["30%", "50%"],
    };

    const lineOption: Ref<EChartsOption> = ref({});
    lineOption.value = {
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    };
    const lineConfig = {
      smooth: false,
      symbol: "emptyCircle",
    };

    setTimeout(() => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 5000);
    }, 2000);

    return { option, config, loading, lineOption, lineConfig };
  },
  render() {
    return <div v-loading={true}>
      <HayPanelBac
        type={"title_line"}
        width={600}
        title={"每日自行车投放比"}
        loading={this.loading}
        v-slots={
          () => <HayChart type={"pie_dashboard_rate"} dataList={demoList} config={this.config} width={600} height={300} />
        }
      >
      </HayPanelBac>
      <HayPanelBac
        type="four_corners"
        width={600}
        title="折线图1"
      >
        <HayChart type="line_area" dataList={demoLineList} config={this.lineConfig} option={this.lineOption} width={600} height={300} />
      </HayPanelBac>
    </div>;
  },
});
