import type { EChartsOption } from "echarts";
import { HayChart, HayPanelBac } from "hay-ui";
import type { Ref } from "vue";
import { defineComponent, ref } from "vue";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];

export default defineComponent({
  setup() {
    const loading = ref(false);
    const option: Ref<EChartsOption> = ref({});

    const loadingChangeHandler = (value: boolean) => {
      loading.value = value;
    };

    return { option, loading, loadingChangeHandler };
  },
  render() {
    return <div>
      <HayPanelBac
        v-loading={{ value: this.loading, text: "拼命加载中" }}
        type={"title_line"}
        width={600}
        title={"每日自行车投放比"}
        loading={this.loading}
        v-slots={
          () => <HayChart type={"pie_dashboard_rate"} dataList={demoList} width={600} height={300} />
        }
      >
      </HayPanelBac>
      <div class="btns" style="margin-top: 20px;">
        <button onClick={() => this.loadingChangeHandler(true)}>显示loading</button>
        <button onClick={() => this.loadingChangeHandler(false)}>隐藏loading</button>
      </div>
    </div>;
  },
});
