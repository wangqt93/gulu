import Vue from 'vue'

import Button from './Button.vue'
import Icon from './icon.vue'
import Group from './group.vue'
import Input from './input.vue'
import Test from './test.vue'
import Row from './row.vue'
import Col from './column.vue'
import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Content from './layout/content.vue'
import Aside from './layout/aside.vue'
import Footer from './layout/footer.vue'
import Toast from './toast.vue'
import Plugin from './plugin.js'


//创建全局组件
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-group',Group)
Vue.component('g-input',Input)
Vue.component('test',Test)
Vue.component('g-row', Row)
Vue.component('g-col',Col)

Vue.component('g-header',Header)
Vue.component('g-content', Content)
Vue.component('g-aside', Aside)
Vue.component('g-layout', Layout)
Vue.component('g-footer', Footer)

Vue.component('g-toast',Toast)
Vue.use(Plugin)

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
        },
        showtoast() {
            this.$toast('hello')
        }
    },
})