<template>
  <div class="title-wrapper">
    <h3 class="title">{{ title }}</h3>
    <div class="title-controls" v-if="showControls">
      <button @click="arrowLeftCLickHandler()">
        <img src="../assets/arrow-left.svg" alt="" />
      </button>
      <button @click="arrowRightCLickHandler()">
        <img src="../assets/arrow-right.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: {
      type: String,
      required: true,
    },
    showControls: {
      type: Boolean,
      required: false,
    },
  },
})
export default class TitleComponent extends Vue {
  arrowLeftCLickHandler() {
    this.$emit("arrowLeftCLickHandler");
  }
  arrowRightCLickHandler() {
    this.$emit("arrowRightCLickHandler");
  }
}
</script>

<style scoped lang="scss">
.title-wrapper {
  margin-bottom: 75px;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 36px;
    font-weight: 700;
  }
  .title-controls {
    button {
      cursor: pointer;
      background-color: #8d86c9;
      border: none;
      width: 45px;
      height: 45px;
      margin-left: 15px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
