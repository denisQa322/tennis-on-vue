<template>
  <div class="number">
    <div class="number-icon">
      <img :src="iconUrl" alt="" />
    </div>
    <div class="number-text">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    iconUrl: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "Description",
    },
  },
})
export default class NumberComponent extends Vue {}
</script>

<style scoped lang="scss">
.number {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-icon {
    margin-right: 17px;
  }
  &:last-child {
    margin-right: 60px;
  }
  &-text {
    height: 40px;
    min-width: 130px;
    font-size: 14px;
    font-weight: 700;
    color: #333333;
  }
}
</style>
