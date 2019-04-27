<template>
    <div>
        <div class="search_from" id="search_from">
            <div class="search_cont">
                <!-- <span class="inline_title">球场名称: </span> -->
                <el-input placeholder="搜索球场名称" v-model="input10" class="inline_ser" clearable></el-input>
            </div>
            <div class="search_cont">            
                <!-- <span>球场名称: </span> -->
                <div class="block">
                    <el-date-picker v-model="date" type="date" placeholder="选择日期" class="inline_ser" clear-icon></el-date-picker>
                </div>
            </div>
            <div class="search_cont">            
                <!-- <span>球场名称: </span> -->
                <el-time-select v-model="time" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间" class="inline_ser" prefix-icon></el-time-select>
            </div>
            <div class="search_cont">            
                <!-- <span>球场名称: </span> -->
                <el-input placeholder="搜索球场名称" v-model="input10" class="inline_ser" clearable></el-input>
            </div>
            <div class="search_cont">            
                <!-- <span>球场名称: </span> -->
                <div class="inline_ser btn">搜索</div>
            </div>
        </div>
    </div>
</template>
<script>
    import navBar from 'components/navBar'
    import slider from 'components/common/slider'
    export default {
        components: {
            navBar,
            slider
        },
        data() {
            return {
                input10: '',
                date: '',
                time: ''
            }
        }
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    #search_from{
        width: 298px;
        height: 319px;
        padding: 47px 37px 53px 39px;
        background: #fff;
        border-radius: 5px;
    }
    .search_cont{
        display: flex;
        justify-content: space-around;
    }
    .search_from .inline_ser{
        display: inline-block;
        width: 288px;
        height: 46px;
        line-height: 46px;
        margin-bottom: 14px;
    }
    .search_from .inline_title{
        display: inline-block;
    }
    .search_from .btn{
        display: inline-block;
        width: 288px;
        height: 46px;
        line-height: 46px;
        margin-bottom: 14px;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
        letter-spacing: 10px;
        background: -webkit-linear-gradient(#DEB58F, #A37749); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#DEB58F, #A37749); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#DEB58F, #A37749); /* Firefox 3.6 - 15 */
        background: linear-gradient(#DEB58F, #A37749); /* 标准的语法 */
    }
    
</style>

<!--
    <style type="text/scss">
        .el-input__icon{
            display: none;
        }
    </style>
-->

