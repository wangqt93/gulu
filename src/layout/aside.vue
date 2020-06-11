<template>
    <div class="aside" v-if='visible'>
        <slot></slot>
        <button v-on:click='visible=false'>去掉</button>
    </div>
</template>
<script>
    export default {
        name: 'Aside',
        data(){
            return {
                visible: true
            }
        }
    }
</script>
<style scoped>
    .aside {
        border: 1px solid green;
        width: 20%;

    }
    .aside>button {
        float: right;
        margin: 0 5px;
    }


</style>