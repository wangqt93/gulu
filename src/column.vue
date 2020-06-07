<template>                                   <!--下面一行class里的setmouve，意思是如果setmove存在，设置后边的内容-->
    <div class='col' :class="colClass" :style= "colStyle">
        <div>
            <slot></slot>
        </div> 
    </div>
</template>
<style scoped lang='scss'>
    .col {
        height:100%;
        width: 50%;
        text-align: center;
        line-height:100px;

    }
    .col>div {
        border: 1px solid green;
    }
    .col.col-1 {
        width: 8.3333%;
    }
    .col.col-2 {
        width: 16.6667%;
    }
    .col.col-3 {
        width: 25%;
    }
    .col.col-4 {
        width: 33.3333%;
    }
    .col.col-5 {
        width: 41.6667%;
    }
    .col.col-6 {
        width: 50%;
    }
    .col.col-7 {
        width: 58.3333%;
    }
    .col.col-8 {
        width: 66.6667%;
    }
    .col.col-9 {
        width: 75%;
    }
    .col.col-10 {
        width: 83.3333%;
    }
    .col.col-11 {
        width: 91.6667%;
    }
    .col.col-12 {
        width: 100%;
    }
    .col.move-1 {
        margin-left: 8.3333%;
    }
    .col.move-2 {
        margin-left: 16.6667%;
    }
    .col.move-3 {
        margin-left: 25%;
    }
    .col.move-4 {
        margin-left: 33.3333%;
    }
    .col.move-5 {
        margin-left: 41.6667%;
    }
    .col.move-6 {
        margin-left: 50%;
    }
    .col.move-7 {
        margin-left: 58.3333%;
    }
    .col.mvoe-8 {
        margin-left: 66.6667%;
    }
    .col.move-9 {
        margin-left: 75%;
    }
    .col.move-10 {
        margin-left: 83.3333%;
    }
    .col.move-11 {
        margin-left: 91.6667%;
    }
    .col.mvoe-12 {
        margin-left: 100%;
    }
 
</style>
<script>
    export default {
        props: {
            span: {
                type: [Number,String]
            },
            setmove: {
                type: [Number,String]
            }
        },
        data(){
            return {
                gutter: 0
            }
        },
        computed: {
            colStyle(){
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass(){
                return [this.span && `col-${this.span}`, this.setmove && `move-${this.setmove}`]
            }
        }
    }
</script>