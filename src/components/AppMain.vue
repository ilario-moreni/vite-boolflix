<script>
    import { store } from '../store';
    import Card from './Card.vue';
    import CardTv from './CardTv.vue';
    export default {
        components: {
            Card,
            CardTv,
        },
        name: 'AppMain',
        data(){
            return{
                store,
            }
        }
    }
</script>
<template lang="">
    <div class="container my-4">
        <div v-if="store.movieList || store.seriesList" class="mt-3 text-white">
            Ho trovato {{ store.movieList.length }} film e {{ store.seriesList.length }} serie TV in base alla tua ricerca.
        </div>
        <div v-if="!store.movieList.length == 0" class="row">
            <div class="col text-white tv_and_series_header">
                <h2>Film</h2>
            </div>
        </div>
        <div v-if="!store.movieList.length == 0" class="row row-cols-5 gap-5 justify-content-between ">
            <Card v-for="(item, index) in store.movieList" :key="index" :movie="item" />
        </div>
        <div v-if="!store.seriesList.length == 0" class="row">
            <div class="col text-white tv_and_series_header">
                <h2>Serie Tv</h2>
            </div>
        </div> 
        <div v-if="!store.seriesList.length == 0" class="row row-cols-5 gap-5 justify-content-between ">
            <CardTv v-for="(serie, index) in store.seriesList" :key="'tv'+index" :tv="serie" />
        </div>
    </div>
</template>
<style lang="scss">
    @use '../styles/partials/variables.scss' as *;

    .tv_and_series_header{
        padding: 1rem 0 2.5rem;
    }
</style>