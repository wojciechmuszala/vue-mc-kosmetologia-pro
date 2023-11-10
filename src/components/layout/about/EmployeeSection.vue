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
  background-color: #dbc7ba;
  padding: 20px;
  
  .wrapper {
    padding: 0 20px 20px;
    background-color: rgba($color: white, $alpha: 0.3);
    
  }

  .img-hold {
    overflow: hidden;
    height: 300px;
    margin-bottom: 20px;

    &::v-deep img {
      object-fit: cover;
      object-position: 50% 45%;
      max-height: 100%;
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
