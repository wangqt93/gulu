<template>
    <div >
        <button class='g-button'>按钮</button>
    </div>
</template>
<style lang='scss'>
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
    .g-button:hover {
        border-color: var(--border-color-hover);
    }
    .g-button:active {
        border-color: var(--border-active-bg);
    }
    .g-button:focus {
        outline: none;
    }
</style>