<template>
  <hr />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LineComponent extends Vue {}
</script>

<style scoped lang="scss">
hr {
  height: 2px;
  background-color: #fff;
  opacity: 0.3;
}
</style>
