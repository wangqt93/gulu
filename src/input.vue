<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value='value' :disabled='disabled' :readonly='readonly'>
        <template v-if='error'>
            <Icon name='error'></Icon>
            <span>{{error}}</span>
        </template>
    </div>
</template>

<style scoped>
    .wrapper {
        display: inline-block;
        font-size: 14px;
    }
    .wrapper>input {
        height: 32px;
        border: 1px solid #999;
        border-radius: 6px;
        padding: 0 8px;
        font-size: 14px;   
    }
    .wrapper>input:hover {
        border: 1px solid #666;

    }
    .wrapper>input:focus {
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
        outline: none;
    }
    .wrapper>input[disabled] {
        color: #bbb;
        border-color: #bbb;
        cursor: not-allowed;
    }
    .wrapper>input[readonly] {
        color: #555;
        border-color: #555;
        cursor: not-allowed;       
    }
    .error>input,.error>input:hover{
       border: 1px solid red;
    }

</style>
<script>
import Icon from './icon.vue'
export default {
    components:{
        Icon
    },
    name: 'gulu-input',
    props: {
        value: {
            type: String
        },
        disabled:{
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>