<template>
    <div class="row" :style='rowStyle'>
        <slot></slot>
    </div>
</template>
<style scoped>
    .row {
        height: 100px;
        display: flex;
        margin-bottom: 4px;
    }
</style>
<script>
    export default {
        props: {
            gutter: {
                type: [String,Number]
            }
        },
        computed:{
            rowStyle(){
                return {
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px'
                }
            }
        },
        mounted(){
            this.$children.forEach(vm =>{
                vm.gutter =this.gutter
            })
        }
    }
</script>