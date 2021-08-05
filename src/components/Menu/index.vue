<template>
  <ul class="menu">
    <li class="menu__item">
      <g-link to="/sobre" title="Sobre" class="menu__anchor"
        >Sobre</g-link
      >
    </li>
    <!-- <li class="menu__item">
      <g-link to="/fotografia" title="Fotografia" class="menu__anchor"
        >Fotografia</g-link
      >
    </li>
    <li class="menu__item">
      <g-link to="/design" title="Design" class="menu__anchor"
        >Design</g-link
      >
    </li> -->
    <li class="menu__item">
      <!-- <g-link to="/contato" title="Contato" class="menu__anchor"
        >Contato</g-link
      > -->
      <a
        href="mailto:priscila.batistao@hotmail.com"
        title="Contato"
        target="_blank"
        class="menu__anchor"
      >
        Contato
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
