<template>
  <div class="slider-wrapper">
    <TitleComponent
      title="Тренерский состав"
      :showControls="true"
      @arrowLeftCLickHandler="clickOnLeft()"
      @arrowRightClickHandler="clickOnright()"
    />
    <div class="slider-items">
      <SliderItemComponent
        v-for="(item, index) in items"
        :item="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SliderItemComponent from "./SliderItem.vue";
import { ISliderItem } from "../../types/sliderItem";
import TitleComponent from "../Title.vue";
@Component({
  components: {
    SliderItemComponent,
    TitleComponent,
  },
  props: {
    items: {
      type: Array as () => ISliderItem[],
      required: true,
      default: [],
    },
  },
})
export default class SliderListComponent extends Vue {
  // clickOnLeft() {}
  // clickOnright() {}
}
</script>

<style scoped lang="scss">
.slider-items {
  display: flex;
  overflow: hidden;
  gap: 24px;
}
</style>
