import * as echarts from "echarts";
import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from "vue";

export default defineComponent({
  name: "HayChart",
  props: {
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    option: { type: Object, required: true },
  },
  setup(props) {
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
      const option = props.option;
      chartInstance.setOption(option);
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
