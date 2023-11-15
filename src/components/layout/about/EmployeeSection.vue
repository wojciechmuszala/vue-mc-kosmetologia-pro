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
  display: flex;
  flex-direction: column;
  margin-block: 60px;
  /* background-color: #dbc7ba; */
  border: 2px solid $color-nude;
  padding: 20px;

  .img-hold {
    overflow: hidden;
    height: 300px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid $color-nude;

    &::v-deep img {
      object-fit: cover;
      object-position: 50% 45%;
      max-height: 100%;
    }
  }

  .text-hold {
    background-color: $color-nude;
    padding: 20px;

    &::v-deep h2 {
      text-transform: uppercase;
      font-weight: 100;
      letter-spacing: 3px;
      margin-bottom: 10px

    }
  }
}

@media screen and (min-width: 767px) {
  .employee {
    flex-direction: row;
    &.img-left {
      justify-content: flex-end;
    }

    &.img-right {
      justify-content: flex-start;
    }
  }
}
</style>
