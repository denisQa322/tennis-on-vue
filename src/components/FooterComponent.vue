<template>
  <div class="footer">
    <ContainerComponent :styleType="containerType.FLEX_JUSTIFY_BETWEEN">
      <div class="footer-copyright">2022 © Все права защищены.</div>
      <MenuComponent text-color="#000" />
      <div class="footer-social">
        <a href="https://youtube.com">
          <YouTubeLogoComponent fill="#8D86C9" />
        </a>
        <a href="https://vk.com">
          <VkLogoComponent fill="#8D86C9" />
        </a>
        <a href="https://telegram.org">
          <TelegramLogoComponent fill="#8D86C9" />
        </a>
      </div>
    </ContainerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "./ContainerComponent.vue";
import MenuComponent from "./MenuComponent.vue";
import { ContainerType } from "@/components/ContainerComponent.vue";
import YouTubeLogoComponent from "@/assets/ui/YouTubeLogo.vue";
import VkLogoComponent from "@/assets/ui/VkLogo.vue";
import TelegramLogoComponent from "@/assets/ui/TelegramLogo.vue";
@Component({
  components: {
    ContainerComponent,
    MenuComponent,
    YouTubeLogoComponent,
    VkLogoComponent,
    TelegramLogoComponent,
  },
})
export default class FooterComponent extends Vue {
  containerType = ContainerType;
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #f7ece1;
  padding: 38px 0;
  &-copyright {
    color: #333333;
    opacity: 0.3;
  }
  &-social {
    display: flex;
    gap: 25px;
    align-items: center;
  }
}
</style>
