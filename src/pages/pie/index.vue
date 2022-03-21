<script setup lang="ts">
import { getOption1 as getOption } from "~/config/chart/pie";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];

const option = ref(getOption(demoList));

</script>

<template>
  <Echart :option="option" :height="300" />
</template>

<style lang="scss" scoped>
</style>
