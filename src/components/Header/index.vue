<template>
  <header class="header">
    <div class="wrap">
      <Logo />
      <Burger :is-active="isActive" @menu-toggle="handleMenuActive" />
    </div>
    <MenuOverlay :is-active="isActive" />
  </header>
</template>

<script src="./scripts.js" />

<style src="./style.scss" lang="scss" scoped />
