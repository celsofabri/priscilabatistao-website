<template>
  <nav class="nav" :class="isActive && 'nav--active'">
    <Menu />
  </nav>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  name: 'MenuOverlay',
  components: {
    Menu
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
