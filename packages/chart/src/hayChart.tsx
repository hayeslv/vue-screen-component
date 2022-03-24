import * as echarts from "echarts";
import type { PropType } from "vue";
import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import { getConfigByType } from "./config/common";
import type { PieDataType, PieType } from "./config/types";

export default defineComponent({
  name: "HayChart",
  props: {
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    option: { type: Object, default: () => null },
    type: { type: String as PropType<PieType>, default: null },
    dataList: { type: Array as PropType<PieDataType[]>, default: null },
  },
  setup(props) {
    const options = ref(props.option);
    if (props.type) {
      if (!props.dataList) {
        console.error("hay-chart：dataList不能为空");
      } else {
        options.value = getConfigByType(props.type, props.dataList);
      }
    }
    const style = computed(() => {
      let str = "";
      props.width && (str += `width: ${props.width}px;`);
      props.height && (str += `height: ${props.height}px;`);
      return str;
    });
    let chartInstance: echarts.EChartsType | null = null;
    const chartsRef = ref();

    const echartRender = () => {
      if (chartInstance) clearEchart();
      chartInstance = echarts.init(chartsRef.value);
      // const option = props.option;
      chartInstance.setOption(options.value);
    };
    const clearEchart = () => {
      chartInstance && chartInstance.dispose();
      chartInstance = null;
    };

    watch(() => props.option, () => {
      echartRender();
    });
    onMounted(() => {
      echartRender();
    });
    onUnmounted(() => {
      chartInstance && chartInstance.dispose();
    });

    return { style, chartsRef };
  },
  render() {
    return <div ref="chartsRef" class="canvas" style={this.style} />;
  },
});
