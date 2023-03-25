<template>
  <ContainerComponent>
    <div class="card">
      <div class="news-cards">
        <div class="card-item">
          <img class="card-item__image" :src="photo.url" alt="" />
        </div>
        <h4 class="card-item__title">{{ photo.title }}</h4>
        <button class="btn-more">Подробнее</button>
      </div>
    </div>
  </ContainerComponent>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "./ContainerComponent.vue";
import { IPhoto } from "@/types/photos";

@Component({
  components: {
    ContainerComponent,
  },
  props: {
    photo: {
      type: Object as () => IPhoto,
      default: {},
    },
  },
})
export default class NewsCardComponent extends Vue {}
</script>

<style scoped lang="scss">
.news-cards {
  border: 1px solid #f7ece1;
  width: 416px;
  height: 512px;
  padding: 30px 40px;
  .card-item {
    &__image {
      width: 336px;
      height: 240px;
      margin-bottom: 60px;
    }
    &__title {
      font-size: 21px;
      line-height: 29px;
      font-weight: 600;
      color: #333333;
      margin-bottom: 20px;
    }
  }
  .btn-more {
    padding: 10px 20px;
    background-color: #8d86c9;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    cursor: pointer;
  }
}
</style>
