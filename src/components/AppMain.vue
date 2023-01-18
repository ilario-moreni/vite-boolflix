<script>
    import { store } from '../store';
    import Card from './Card.vue';
    import CardTv from './CardTv.vue';
    import axios from 'axios';
    export default {
        components: {
            Card,
            CardTv,
        },
        name: 'AppMain',
        data(){
            return{
                store,
                searchText: '',
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
    <div class="container my-4">
        <div class="row">
            <div class="input-group flex-shrink-1 m-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchText" @keyup="search(searchText)">
                <button class="btn  btn-danger" type="button" id="button-addon2" @click="search(searchText)">Cerca</button>
            </div>
        </div>
        <div class="mt-3 text-white">
            Ho trovato {{ store.movieList.length }} film e {{ store.seriesList.length }} serie TV
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