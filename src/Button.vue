<template>
        <button class='g-button' :class='btnposition'>
            <g-icon :icon='icon' class='icons'></g-icon>
            <g-icon icon='loading' class='icons loading'></g-icon>
            {{name}}
        </button>
</template>
<script>
    export default {
        props: ['name','icon','btnposition']
    }
</script>
<style>
.g-button {
    height: var(--button-height);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    align-items: center;
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
.g-button.right>.icons {
    order: 2;
}
@keyframes spin {
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}
.loading {
    animation: spin 2s infinite linear; 
}

</style>