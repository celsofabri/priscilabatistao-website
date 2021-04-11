<template>
  <fragment>
    <Header />
  </fragment>
</template>

<script>
import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default {
  name: 'About',
  metaInfo: {
    title: 'Sobre | Priscila Batistão',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    bodyAttrs: {
      class: 'about'
    }
  },
  components: {
    Header,
    Menu
  }
};
</script>
