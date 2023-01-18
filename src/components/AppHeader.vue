<script>
    export default {
        
    }
</script>

<template lang="">
    <div class="container-fluid p-3 header_container">
        <div class="row">
            <div class="col">
                <h1>
                    BOOLFIX
                </h1>
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