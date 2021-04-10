<template>
  <header class="header">
    <div class="wrap">
      <Logo />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  name: 'Header',
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
