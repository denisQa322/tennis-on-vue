<template>
  <div class="courts-block">
    <div
      class="courts-block__element"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
      <h3 class="courts-block__title">{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: String,
    bgImage: String,
  },
})
export default class CourtsInfoComponent extends Vue {}
</script>

<style scoped class="scss">
template {
  padding-top: 100px;
}
.courts-block {
  height: 500px;
  width: 416px;
  border: 1px solid #f7ece1;
  padding: 25px 20px;
}
.courts-block__element {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 334px 0 40px 0;
  color: #fff;
  font-size: 27px;
  align-items: center;
}
</style>
