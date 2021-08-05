<template>
  <button
    type="button"
    :class="isActive && 'burger--active'"
    @click="handleMenu"
    class="burger"
  >
    <span class="burger__stripe"></span>
  </button>
</template>

<script src="./scripts.js" />

<style src="./style.scss" lang="scss" />
