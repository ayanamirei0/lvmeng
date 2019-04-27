<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
        </div>
        <div class="clubBanner">
            <img src="../../assets/images/joinclubheader.png" alt="加入俱乐部">
            <div class="clubbotton" @click="centerDialogVisible = true">加入俱乐部</div>
        </div>
        <div class="main">
            <div class="center">
                 <img src="../../assets/images/joinclubcontent.png" width="1200"/>
            </div>
            <div class="center">
                 <img src="../../assets/images/joinclubfooter.png" width="1200"/>
            </div>
            <router-link tag="p" to="/rules" >查看会员章程</router-link>
            <div class="clubbottonother" @click="centerDialogVisible = true">加入俱乐部</div>
        </div>


        <nav-bar></nav-bar>
        <div id="clib_border">
            <el-dialog
                title="联系客服"
                :visible.sync="centerDialogVisible"
                width="580px"
                center>
                <div class="contact">400-817-8588</div>
                <p class="contact_tip">拨打上方电话，完成会员申请</p>
                <span slot="footer" class="dialog-footer">
                    <el-button  @click="centerDialogVisible = false" class="kown">我知道了</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import mHeader from 'components/mHeader'
    import navBar from 'components/navBar'
    import slider from 'components/common/slider'
    import message from 'components/common/message'

    export default {
        components: {
            mHeader,
            navBar,
            slider,
            message
        },
        data() {
            return {
                centerDialogVisible: false,
                currentIndex: 6,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'black'  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
            };
        }
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 61px;
        background: #fff;
        background-size: cover;
    }
    .clubBanner{
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .clubBanner img{
        width: 100%;
    }
    
    .clubBanner .clubbotton{
        width: 200px;
        height: 42px;
        line-height: 42px;
        position: absolute;
        bottom:30%;
        left:50%;
        transform: translate(-100px, 0);
        // background: #8F6448;
        text-align: center;
        color: #282C39;
        cursor: pointer;
        background: linear-gradient(-180deg, #D4B690 0%, #A87D5A 100%);
        border-radius: 100px;
        font-size: 16px;
    }
    .main{
		width: 100%;
        background: url("../../assets/images/joinclubbg.png") no-repeat center center;
        background-size: 100% 100%;
        padding-bottom: 30px;
        // height: 1327px;
    }
    .main .center{
        width: 1200px;
        margin: 0 auto;
    }
    .main p{
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 98px;
        margin: 20px auto;
        font-size: 16px;
        border-bottom: 1px solid #A87D5A;
        color: #B3834C;
        cursor: pointer;
    }
    .main img{
    	width: 100%;
    	display: inline-block;
    }
	h3{
		font-weight: normal;
        color: #906448;
        height: 56px;
        line-height: 56px;
        font-size: 40px;
        margin: 88px 0px 74px 0px;
        text-align: center;
    }
	.content{
		width: 1200px;
		margin: 20px auto 167px auto;
    }
    .main .clubbottonother{
        width: 361px;
        height: 59px;
        line-height: 59px;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        background: linear-gradient(-180deg, #D4B690 0%, #A87D5A 100%);
        border-radius: 100px;
        font-size: 22px;
        margin: 0 auto;
        cursor: pointer;
    }
    .contact{
        font-size: 40px;
        height: 56px;
        line-height: 56px;
        color: #333333;
        text-align: center;
    }
    .contact_tip{
        height: 31px;
        line-height: 31px;
        font-size: 18px;
        text-align: center;
    }
    .kown{
        width: 160px;
        height: 40px;
        font-size: 14px;
        color: #fff;
        border-radius: 100px;
        background: -webkit-linear-gradient(#DEB58F, #A37749); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#DEB58F, #A37749); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#DEB58F, #A37749); /* Firefox 3.6 - 15 */
        background: linear-gradient(#DEB58F, #A37749); /* 标准的语法 */
    }
</style>

<style type="text/css">
	#clib_border .el-dialog__body{
		border-top:1px solid #D7D7D7 ;
	}
	#clib_border .el-dialog--center #clib_border .el-dialog__body{
		padding: 50px 25px 60px;
	}
	#clib_border .el-dialog__footer{
		padding: 0px 20px 60px;
	}
</style>
