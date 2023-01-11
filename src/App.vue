<template>
  <div class="wrapper">
    <app-header></app-header>
    <router-view></router-view>
    <app-main-button></app-main-button>
  </div>
</template>

<script>
import AppMainButton from './components/AppMainButton.vue'
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
    AppMainButton
  }
}
</script>

<style>
.wrapper {
  max-width: 100%;
  flex: 0 1 auto;
  overflow: hidden;
}
</style>
