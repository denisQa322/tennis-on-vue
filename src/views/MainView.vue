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
    <section class="board-block">
      <ContainerComponent>
        <BoardComponent
          title="Спортивный клуб"
          :imageUrl="require('../assets/images/home-board-img.jpg')"
        >
          <p class="board-first-text">
            Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis.
            Ultricies erat pretium risus quam tincidunt non viverra porttitor.
            Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet
            aliquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit
            netus aenean nisl. Donec sit pellentesque enim, vestibulum.
          </p>
          <p class="board-second-text">
            Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
          </p>
          <h4 class="board-list-header">Ornare orci ut dictum nulla fames.</h4>
          <ul class="board-list">
            <li>
              Euismod diam, vel venenatis bibendum sodales sem hendrerit
              vulputate sagittis.
            </li>
            <li>
              Nisl senectus sed malesuada donec. Interdum malesuada bibendum
              imperdiet elementum auctor vitae in.
            </li>
            <li>
              Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin
              urna, sagittis.
            </li>
            <li>
              Scelerisque urna senectus commodo, nam. Donec nibh tempus
              imperdiet nisi, tincidunt mus egestas nisl nullam.
            </li>
          </ul>
        </BoardComponent>
      </ContainerComponent>
    </section>
    <section class="coaches-block">
      <ContainerComponent>
        <SliderListComponent title="Тренерский состав" :itemsInSlider="6">
          <div v-for="(item, index) in coaches" :key="index" class="coaches">
            <div class="coach-item">
              <div class="coach-item-border">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="coach-item-title">{{ item.title }}</div>
              <div class="coach-item-description">{{ item.description }}</div>
            </div>
          </div>
        </SliderListComponent>
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
import BoardComponent from "@/components/BoardComponent.vue";
@Component({
  components: {
    ContainerComponent,
    ServiceComponent,
    CourtsInfoComponent,
    SliderListComponent,
    BoardComponent,
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
      title: "Носоти",
      description: "Последние овости",
      link: "/news",
    },
  ];
  courtBlocks = [
    {
      title: "5 летних грунтовых кортов",
      bgImage: require("../assets/images/five-courts-img.jpg"),
    },
    {
      title: "Зал c покрытием “Искусственная трава”",
      bgImage: require("../assets/images/ball-img.jpg"),
    },
    {
      title: "Зал с покрытием “Хард”",
      bgImage: require("../assets/images/balls-img.jpg"),
    },
  ];
  coaches = [
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
    {
      image: require("../assets/images/coach-one.jpg"),
      title: "Pulvinar aliquam",
      description:
        " Arcu elit massa amet turpis vel consequat pellentesque sit. ",
    },
  ];
}
</script>

<style scoped lang="scss">
.home-header {
  background-image: url("../assets/images/first-screen-bg.jpg");
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
.coach-item {
  text-align: center;
  padding-bottom: 170px;
  min-width: 196px;
  &-border {
    width: 196px;
    height: 240px;
    border: 1px solid #f7ece1;
    padding: 0 15px;
    margin-bottom: 25px;
    img {
      width: 100%;
    }
  }
  &-title {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  &-description {
    font-size: 14px;
  }
}
.container {
  .board {
    align-items: center;
    .right-info {
      max-width: 636px;
    }
  }
}
.board {
  display: flex;
  margin-left: 550px;
  width: 636px;
  margin-bottom: 120px;
  &-first-text {
    margin-bottom: 24px;
    font-size: 14px;
  }
  &-second-text {
    margin-bottom: 35px;
    font-size: 14px;
  }
  &-list-header {
    font-size: 21px;
    margin-bottom: 25px;
  }
  &-list {
    margin-left: 31px;
    li {
      margin-bottom: 24px;
      position: relative;
      font-size: 14px;
      &:before {
        display: block;
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #8d86c9;
        left: -23px;
        top: 7px;
      }
    }
  }
}
</style>
