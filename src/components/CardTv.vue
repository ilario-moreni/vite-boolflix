<script>
    import { store } from '../store';
    export default {
        name: 'CardTv',
        props: {
            tv: Object,
        },
        data(){
            return{
                store,
            }
        },
        computed:{
            transformVote(){
                let newRating = Math.round(this.tv.vote_average / 2);

                
                
                return newRating;
            }

        }
    }
</script>

<template lang="">
    <div class="col card text-bg-dark card_shadow">
        <div class="pt-3">
            <img :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`" class="card-img-top" :alt="tv.name">
        </div>
        <div class="card-body">
        <h5 class="card-title">{{ tv.name }}</h5>
        </div>
        <ul class="card_ul">
            <li class="">
                <div>
                    Titolo originale: {{ tv.original_name }}
                </div>
            </li>
            <li class="">
                <div v-if="store.langList.includes(tv.original_language)">
                    <img class="flag" :src="`./src/assets/img/${tv.original_language}-flag.png`" alt="">
                </div>
                <div v-else>
                    Lingua originale: {{ tv.original_language }}
                </div>
            </li>
            <li class="">
                <div>
                    <div>
                        <i class="fa-solid full-star fa-star" v-for="i in transformVote"></i>
                        <i class="fa-regular fa-star" v-for="i in 5 - transformVote"></i>
                    </div>                    
                </div>
            </li>
        </ul>
  </div>
</template>

<style lang="scss">
    @use '../styles/partials/mixin.scss';
    @use '../styles/partials/variables.scss' as *;

    .card_ul{
        @include mixin.card_ul;
    }

    .card_shadow{
        box-shadow: 2px 4px 5px 1px $shadow_color_primary;
    }

    .flag{
        width: 30px;
    }
</style>

