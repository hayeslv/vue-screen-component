<script setup lang="ts">
import * as echarts from "echarts";
import { getOption } from "./echart.config";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];
let chartInstance: echarts.EChartsType | null = null;
const chartsRef = ref();
const dataList = ref(demoList);

const echartRender = () => {
  if (chartInstance) clearEchart();
  chartInstance = echarts.init(chartsRef.value);
  const option: echarts.EChartOption = getOption(dataList.value);
  chartInstance.setOption(option);
};
const clearEchart = () => {
  chartInstance && chartInstance.dispose();
  chartInstance = null;
};

watch(dataList.value, () => {
  echartRender();
});

onMounted(() => echartRender());
onUnmounted(() => chartInstance && chartInstance.dispose());

</script>

<template>
  <div ref="chartsRef" class="canvas" />
</template>

<style lang="scss" scoped>
.canvas{
  width: 100%;
  height: 350px;
}
</style>
