<script>
  import { store } from './store';
  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';
  export default {
    components: {
      AppMain,
      AppHeader,
    },
    data(){
      return{
        store,
      }
    }
  }
</script>

<template lang="">
  <div class="body_container">
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss';
  @use './styles/partials/variables.scss' as *;

  .body_container{
    background-color: $bg_color;
    min-height: 100vh;
    height: 100%;
    padding-bottom: 6rem;
  }
</style>