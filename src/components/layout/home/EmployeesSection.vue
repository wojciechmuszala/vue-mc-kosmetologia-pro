<template>
  <section class="employees">
    <h3 class="title">Specjaliści</h3>
    <div class="wrapper">
      <router-link to="/o-nas">
        <div class="img-hold">
          <img src="../../../assets/images/persons/home-employee-1.jpg" alt="" />
        </div>
      </router-link>
      <div class="img-hold">
        <img src="../../../assets/images/persons/home-employee-1.jpg" alt="" />
      </div>
      <div class="img-hold">
        <img src="../../../assets/images/persons/home-employee-1.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.employees {
  padding: 60px 0;
  background-color: #e4d4c7;
  padding: 60px 0;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 60px;
  }

  .title {
    width: max-content;
    margin-inline: auto;
    text-align: center;
    margin-bottom: 60px;
  }

  .img-hold {
    width: 300px;
    height: 300px;
    max-height: 300px;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;
    cursor: pointer;

    &::after {
      display: block;
      content: "mgr Martyna Cieślicka";
      color: white;
      font-size: 1.4rem;
      letter-spacing: 1px;
      padding-block: 0;
      transition: all 0.3s ease;
      opacity: 0;
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding-block: 12px;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    &:hover {
      letter-spacing: 3.5px;
      box-shadow: 0px 0px 15px -4px rgba(66, 68, 90, 0.5);
      transform: scale(1.04);

      &::after {
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
</style>
