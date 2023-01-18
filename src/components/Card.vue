<script>
    import { store } from '../store';
    export default {
        name: 'Card',
        props: {
            movie: Object,
        },
        data(){
            return{
                store,
                showInfo: false,
            }
        },
        computed:{
            transformVote(){
                let newRating = Math.round(this.movie.vote_average / 2);

                
                
                return newRating;
            }

        }
    }
</script>

<template lang="">
    <div class="col card text-bg-dark card_shadow card_hover" @mouseover="showInfo = true" @mouseleave="showInfo = false" >
        <div v-show="!showInfo" class="py-4">
            <div class="my_card_img">
                <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" class="card-img-top" :alt="movie.title">
            </div>
        </div>
        <div v-show="showInfo" class="card_info">
            <ul class="card_ul">
                <li class="title_card py-3">
                    <h5 class="card-title">{{ movie.title }}</h5>
                </li>
                <li class="original_title">
                    <div>
                        Titolo originale: {{ movie.original_title }}
                    </div>
                </li>
                <li class="flag_li">
                    <div v-if="store.langList.includes(movie.original_language)">
                        <img class="flag" :src="`./src/assets/img/${movie.original_language}-flag.png`" alt="">
                    </div>
                    <div v-else>
                        Lingua originale: {{ movie.original_language }}
                    </div>
                </li>
                <li class="stars_li">
                    <div>
                        <div>
                            <i class="fa-solid full-star fa-star" v-for="i in transformVote"></i>
                            <i class="fa-regular fa-star" v-for="i in 5 - transformVote"></i>
                        </div>                    
                    </div>
                </li>
            </ul>

        </div>
  </div>
</template>

<style lang="scss">
    @use '../styles/partials/mixin.scss';
    @use '../styles/partials/variables.scss' as *;
    
    .card_ul{
        @include mixin.card_ul;
    }
    
    .full-star{
        color: $star_color;
    }
    
    .flag{
        width: 30px;
    }

    .card_info{
        height: 100%;
    }

    .my_card_img{
        min-height: 300px;
        img{
            max-height: 300px; 
            object-fit: contain;
        }
        
    }
</style>

