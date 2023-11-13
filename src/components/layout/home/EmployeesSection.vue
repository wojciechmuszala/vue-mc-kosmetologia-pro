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
  background-color: #e4d4c7;
  padding: 60px 0;

  .title {
    width: max-content;
    margin-inline: auto;
    text-align: center;
    margin-bottom: 60px;
  }
}

@media screen and (min-width: 767px) {
  .employees {
    .wrapper {
      flex-direction: row;
    }

    button {
      display: none;
    }

    .img-hold {
      display: block;
      overflow: hidden;
      height: 300px;
      width: 300px;
      padding: 0;
      cursor: pointer;

      .sub-title {
        transition: all 0.3s ease;
        opacity: 0;
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        padding-block: 12px;
        color: white;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
      }

      &:hover {
        letter-spacing: 3.5px;
        box-shadow: 0px 0px 15px -4px rgba(66, 68, 90, 0.5);
        transform: scale(1.04);

        .sub-title {
          opacity: 1;
        }
      }

      &:active {
        box-shadow: 0px 0px 15px -4px rgba(66, 68, 90, 1);
      }

      img {
        object-fit: cover;
        object-position: 0% 50%;
        width: 100%;
        height: 100%;
        max-height: 100%;
        opacity: 0.8;
      }
    }
  }
}
</style>
