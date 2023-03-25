<template>
  <div class="about">
    <header class="about-header">
      <h1 class="about-header__title">О клубе</h1>
    </header>
    <section class="about-slider">
      <ContainerComponent>
        <SliderListComponent
          title="Фото кортов"
          v-for="(photo, index) in cortsPhotos"
          :key="index"
        >
          <div class="about-item">
            <div
              class="about-item-image"
              :style="{
                backgroundImage: 'url(' + photo.backgroundImageUrl + ')',
              }"
            >
              <router-link tag="a" :to="photo.routeUrl">
                {{ photo.routeTitle }}
              </router-link>
            </div>
          </div>
          <div class="about-item">
            <div
              class="about-item-image"
              :style="{
                backgroundImage: 'url(' + photo.backgroundImageUrl + ')',
              }"
            >
              <router-link tag="a" :to="photo.routeUrl">
                {{ photo.routeTitle }}
              </router-link>
            </div>
          </div>
          <div class="about-item">
            <div
              class="about-item-image"
              :style="{
                backgroundImage: 'url(' + photo.backgroundImageUrl + ')',
              }"
            >
              <router-link tag="a" :to="photo.routeUrl">
                {{ photo.routeTitle }}
              </router-link>
            </div>
          </div>
        </SliderListComponent>
      </ContainerComponent>
    </section>
    <section class="about-board">
      <ContainerComponent>
        <TitleComponent title="О клубе" />
        <BoardComponent
          title="Петербургский теннисный клуб имени М.А. Пасечникова"
          :imageUrl="require('../assets/images/about-board-img.jpg')"
        >
          <p class="about-board-text">
            Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur
            scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices
            risus viverra. Purus volutpat phasellus viverra vestibulum quis.
            Gravida pretium odio enim ut id tempus semper. Urna cum at in
            iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi
            faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis
            dolor id. Maecenas vivamus tristique donec neque id convallis.
            Feugiat fusce at est at. <br />
            <br />
            Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere
            sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper
            pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut
            lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius
            in eu venenatis.<br />
            <br />
            Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget
            urna magna interdum feugiat ut. In purus rhoncus egestas euismod
            morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis.
            Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum
            suscipit pellentesque risus non.
          </p>
          <div class="numbers">
            <NumberComponent
              v-for="(number, index) in numbers"
              :iconUrl="number.iconUrl"
              :description="number.description"
              :key="index"
            />
          </div>
        </BoardComponent>
      </ContainerComponent>
    </section>
    <section class="about-rules">
      <ContainerComponent>
        <TitleComponent title="Правила" />
      </ContainerComponent>
      <ContainerComponent :styleType="containerType.FLEX">
        <div class="about-sidebar">
          <AboutRuleComponent
            v-for="(rule, index) in rules"
            :key="index"
            :rule="rule"
            :numberOfRule="index + 1"
          />
        </div>
        <div class="about-sidetext">
          <router-view />
        </div>
      </ContainerComponent>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SliderListComponent from "@/components/Slider/SliderList.vue";
import ContainerComponent from "@/components/ContainerComponent.vue";
import BoardComponent from "@/components/BoardComponent.vue";
import NumberComponent from "@/components/NumberComponent.vue";
import TitleComponent from "@/components/Title.vue";
import { ContainerType } from "@/components/ContainerComponent.vue";
import AboutRuleComponent from "@/components/About/AboutRule.vue";
import { IRule } from "@/types/rule";
@Component({
  components: {
    SliderListComponent,
    ContainerComponent,
    BoardComponent,
    NumberComponent,
    TitleComponent,
    AboutRuleComponent,
  },
})
export default class AboutView extends Vue {
  containerType = ContainerType;
  cortsPhotos = [
    {
      backgroundImageUrl: require("@/assets/images/about-slider-img.jpg"),
      routeUrl: "/",
      routeTitle: "Летний корт",
    },
  ];
  numbers = [
    {
      iconUrl: require("@/assets/icons/seven.svg"),
      description: "Летних грунтовых кортов",
    },
    {
      iconUrl: require("@/assets/icons/four.svg"),
      description: "Зимних корта с покрытием «искусственная трава»",
    },
    {
      iconUrl: require("@/assets/icons/three.svg"),
      description: "Зимних корта с покрытием «hard»",
    },
  ];
  rules: IRule[] = [
    {
      title: "Общие положения",
      link: "/about/general",
    },
    {
      title: "Основные определения",
      link: "/about/definitions",
    },
    {
      title: "Порядок предоставления игрового времени на кортах",
      link: "/about/schedule",
    },
    {
      title: "Оплата услуг",
      link: "/about/pay",
    },
    {
      title: "Правила поведения на территории и кортах",
      link: "/about/rules-on-place",
    },
    {
      title: "Прочие положения",
      link: "/about/other",
    },
  ];
}
</script>

<style scoped lang="scss">
.about {
  &-header {
    background-image: url("../assets/images/about-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 263px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    &__title {
      margin-top: 45px;
      font-size: 48px;
      color: #ffffff;
      font-weight: 700;
    }
  }
  &-slider {
    margin-bottom: 175px;
  }
}
.about-item {
  border: 1px solid #f7ece1;
  padding: 25px 20px;
  min-width: 100%;
  height: 500px;
  position: relative;
  &-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 1260px;
    height: 450px;
  }
  a {
    background-color: #8d86c9;
    padding: 10px 20px;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    left: 70px;
    bottom: 65px;
  }
}
.about-board {
  &-text {
    margin-bottom: 58px;
  }
}
.numbers {
  display: flex;
  justify-content: space-between;
  gap: 36px;
  min-width: 700px;
}
</style>
