<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
            <div class="hd_h2">
            	<h2>普信绿盟菁英俱乐部</h2>
            	<p>品质服务   菁英巨献</p>
            </div>
        </div>
        <div class="main">
            <h3>关于普信绿盟菁英俱乐部</h3>
            <div class="content">
                <div class="content_img">
                    <img src="../../assets/images/aboutus.png">
                </div>
                <div class="content_txt">
                    <h5>普信·绿盟</h5>
                    <p class="entitle">Golf Club</p>
                    <p class="one"><span>普信·绿盟菁英俱乐部</span>由普信资产（国资控股）发起，以资格</p>
                    <p>金的形式汇聚菁英会员，资格金由广东侨金所提供资产管理通道，</p>
                    <p>兴业银行提供第三方银行存管服务，中国能源提供流动性支持、</p>
                    <p>本金返还担保等债权产品收益保障，锦天城律所提供确权法律</p>
                    <p>认证，高尔夫专业服务由授权合作机构深圳铁马高尔夫领衔提</p>
                    <p>供，城市合伙人机构担纲执行。</p>
                    <p>以统一标准的资格金门槛聚合中国业余高尔夫的高净值球友，</p>
                    <p>创新业余高尔夫服务模式，创建中国最具影响力的高尔夫精英</p>
                    <p>社交圈。</p>
                    <p class="one"><span>发起机构：</span>普信资产管理有限公司</p>
                    <p class="one"><span>运营机构：</span>湖南绿盟体育俱乐部有限公司</p>
                    <p class="one"><span>服务机构：</span>深圳市铁马高尔夫管理有限公司（会员畅打与行程预订授权服务机构）</p>
                    <p>城市合伙人机构（嘉年华、省际联谊赛、城市俱乐部等专属服务公司）</p>
                </div>
            </div>
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
        data() {
            return {
                currentIndex: 9,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'white'  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
            }
        },
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 650px;
        background: url("../../assets/images/aboutusbanner.png") no-repeat center top;
        background-size: cover;
        position: relative;
    }
    .hd_h2{
    	text-align: center;
    	color: #FFFFFF;
    	margin-top: 220px;
    	float: left;
    	width: 100%;
    	
    }
    .hd_h2 h2{
    	font-size: 48px;
    	line-height: 90px;
    	font-weight: normal;
    	margin-bottom: 10px;
    	
    }
    .hd_h2 p{
    	font-size: 30px;
    	line-height: 50px;
    	
    }
    .main{
        width: 1200px;
        margin: 0 auto;
    }
    h3{
        font-weight: normal;
        margin: 107px 0 120px 0;
        height: 60px;
        line-height: 60px;
        font-size: 38px;
        text-align: center;
        color: #333333 ;
    }
    .content{
        height: 828px;
        width: 1200px;
        position: relative;
        margin-bottom: 541px;
    }
    .content_img, .content_img img{
        height: 597px;
        width: 787px;
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .content_txt{
        padding: 31px 0 0 54px;
        width: 729px;
        height: 695px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        background: #ffffff;
        border: 1px solid #F1F1F1;
    }
    .content_txt h5{
        height: 50px;
        line-height: 50px;
        font-size: 36px;
    }
    .content_txt p{
        height: 36px;
        line-height: 36px;
        font-size: 19px;
        color: #666666;
    }
    .content_txt .entitle{
        height: 22px;
        line-height: 22px;
        font-size: 19px;
        color: #666666;
        margin: 2px 0 37px 0;
    }
    .content_txt .one span{
        height: 22px;
        line-height: 22px;
        font-size: 19px;
        color: #2A2A2A;
        margin: 2px 0 37px 0;
    }
	.space{
        width: 218px;
        height: 12px;
        background: #906448;
        position: absolute;
        left: 0px;
        bottom: 0px;
    }
</style>
