<template>
  <div class="service-block">
    <h4 class="service-block__title">{{ serviceBlock.title }}</h4>
    <div class="service-block__subtitle">
      <h4 class="service-block__description">{{ serviceBlock.description }}</h4>
      <router-link :to="serviceBlock.link"
        ><img src="../assets/more-icon.svg" alt=""
      /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IServiceBlock } from "../types/serviceBlock";

@Component({
  props: {
    serviceBlock: Object as () => IServiceBlock,
  },
})
export default class ServiceComponent extends Vue {}
</script>

<style scoped lang="scss">
.service-block {
  background-color: #8d86c9;
  padding: 35px 40px 40px 35px;
  color: white;
  cursor: pointer;
  &__title {
    margin-bottom: 20px;
  }
  &__subtitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
