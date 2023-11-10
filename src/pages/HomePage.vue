<template>
  <div>
    <logo-section></logo-section>
    <keynote-section></keynote-section>
    <employees-section></employees-section>
  </div>
</template>

<script>
import LogoSection from "../components/layout/home/LogoSection.vue";
import KeynoteSection from "../components/layout/home/KeynoteSection.vue";
import EmployeesSection from "../components/layout/home/EmployeesSection.vue";

export default {
  components: {
    LogoSection,
    KeynoteSection,
    EmployeesSection,
  },
};
</script>

<style lang="scss" scoped></style>
