<template>
  <div>
    <Header />
    <ContactContent />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import ContactContent from '@/components/ContactContent';

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
    ContactContent
  }
};
</script>
