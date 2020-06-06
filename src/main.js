import Vue from 'vue'
import Button from './Button.vue'
import Icon from './icon.vue'
import Group from './group.vue'
import Input from './input.vue'


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-group',Group)
Vue.component('g-input',Input)


new Vue({
    el: '#app',
    data(){
        return {
            loading1: false,
            loading2: false,
            loading3: false
        }
    }
})