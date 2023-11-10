<template>
  <section class="logo">
    <img
      class="background-img"
      src="../../../assets/images/home-bg-1.jpg"
      alt="Tło - beżowy materiał" />
    <img
      class="logo-img"
      src="../../../assets/images/home-logo.png"
      alt="Logo - MC Kosmetologia profesjonalna" />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  position: relative;
  max-height: 500px;
  overflow: hidden;
  margin-top: 10px;

  .background-img {
    object-fit: cover;
    object-position: 0% 30%;
    max-height: 500px;
    opacity: 0.8;
  }

  .logo-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* max-width: 200px; */
    width: 60vw;
    max-width: 200px;
    filter: invert(1);
  }
}

@media screen and (min-width: 767px) {
  .logo {
  margin-top: 30px;
   

    .logo-img {
     
    }
  }
}
</style>
