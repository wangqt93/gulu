<template>
    <div>
        <input type="text" :value='value' @change="$emit('input',$event.target.value)">
        <p>{{value}}</p>
    </div>
    

</template>
<style>
    .box {
        
    }
</style>
<script>
    export default {
        props: {
            value: {
                type: String,

            },
        }
    }
</script>

