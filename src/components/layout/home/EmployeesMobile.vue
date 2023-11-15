<template>
  <swiper
    :slides-per-view="1.4"
    :space-between="20"
    :centered-slides="true"
    :options="swiperOptions"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide>
      <router-link to="/o-nas">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="Pracownik 1" />
          <h3 class="sub-title">mgr Martyna Cieślicka</h3>
          <base-button type="primary">Zobacz więcej</base-button>
        </div>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/o-nas">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="Pracownik 1" />
          <h3 class="sub-title">Lorem Ipsum</h3>
          <base-button type="primary">Zobacz więcej</base-button>
        </div>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/o-nas">
        <div class="img-hold">
          <img
            src="../../../assets/images/persons/home-employee-1.jpg"
            alt="Pracownik 1" />
          <h3 class="sub-title">Lorem Ipsum</h3>
          <base-button type="primary">Zobacz więcej</base-button>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
}
.employees {
  padding: 60px 0;
  background-color: #e4d4c7;
  padding: 60px 0;

  button {
    width: 100%;
  }

  .img-hold {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
      font-size: 1.4rem;
      letter-spacing: 1px;
      text-align: center;
      font-weight: 400;
    }
  }
}

@media screen and (min-width: 767px) {
  .employees {

    button {
      display: none;
    }

    .img-hold {
      display: block;
      overflow: hidden;
      height: 300px;
      width: 200px;
      padding: 0;
      cursor: pointer;

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
