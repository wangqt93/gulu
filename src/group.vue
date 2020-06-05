<template>
    <div class='group'>
        <slot></slot>
    </div>
    
</template>
<style>
    .group {
        display:inline-flex;
        vertical-align: middle;
        align-items: center;

    }
    .group :first-child:hover{
        z-index: 2;
    }
    .group :first-child {
         border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        
    }
    .group :last-child {
        margin-left: -1px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

</style>