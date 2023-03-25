<template>
  <div class="board">
    <div class="right-info" :style="{ '--bgImage': 'url(' + imageUrl + ')' }">
      <div class="right-info-title">{{ title }}</div>
      <template>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Title",
    },
  },
})
export default class BoardComponent extends Vue {}
</script>

<style scoped lang="scss">
.board {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 120px;
  .left-image {
    position: absolute;
    width: 526px;
    height: 514px;
  }
  .right-info {
    padding: 70px 60px 90px 146px;
    background-color: #f7ece1;
    position: relative;
    height: 654px;
    max-width: 856px;
    min-width: 636px;
    &:before {
      content: "";
      display: block;
      background-image: var(--bgImage);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      width: 526px;
      height: 514px;
      left: -440px;
    }
    &-title {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 40px;
    }
  }
}
</style>
