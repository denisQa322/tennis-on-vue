<template>
  <div id="app">
    <TopbarComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopbarComponent from "@/components/Topbar.vue";
import ContainerComponent from "@/components/ContainerComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
@Component({
  components: {
    TopbarComponent,
    ContainerComponent,
    FooterComponent,
  },
})
export default class extends Vue {}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: black;
}
</style>
