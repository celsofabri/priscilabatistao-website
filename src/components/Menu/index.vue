<template>
  <ul class="menu">
    <li class="menu__item">
      <g-link to="/" title="Sobre" class="menu__anchor">Sobre</g-link>
    </li>
    <li class="menu__item">
      <g-link to="/" title="Fotografia" class="menu__anchor"
        >Fotografia</g-link
      >
    </li>
    <li class="menu__item">
      <g-link to="/" title="Design" class="menu__anchor"
        >Design</g-link
      >
    </li>
    <li class="menu__item">
      <g-link to="/" title="Contato" class="menu__anchor"
        >Contato</g-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

<style lang="scss">
@import '@/components/Menu/menu.scss';
</style>
