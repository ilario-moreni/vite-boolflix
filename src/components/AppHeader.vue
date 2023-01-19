<script>
    import { store } from '../store';

    export default {
        data(){
            return{
                store,
                searchText: '',
            }
        }
    }
</script>

<template lang="">
    <div class="container-fluid p-3 header_container">
        <div class="row">
            <div class="col">
                <h1>
                    BOOLFLIX
                </h1>
            </div>
            <div class="col px-5">
                <div class="input-group flex-shrink-1 m-3">
                    <input type="text" class="form-control" placeholder="Cerca film e serie TV" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchText" @keyup.enter="$emit('search', searchText)">
                    <button class="btn  btn-danger" type="button" id="button-addon2" @click="$emit('search', searchText)">Cerca</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../styles/partials/variables.scss' as *;
    .header_container{
        background-color: $bg_color;
        box-shadow: 0 0 10px 5px $shadow_color_primary;
        .row{
            .col{
                h1{
                    color: $red_boolfix;
                }
            }
        }
    }
</style>