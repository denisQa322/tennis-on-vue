<template>
  <div class="prices">
    <div
      class="prices-item"
      v-for="(price, index) in prices"
      :key="index"
      :price="price"
    >
      <router-link tag="a" :to="price.pricesUrl">
        <div class="prices-item-text">
          {{ price.text }}
        </div>
        <button class="price-item-arrow">
          {{ price.pricesArrow }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class PricesComponent extends Vue {
  prices = [
    {
      text: "Зимний сезон",
      pricesUrl: "/price-list",
      pricesArrow: require("../assets/icons/arrow-left.svg"),
    },
    {
      text: "Абонементы",
      pricesUrl: "/price-list",
      pricesArrow: require("../assets/icons/arrow-left.svg"),
    },
    {
      text: "Скидки",
      pricesUrl: "/price-list",
      pricesArrow: require("../assets/icons/arrow-left.svg"),
    },
    {
      text: "Дополнительные услуги",
      pricesUrl: "/price-list",
      pricesArrow: require("../assets/icons/arrow-left.svg"),
    },
  ];
}
</script>

<style scoped lang="scss"></style>
