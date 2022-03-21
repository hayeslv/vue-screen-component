<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  width: { type: Number, default: null },
  height: { type: Number, default: null },
  option: { type: Object, required: true },
});
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
  const option: echarts.EChartOption = props.option;
  chartInstance.setOption(option);
};
const clearEchart = () => {
  chartInstance && chartInstance.dispose();
  chartInstance = null;
};

watch(() => props.option, (newVal) => {
  echartRender();
}, { deep: true });
onMounted(() => {
  echartRender();
});
onUnmounted(() => {
  chartInstance && chartInstance.dispose();
});

</script>

<template>
  <div
    ref="chartsRef"
    class="canvas"
    :style="style"
  />
</template>

<style scoped>
.canvas{
  width: 100%;
  height: 350px;
}
</style>
