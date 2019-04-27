<template>
    <header>
        <div class="head_nav">
            <router-link tag="a" to="/home">
                <img src="../assets/images/logo.png" alt="logo" id="logo">
            </router-link>
            <ul>
                <router-link tag="li" v-for='item in navList' :to="item.navPath" :key='item.index' :class="[navColor, item.index == currentIndex? 'active' : '']">
                        {{item.navName}}
                </router-link>
            </ul>
        </div>
	</header>
</template>
<script>
    export default {
         props: {
            currentIndex: {
                type: Number,
                required: true
            },
            navColor: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                navList: [
                    {
                        navName: '首页',
                        index: 0,
                        navPath: 'home'
                    },
                    {
                        navName: '加入俱乐部',
                        index: 6,
                        navPath: 'club'
                    },
                    {
                        navName: '菁英畅打',
                        index: 1,
                        navPath: 'player-faster'

                    },
                    {
                        navName: '菁英假日',
                        index: 2,
                        navPath: 'player-holiday'
                    },
                    {
                        navName: '菁英赛事',
                        index: 3,
                        navPath: 'player-match'
                    },
                    // {
                    //     navName: '菁英活动',
                    //     index: 4,
                    //     navPath: 'player-activety'
                    // },
                    {
                        navName: '新闻动态',
                        index: 5,
                        navPath: 'news'
                    }
                ]
            }
        },
        methods: {
            getSearch(){
                this.$router.push('/search')
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    @import '../common/style/mixin';
    header{
        width: 100%;
        border-bottom: 1px solid #E0E0E0;
        position: absolute;
        z-index: 999;
        box-sizing: border-box;
    }
    .head_nav{
        width: 1200px;
        margin: 0 auto;
        height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .white{
        color: #fff;
    }
    .black{
        color: #333;
    }
    #logo{
        width: 100px;
        height: 42px;
        margin-top: 10px;
    }
    .head_nav ul{
        width: 80%;
        height: 60px;
        text-align:right;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .head_nav ul li{
        margin-left:65.6px;
        display: inline-block;
        font-size: 16px;
        padding: 19px 0px;
        height: 22px;
        line-height: 22px;
        cursor: pointer;
    }
    .head_nav ul li.active{
        border-bottom: 2px solid #8F6448;  
        color: #8F6448;      
    }
    .head_nav ul li.active a{
        color: #8F6448;      
    }
    .orange{
        color: #906448;
    }
</style>
