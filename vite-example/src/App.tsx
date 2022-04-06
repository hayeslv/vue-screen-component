import type { Ref } from "vue";
import { defineComponent, ref } from "vue";

// import { HayChart, HayMessage, HayPanelBac } from "hay-ui";
import type { EChartsOption } from "echarts";
import "./style/common.scss";
import { RouterView } from "vue-router";
// import EmptyImg from "./assets/empty.png";

// const demoList = [
//   { name: "数字城管", value: 14 },
//   { name: "市民热线", value: 12 },
//   { name: "巡查员上报", value: 9 },
//   { name: "日常巡检", value: 22 },
//   { name: "其他", value: 25 },
// ];

// const demoBarList = [
//   { name: "数量", value: [1, 20, 30, 40, 50, 60, 70] },
// ];

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

    const barOption: Ref<EChartsOption> = ref({});
    barOption.value = {
      yAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    };
    const barConfig = {
    };

    loading.value = true;

    return { option, config, loading, barOption, barConfig };
  },
  render() {
    return <RouterView />;
    // return <div>
    //   <HayPanelBac
    //     v-loading={{ value: this.loading, text: "拼命加载中" }}
    //     type={"title_line"}
    //     width={600}
    //     title={"每日自行车投放比"}
    //     loading={this.loading}
    //     v-slots={
    //       () => <HayChart type={"pie_dashboard_rate"} dataList={demoList} config={this.config} width={600} height={300} />
    //     }
    //   >
    //   </HayPanelBac>
    //   <HayPanelBac
    //     type="four_corners"
    //     width={600}
    //     title="柱状图1"
    //   >
    //     <HayChart type="bar_pictorial_horizon" dataList={demoBarList} config={this.barConfig} option={this.barOption} width={600} height={300} />
    //   </HayPanelBac>
    // </div>;
  },
});
