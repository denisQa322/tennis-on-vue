<template>
  <div class="item">
    <div class="item-border">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="item-title">{{ item.title }}</div>
    <div class="item-description">{{ item.description }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ISliderItem } from "../../types/sliderItem";

@Component({
  props: {
    item: {
      type: Object as () => ISliderItem,
      required: true,
    },
  },
})
export default class SliderItemComponent extends Vue {}
</script>

<style scoped lang="scss">
.item {
  text-align: center;
  padding-bottom: 170px;
  min-width: 200px;
  &-border {
    width: 196px;
    height: 240px;
    border: 1px solid #f7ece1;
    padding: 0 15px;
    margin-bottom: 25px;
    img {
      width: 100%;
    }
  }
  &-title {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  &-description {
    font-size: 14px;
  }
}
</style>
