<template>
  <div>
    <Header />
    <Menu />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default {
  name: 'Homepage',
  metaInfo: {
    title: 'Priscila Batistão',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    bodyAttrs: {
      class: 'home'
    }
  },
  components: {
    Header,
    Menu
  }
};
</script>
