<template>
  <div id="Topbar">
    <ContainerComponent>
      <div class="topbar">
        <div class="topbar__logo">
          <router-link to="/">
            <img src="../assets/icons/tennis-logo.svg" alt="" />
          </router-link>
        </div>
        <MenuComponent />
        <div class="topbar-social">
          <a href="https://youtube.com">
            <YouTubeLogoComponent />
          </a>
          <a href="https://vk.com">
            <VkLogoComponent />
          </a>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "./ContainerComponent.vue";
import MenuComponent from "./MenuComponent.vue";
import YouTubeLogoComponent from "@/assets/ui/YouTubeLogo.vue";
import VkLogoComponent from "@/assets/ui/VkLogo.vue";

@Component({
  components: {
    ContainerComponent,
    MenuComponent,
    YouTubeLogoComponent,
    VkLogoComponent,
  },
})
export default class TopbarComponent extends Vue {}
</script>

<style scoped lang="scss">
#Topbar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
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
