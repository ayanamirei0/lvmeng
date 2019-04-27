<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
        </div>
        <div class="main">
            <h3>{{ tip }}</h3>
        </div>
        <nav-bar></nav-bar>
    </div>
</template>
<script>
    import mHeader from 'components/mHeader'
    import navBar from 'components/navBar'
    import slider from 'components/common/slider'
    export default {
        components: {
            mHeader,
            navBar,
            slider
        },
        data(){
            return{
				tip: "敬请期待",
				currentIndex: 4,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'white'  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
            }
        }
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 650px;
        background: url("../../assets/images/header.png") no-repeat center top;
        background-size: cover;
    }
    .main{
			width: 1200px;
			margin: 0 auto;
		}
		h3{
			font-weight: normal;
			margin: 70px 0;
			height: 64px;
			line-height: 64px;
			font-size: 45px;
			text-align: center;
		}
		ul{
			border-bottom: 1px solid #666;
			display: flex;
			justify-content: space-around;
			height: 60px;
			line-height: 60px;
			margin-bottom: 20px;
		}
		ul li{
			margin-right: 20px;
			list-style: none;
			font-size: 30px;
			color: #999999;
			display: inline-block;
			height: 42px;
			line-height: 42px;
		}
		ul li.active{
			color: #333;
			border-bottom: 3px solid #906448;
			padding-bottom: 15px;
		}
		.content{
			width: 1200px;
			display: flex;
            flex-wrap: wrap;
            margin-bottom: 40px;
		}
		.wrap{
			width: 585px;
			margin-right: 30px;
		}
		.wrap:nth-child(2n){
			margin-right: 0px;
		}
		.wrap img{
			width: 585px;
			height: 270px;
			vertical-align: middle;
		}
		.descript{
            padding: 20px;
            border-right: 1px solid #ECECEC;
            border-bottom: 1px solid #ECECEC;
            border-left: 1px solid #ECECEC;
		}
		.descript h5{
			font-size: 30px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.descript .pip{
			display: flex;
			justify-content: space-between;
			height: 40px;
            line-height: 40px;
            margin-top: 20px;
		}
		.descript span:nth-child(1){
			font-size: 21px;
			color: #999999;
		}
		.descript span:nth-child(2){
			color: #F96630;
			font-size: 28px;
		}
</style>
