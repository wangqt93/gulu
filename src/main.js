import Vue from 'vue'
import Button from './Button.vue'
import Icon from './icon.vue'
import Group from './group.vue'
import Input from './input.vue'
import Test from './test.vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-group',Group)
Vue.component('g-input',Input)
Vue.component('test',Test)

new Vue({
    el: '#app',
    data(){
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message: ''
        }
    },
    methods: {
        fn(){
            console.log(1)
        },
        fn2(){
            console.log('hello')
        },
        fn3(e){
            this.message= e.target.value
            console.log(this.message)
        }
    }
})