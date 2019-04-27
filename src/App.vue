<template>
    <div id="app">
            <router-view class="router-view"/>
    </div>
</template>

<script>
    import 'babel-polyfill'
    import 'es6-promise/auto'
    export default {
        // 监听路由的路径，可以通过不同的路径去选择不同的切换效果
        // scrollBehavior(to, from, savedPosition) {
        //     if (savedPosition) {
        //         return savedPosition
        //     }
        //     return {x: 0, y: 0}
        // },
        data(){
            return{
            }
        }    
    }
</script>

<style lang="scss" type="text/scss">
    @import './common/style/base';
    body{
        margin: 0 auto;
        // background: url("./assets/images/header.png") no-repeat center top;
        // background-size: 100%;
    }
    
    #app {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background: #fff;
        font-family: 'siyuan';
        -webkit-overflow-scrolling: touch;
    }
    /*切换样式出错处理*/
    .router-view{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        -webkit-overflow-scrolling: touch;
    }
</style>
