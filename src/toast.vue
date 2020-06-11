<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        data(){
            return {
                message: ''
            }
        },
        methods: {
            showtoast(){
                this.$toast('hello')
            }
        }
    }
</script>
<style>
    .toast {

        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        line-height: 1.8;
        height: 40px;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.75);
        color: #fff;
        padding: 0 16px;
        border-radius: 6px;
    }
</style>