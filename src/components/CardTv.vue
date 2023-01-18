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
        }
    }
</script>

<template lang="">
    <div class="col card text-bg-dark card_shadow">
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
                    Voto: {{ tv.vote_average }}
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

