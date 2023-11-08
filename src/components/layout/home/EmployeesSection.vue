<template>
  <section class="employees">
    <h3 class="title">Specjaliści</h3>
    <div class="container">
      <div class="wrapper">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="" />
        </div>
        <base-button type="primary">Zobacz więcej</base-button>
      </div>
      <div class="wrapper">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="" />
        </div>
        <base-button type="primary">Zobacz więcej</base-button>
      </div>
      <div class="wrapper">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="" />
        </div>
        <base-button type="primary">Zobacz więcej</base-button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.employees {
  padding: 60px 0;
  background-color: #dac6bb;
  padding: 60px 0;

  .container {
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

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;

    .img-hold {
      width: 300px;
      height: 300px;
      max-height: 300px;
      overflow: hidden;

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
