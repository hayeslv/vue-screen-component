<template>
  <button @click="add">
    add
  </button>

  {{ count }}
</template>

<script setup lang="ts">

const count = ref(0);
function add() {
  count.value++;
}
console.log(add);

</script>

<style lang="scss" scoped>
</style>
