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
            }
        }
    }
</script>

<template lang="">
    <div class="col card">
        <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div>
                    Titolo originale: {{ movie.original_title }}
                </div>
            </li>
            <li class="list-group-item">
                <div v-if="store.langList.includes(movie.original_language)">
                    <img class="flag" :src="`./src/assets/img/${movie.original_language}-flag.png`" alt="">
                </div>
                <div v-else>
                    Lingua originale: {{ movie.original_language }}
                </div>
            </li>
            <li class="list-group-item">
                <div>
                    Voto: {{ movie.vote_average }}
                </div>
            </li>
        </ul>
  </div>
</template>

<style lang="scss">
    .flag{
        width: 30px;
    }
</style>

