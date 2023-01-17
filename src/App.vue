<script>
  import { store } from './store';
  import AppMain from './components/AppMain.vue';
  export default {
    components: {
      AppMain,
    },
    data(){
      return{
        store,
      }
    }
  }
</script>

<template lang="">
  <div>
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss';
</style>