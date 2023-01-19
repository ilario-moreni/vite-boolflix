<script>
  import { store } from './store';
  import axios from 'axios';
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
    },
    methods: {
        search(input){
            let apiCall = store.api + input;
            let apiCall_tv = store.api_tv + input;
            axios.get(apiCall).then((response) => {
                store.movieList = response.data.results
            })
            axios.get(apiCall_tv).then((response) => {
                store.seriesList = response.data.results
            })
        }
    }
  }
</script>

<template lang="">
  <div class="body_container">
    <AppHeader @search="search"/>
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