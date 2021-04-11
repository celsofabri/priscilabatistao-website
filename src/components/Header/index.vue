<template>
  <header class="header">
    <div class="wrap">
      <Logo />
      <Burger />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo';
import Burger from '@/components/Burger';

export default {
  name: 'Header',
  components: {
    Logo,
    Burger
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
