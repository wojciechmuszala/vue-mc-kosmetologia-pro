<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style lang="scss" scoped>
/* button {
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  border: 1px solid transparent;
  font-family: inherit;

  &.primary {
    background-color: transparent;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    border-color: black;
    box-shadow: 0px 0px 0px 0px transparent;

    &:hover {
      letter-spacing: 3.5px;
      background: rgba(black, 0.03);
    }
    
    &:active {
      box-shadow: 0px 0px 9px -4px rgba(66, 68, 90, 1);
    }
  }
} */
button {
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  border: 1px solid transparent;
  font-family: inherit;

  &.primary {
    background-color: transparent;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    border-color: black;
    box-shadow: 0px 0px 0px 0px transparent;

    &:hover {
      letter-spacing: 3.5px;
      /* background: rgba(black, 0.03); */
      box-shadow: 0px 0px 9px -4px rgba(66, 68, 90, 0.5);
    }

    &:active {
      box-shadow: 0px 0px 9px -4px rgba(66, 68, 90, 1);
    }
  }
}
</style>
