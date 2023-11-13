<template>
  <the-header></the-header>
  <main class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  methods: {
    handleScreenResize() {
      this.$store.dispatch("checkIsMobile");
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleScreenResize);
    this.handleScreenResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleScreenResize);
  },
};
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
/* .fade-enter-to,
.fade-leave-from {
  opacity: 1;
} */

main {
  margin-top: 10px;
}

@media screen and (min-width: 767px) {
  main {
    margin-top: 30px;
  }
}
</style>
