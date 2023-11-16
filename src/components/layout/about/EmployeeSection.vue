<template>
  <section :class="['employee', type]">
    <div class="wrapper">
      <div class="img-hold">
        <slot name="image"></slot>
      </div>
      <div class="text-hold">
        <slot name="text"> </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style lang="scss" scoped>
.employee {
  margin-block: 60px;
  /* background-color: #dbc7ba; */
  border: 2px solid $color-nude;
  padding: 20px;

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .img-hold {
    overflow: hidden;
    height: 300px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid $color-nude;

    & :deep(img) {
      object-fit: cover;
      object-position: 50% 45%;
      max-height: 100%;
    }
  }

  .text-hold {
    background-color: $color-nude;
    padding: 20px;

    & :deep(h2) {
      text-transform: uppercase;
      font-weight: 100;
      letter-spacing: 3px;
      margin-bottom: 20px;
    }
  }
}

@media screen and (min-width: 767px) {
  .employee {
    flex-direction: row;
    border: none;
    position: relative;
    padding-top: 0;
    margin-block: 100px;


    .wrapper {
      flex-direction: row;
      gap: 100px;
    }

    .img-hold {
      border: none;
      width: 50%;
      height: 100%;
      padding: 0;
    }

    .text-hold {
      font-size: 20px;
      background-color: transparent;
      width: 50%;
      margin-top: 250px;

      & :deep(h2) {
        position: absolute;
        top: 0;
        left: 11%;
        margin-bottom: 10px;
        font-family: "Beautifully Delicious Script", cursive;
        font-size: 160px;
        text-transform: none;
        font-weight: 100;
        letter-spacing: 3px;
      }

      & :deep(h3) {
        margin-bottom: 20px;
        font-size: 40px;
      }

      & :deep(h4) {
        margin-bottom: 20px;
        font-size: 30px;
        margin-bottom: 50px;
      }
    }

    &.img-left {
      .wrapper {
        flex-direction: row-reverse;
        justify-content: flex-end;

        .text-hold {
          text-align: right;

          & :deep(h2) {
            right: clamp(0%, 8vw, 30%);
          }
        }
      }
    }

    &.img-right {
      justify-content: flex-start;
    }
  }
}
</style>
