<template>
    <div class="layout" :class='layoutClass'>
        <slot></slot>
    </div>
</template>
<style>
    .layout {
        display:flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        flex-grow: 1;
    }
    .layout.hasAside {
        flex-direction: row;

    }
</style>
<script>
    export default {
        data(){
            return {
                layoutClass : {
                    hasAside:  false
                }
            }
        },
        mounted(){
            this.$children.forEach(vm =>{
                if(vm.$options.name === 'Aside'){
                    this.layoutClass.hasAside = true
                }
            })
        }
    }
</script>