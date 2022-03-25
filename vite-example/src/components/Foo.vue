<script setup lang="ts">
import { HayChart } from "hay-ui";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];
</script>

<template>
  <hay-chart
    :width="450"
    :height="300"
    :type="'pie_ring_shadow'"
    :data-list="demoList"
  />
</template>

<style lang="scss" scoped>
</style>
