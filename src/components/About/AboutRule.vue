<template>
  <div class="rule">
    <router-link tag="a" :to="rule.link">
      {{ numberOfRule }}. {{ rule.title }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IRule } from "@/types/rule";
@Component({
  props: {
    rule: Object as () => IRule,
    numberOfRule: Number,
  },
})
export default class AboutRuleComponent extends Vue {}
</script>

<style scoped lang="scss">
.rule {
  width: 366px;
  font-size: 21px;
  margin-bottom: 40px;
  line-height: 29px;
  margin-right: 74px;
  font-weight: normal;
  font-weight: 600;
  a:focus {
    margin-left: 30px;
    color: #8d86c9;
  }
}
</style>
