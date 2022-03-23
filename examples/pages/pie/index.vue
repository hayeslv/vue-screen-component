
<template>
  <HayChart :option="option" :height="300" />
</template>

<script lang="ts">
import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import HayChart from "../../../packages/Chart/src/hayChart.vue";
// import HayChart from "../../components/Echart";
import { getOption5 as getOption } from "../../config/chart/pie";

export default defineComponent({
  components: { HayChart },
  setup() {
    const demoList = [
      { name: "数字城管", value: 14 },
      { name: "市民热线", value: 12 },
      { name: "巡查员上报", value: 9 },
      { name: "日常巡检", value: 22 },
      { name: "其他", value: 25 },
    ];
    const option: Ref = ref();
    // setTimeout(() => {
    //   option.value = getOption(demoList);
    // }, 2000);
    option.value = getOption(demoList);

    return { option };
  },
});
</script>

<style lang="scss" scoped>
</style>
