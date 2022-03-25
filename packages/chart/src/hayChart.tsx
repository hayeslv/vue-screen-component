import type { PropType } from "vue";
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import type { ChartType, PieDataType } from "./types";
import { useChart, useChartSize, useOptions } from "./hooks";

export default defineComponent({
  name: "HayChart",
  props: {
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    option: { type: Object, default: () => null },
    type: { type: String as PropType<ChartType>, default: null },
    dataList: { type: Array as PropType<PieDataType[]>, default: null },
  },
  setup(props) {
    const chartsRef = ref();

    const { clearChart, renderChart } = useChart();
    const { style } = useChartSize(props.width, props.height);
    const { options, setOptions, setTypeOptions } = useOptions();

    /* ====== 优先级：option > type&dataList ====== */
    // 设置 type & dataList 的 option
    if (props.type && props.dataList) setTypeOptions(props.type, props.dataList);
    // 设置用户配置的 option
    props.option && setOptions(props.option);

    watch(() => props.option, () => {
      renderChart(chartsRef, options.value);
    });
    onMounted(() => {
      renderChart(chartsRef, options.value);
    });
    onUnmounted(() => {
      clearChart();
    });

    return { style, chartsRef };
  },
  render() {
    return <div ref="chartsRef" class="canvas" style={this.style} />;
  },
});
