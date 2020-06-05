<template>
        <button class='g-button' :class='btnposition' @click=$emit('click')>
            <g-icon class='icon' v-if='icon && !loading' :name='icon' ></g-icon>
            <g-icon class='loading icon' v-if='loading' name='loading' ></g-icon>
            <slot></slot>
        </button>
</template>
<script>
    export default {
        props: {
            icon:{},
            btnposition: {
                type: String,
                default: 'left'
            },
            loading: {
                type: Boolean,
                default: false
            }
        }

    }
</script>
<style>
.g-button {
    height: var(--button-height);
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    cursor: pointer;
}
.g-button:hover {
    border-color: var(--border-color-hover);
}
.g-button:active{
    background-color: var(--button-active-bg);
}
.g-button:focus{
    outline: none;
}
.icon {
    margin-right: .1em;
}
.g-button.right>.icon {
    order: 2;
    margin-left: .1em;
    margin-right: 0;
}
@keyframes spin {
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}
.loading {
    animation: spin 2s infinite linear; 
}

</style>