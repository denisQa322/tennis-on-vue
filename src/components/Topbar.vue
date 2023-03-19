<template>
  <div id="Topbar">
    <ContainerComponent>
      <div class="topbar">
        <div class="topbar__logo">
          <router-link to="/">
            <img src="../assets/tennis-logo.svg" alt="" />
          </router-link>
        </div>
        <div class="topbar-menu">
          <ul class="topbar-menu__list">
            <router-link tag="li" to="/">Главная</router-link>
            <router-link tag="li" to="/about">О клубе</router-link>
            <router-link tag="li" to="/tournaments">Турниры</router-link>
            <router-link tag="li" to="/services">Услуги</router-link>
            <router-link tag="li" to="/tennis">Детский теннис</router-link>
            <router-link tag="li" to="/gallery">Галерея</router-link>
            <router-link tag="li" to="/price-list">Цены</router-link>
            <router-link tag="li" to="/contacts">Контакты</router-link>
          </ul>
        </div>
        <div class="topbar-social">
          <a href="https://youtube.com">
            <img src="../assets/youtube-icon.svg" alt="" />
          </a>
          <a href="https://vk.com">
            <img src="../assets/vk-icon.svg" alt="" />
          </a>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "./ContainerComponent.vue";

@Component({
  components: {
    ContainerComponent,
  },
})
export default class TopbarComponent extends Vue {}
</script>

<style scoped lang="scss">
#Topbar {
  border-bottom: 1px solid #ccc;
  position: absolute;
  width: 100%;
}
.topbar {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &-menu {
    color: #fff;
    &__list {
      display: flex;
      align-items: center;
      gap: 40px;
      cursor: pointer;
    }
  }
  &-social {
    display: flex;
    gap: 30px;
    align-items: center;
  }
}
</style>
