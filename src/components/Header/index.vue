<template>
  <header class="header">
    <div class="wrap">
      <Logo />
      <Burger :is-active="isActive" @menu-toggle="handleMenuActive" />
    </div>
    <MenuOverlay :is-active="isActive" />
  </header>
</template>

<script>
import Logo from '@/components/Logo';
import Burger from '@/components/Burger';
import MenuOverlay from '@/components/MenuOverlay';

export default {
  name: 'Header',
  components: {
    Logo,
    Burger,
    MenuOverlay
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleMenuActive() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
