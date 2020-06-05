import Vue from 'vue'
import Button from './Button.vue'
import Icon from './icon.vue'
import Group from './group.vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-group',Group)
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