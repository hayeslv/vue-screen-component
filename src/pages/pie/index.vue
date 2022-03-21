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
const demoList1 = [
  { name: "数字城管2", value: 20 },
  { name: "市民热线2", value: 12 },
  { name: "巡查员上报2", value: 19 },
  { name: "日常巡检2", value: 15 },
  { name: "其他2", value: 10 },
];

const option = ref({});

option.value = getOption(demoList);

setTimeout(() => {
  option.value = getOption(demoList1);
}, 2000);

</script>

<template>
  <Echart :option="option" :height="300" />
</template>

<style lang="scss" scoped>
</style>
