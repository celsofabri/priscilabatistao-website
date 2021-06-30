<template>
  <button
    type="button"
    :class="isActive && 'burger--active'"
    @click="handleMenu"
    class="burger"
  >
    <span class="burger__stripe"></span>
  </button>
</template>

<script>
export default {
  name: 'Burger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleMenu() {
      this.$emit('menu-toggle');
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
