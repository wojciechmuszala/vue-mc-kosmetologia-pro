<template>
  <section class="employees">
    <h3 class="title">Specjaliści</h3>
    <div class="wrapper">
      <router-link to="/o-nas">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="Pracownik 1" />
          <h3 class="sub-title">mgr Martyna Cieślicka</h3>
          <base-button type="primary">Zobacz więcej</base-button>
        </div>
      </router-link>
      <router-link to="/o-nas">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="Pracownik 1" />
          <h3 class="sub-title">Lorem Ipsum</h3>
          <base-button type="primary">Zobacz więcej</base-button>
        </div>
      </router-link>
      <router-link to="/o-nas">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="Pracownik 1" />
          <h3 class="sub-title">Lorem Ipsum</h3>
          <base-button type="primary">Zobacz więcej</base-button>
        </div>
      </router-link>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
  }

  button {
    width: 100%;
  }

  .title {
    width: max-content;
    margin-inline: auto;
    text-align: center;
    margin-bottom: 60px;
  }

  .img-hold {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
    padding: 0 20px 20px;
    background-color: rgba($color: white, $alpha: 0.3);
    transition: all 0.3s ease;
    cursor: pointer;

    img {
      object-fit: cover;
      object-position: 0% 50%;
      width: 70vw;
      max-width: 300px;
      max-height: 300px;
      opacity: 0.8;
    }

    .sub-title {
      width: 100%;
      padding-block: 12px;
      color: black;
      font-size: 1.4rem;
      letter-spacing: 1px;
      text-align: center;
      font-weight: 400;
    }
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
