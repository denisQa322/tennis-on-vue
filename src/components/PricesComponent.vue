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
          <img src="../assets/icons/arrow-left.svg" alt="" />
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
      text: "Зимний сезон 2021-2022",
      pricesUrl: "/price-list",
    },
    {
      text: "Абонементы",
      pricesUrl: "/price-list",
    },
    {
      text: "Скидки",
      pricesUrl: "/price-list",
    },
    {
      text: "Дополнительные услуги",
      pricesUrl: "/other",
    },
  ];
}
</script>

<style scoped lang="scss">
.prices {
  height: 330px;
  &-item {
    background-color: #8d86c9;
    padding: 18px 35px 18px 30px;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      font-size: 21px;
      font-weight: 600;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        border: none;
        background: none;
        cursor: pointer;
        img {
          width: 18px;
          height: 20px;
        }
      }
    }
  }
}
</style>
