<template>
  <the-header></the-header>
  <main class="main-container">
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">

</style>
