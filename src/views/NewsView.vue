<template>
  <div>
    <header class="news-header">
      <h1 class="news-header__title">Новости</h1>
    </header>
    <div class="news-card">
      <ContainerComponent :styleType="containerType.GRID_NEWS">
        <NewsCardComponent
          v-for="(photo, index) in photos"
          :photo="photo"
          :key="index"
        />
      </ContainerComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/ContainerComponent.vue";
import { ContainerType } from "@/components/ContainerComponent.vue";
import { getPhotos } from "@/api/api";
import { IPhoto } from "@/types/photos";
import NewsCardComponent from "@/components/NewsCardsComponent.vue";

@Component({
  components: {
    ContainerComponent,
    NewsCardComponent,
  },
})
export default class NewsView extends Vue {
  containerType = ContainerType;
  photos: IPhoto[] = [];
  async mounted() {
    try {
      const response = await getPhotos();
      const data = response.data;

      if (data.length) {
        this.photos = data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped lang="scss">
.news-header {
  background-image: url("../assets/images/news-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 263px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__title {
    margin-top: 45px;
    font-size: 48px;
    color: #ffffff;
    font-weight: 700;
  }
}
.news-card {
  padding-top: 80px;
  padding-bottom: 120px;
}
</style>
