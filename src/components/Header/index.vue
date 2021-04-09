<template>
  <header class="header">
    <div class="wrap">
      <Logo />
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>

<style scoped>
.header {
  display: block;
  width: 100%;
  padding: 10px 0;
}
</style>
