<template>
  <fragment>
    <Header />
    <AboutContent />
  </fragment>
</template>

<script>
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import AboutContent from '@/components/AboutContent';

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
    Menu,
    AboutContent
  }
};
</script>
