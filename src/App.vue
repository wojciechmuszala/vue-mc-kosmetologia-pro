<template>
  <the-header></the-header>
  <main class="container">
    <router-view></router-view>
  </main>
  <the-footer></the-footer>

</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue"

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  },
};
</script>

<style lang="scss">

</style>
