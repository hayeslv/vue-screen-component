import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import { HayChart, HayPanelBac } from "hay-ui";
import type { EChartsOption } from "echarts";
import "./style/common.scss";
import EmptyImg from "./assets/empty.png";

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

    setTimeout(() => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 5000);
    }, 2000);

    return { option, config, loading };
  },
  render() {
    return <div>
      <HayPanelBac
        type={"title_line"}
        width={600}
        title={"每日自行车投放比"}
        loading={this.loading}
        v-slots={
          () => <HayChart type={"pie_dashboard_rate"} dataList={demoList} config={this.config} width={600} height={300} />
        }
        // v-slots={
        //   () => Math.random() > 0.5
        //     ? <HayChart type={"pie_dashboard_rate"} dataList={demoList} config={this.config} width={600} height={300} />
        //     : <div>
        //       <img src={EmptyImg} alt="" />
        //     </div>
        // }
      >
      </HayPanelBac>
    </div>;
  },
});
