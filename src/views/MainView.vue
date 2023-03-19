<template>
  <div class="home">
    <header class="home-header">
      <ContainerComponent>
        <h1 class="home-header__title">
          Петербургский <br />
          теннисный клуб <br />
          имени M.A. Пасечникова
        </h1>
      </ContainerComponent>
      <ContainerComponent :styleType="containerType.GRID">
        <ServiceComponent
          v-for="(service, index) in services"
          :service-block="service"
          :key="index"
        />
      </ContainerComponent>
    </header>
    <section class="courts-blocks">
      <ContainerComponent :styleType="containerType.GRID_COURTS">
        <CourtsInfoComponent
          v-for="(block, index) in courtBlocks"
          :title="block.title"
          :bgImage="block.bgImage"
          :key="index"
        />
      </ContainerComponent>
    </section>
    <section class="coaches-block">
      <ContainerComponent>
        <SliderListComponent :items="coaches" />
      </ContainerComponent>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/ContainerComponent.vue";
import ServiceComponent from "@/components/ServiceComponent.vue";
import { IServiceBlock } from "@/types/serviceBlock";
import { ContainerType } from "@/components/ContainerComponent.vue";
import CourtsInfoComponent from "@/components/CourtsInfoComponent.vue";
import SliderListComponent from "@/components/Slider/SliderList.vue";

@Component({
  components: {
    ContainerComponent,
    ServiceComponent,
    CourtsInfoComponent,
    SliderListComponent,
  },
})
export default class MainView extends Vue {
  containerType = ContainerType;
  services: IServiceBlock[] = [
    {
      title: "Услуги",
      description: "Аренда корта",
      link: "/",
    },
    {
      title: "Услуги",
      description: "Детский теннис",
      link: "/tennis",
    },
    {
      title: "Услуги",
      description: "Сборы команд",
      link: "/gallery",
    },
    {
      title: "Турниры",
      description: "Расписание",
      link: "/tournaments",
    },
  ];
  courtBlocks = [
    {
      title: "5 летних грунтовых кортов",
      bgImage: require("../assets/five-courts-img.jpg"),
    },
    {
      title: "Зал c покрытием “Искусственная трава”",
      bgImage: require("../assets/ball-img.jpg"),
    },
    {
      title: "Зал с покрытием “Хард”",
      bgImage: require("../assets/balls-img.jpg"),
    },
  ];
  coaches = [
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
  ];
}
</script>

<style scoped lang="scss">
.home-header {
  background-image: url("../assets/first-screen-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 290px;

  &__title {
    font-size: 48px;
    margin: auto;
    color: #fff;
    font-weight: 500;
    line-height: 140%;
  }
}
</style>
