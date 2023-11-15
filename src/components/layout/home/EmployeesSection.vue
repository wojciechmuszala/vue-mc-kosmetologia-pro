<template>
  <section class="employees">
    <h3 class="title">Specjaliści</h3>
    <employees-mobile v-if="isMobile"></employees-mobile>
    <employees-desktop v-else></employees-desktop>
  </section>
</template>

<script>
import EmployeesMobile from "./EmployeesMobile.vue";
import EmployeesDesktop from "./EmployeesDesktop.vue";

export default {
  components: {
    EmployeesMobile,
    EmployeesDesktop,
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<style lang="scss" scoped>
.employees {
  padding: 60px 0;
  /* background-color: #e4d4c7; */
  background-color: $color-nude;
  padding: 60px 0;

  .title {
    width: max-content;
    margin-inline: auto;
    text-align: center;
    margin-bottom: 60px;
    font-size: clamp(2.4rem, 7vw, 4.8rem);
    font-weight: 200;
  }
}

@media screen and (min-width: 767px) {
  .employees {
    .title {
      width: max-content;
      margin-inline: auto 60px;
      text-align: center;
      margin-bottom: 60px;
      font-size: 5.8rem;
      font-weight: 100;
    }
  }
}
</style>
