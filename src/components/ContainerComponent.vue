<template>
  <div class="container" :class="styleType">
    <template>
      <slot> </slot>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export enum ContainerType {
  GRID = "grid",
  GRID_COURTS = "grid-courts",
  GRID_NEWS = "grid-news",
  FLEX = "flex",
  FLEX_JUSTIFY_BETWEEN = "flex-justify-between",
}
@Component({
  props: {
    styleType: String as () => ContainerType,
  },
})
export default class ContainerComponent extends Vue {
  styleType: string | undefined;
}
</script>

<style scoped lang="scss">
.container {
  width: 1300px;
  margin: 0 auto;
}
.container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  grid-gap: 12px;
}
.container.grid-courts {
  padding-top: 150px;
  padding-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  grid-gap: 24px;
}
.container.flex {
  display: flex;
}
.container.flex-justify-between {
  display: flex;
  justify-content: space-between;
}
.container.grid-news {
  display: grid;
  grid-template-columns: repeat(3, 416px);
  grid-gap: 24px;
}
</style>
