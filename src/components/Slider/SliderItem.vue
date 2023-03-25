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

<style scoped lang="scss"></style>
