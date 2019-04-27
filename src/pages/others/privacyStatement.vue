<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
        </div>
        <div class="main">
            <h3>隐私声明</h3>
            <p class="txt">感谢您访问普信绿盟菁英俱乐部官方网站。在您使用本网站之前，请您仔细阅读本声明的所有条款。您一旦链接、登录本网站，即表明您无条件地接受本声明并遵守本声明和中华人民共和国国家相关法律法规的规定。</p>
            <p class="txt" style="height: 30px;"> </p>
            <p class="txt">本网站声明：</p>
            <p class="txt">1、当您访问普信绿盟菁英俱乐部官方网站的时候（如申请注册关注普信绿盟菁英俱乐部相关项目信息时）可能被要求提供您个人的基本资料（如姓名、电子邮件、身份验证等）。您可以自由选择是否提供。对于您提供的个人信息，我们将根据中华人民共和国国家相关法律妥善保管，对于收集到的您的信息，普信绿盟菁英俱乐部是唯一的所有者，我们不会违反规定将这些信息转售或转租给任何第三方。</p>
            
            <p class="txt">2、我们郑重承诺，保护您所提供的个人信息在传送、保存、使用中的安全性。在收到用户的个人信息后，我们将使用有效的安全程序及措施来防止个人资料丢失、被盗、泄漏、破坏修改和非法使用。</p>
            
            <p class="txt">3、如果用户提供的资料包含有不正确的信息，本网站保留结束用户使用网络服务资格的权利。当政府或司法机关依照法定程序要求本网站披露个人资料时，本网站将依据执法单位之要求或为公共安全之目的提供个人资料，在此情况下的任何披露、提供等将被视为合法且自动的获得用户的同意，本网站均得以免责。</p>
            
            <p class="txt">4、您可以随时查看和更改有关您的任何信息，如姓名、地址、电话号码或者电子邮件等，以确保您个人信息的准确性。我们承诺，访问您个人信息的权限仅限于需要进行此类访问以完成该类工作的人员。</p>
            
            <p class="txt">5、普信绿盟菁英俱乐部保留根据业务需要随时对本声明内容进行更新、修改的权利，并将始终遵循收集用户信息时的中华人民共和国国家有关隐私权方面的法律法规和本声明使用、共享和公布用户信息。</p>
            <p class="txt">请您在每次登录本网站时访问此处，查看本网站的当前声明内容。</p>
            <p class="txt" style="text-align: left;">特此声明</p>
            <p class="txt" style="text-align: right;">普信绿盟菁英俱乐部</p>
            <p class="txt" style="text-align: right; padding-right: 26px;">2019年3月27日</p>            
        </div>
        <div class="clubbotton" @click="centerDialogVisible = true"></div>
        <nav-bar></nav-bar>
        <el-dialog
            title="联系客服"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <div class="contact">400-817-8588</div>
            <p class="contact_tip">拨打上方电话，完成会员申请</p>
            <span slot="footer" class="dialog-footer">
                <el-button  @click="centerDialogVisible = false" class="kown">我知道了</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import mHeader from 'components/mHeader'
    import navBar from 'components/navBar'
    import slider from 'components/common/slider'
    import message from 'components/common/message'
    import spaceHeader from 'components/common/spaceHeader'
    export default {
        components: {
            mHeader,
            spaceHeader,
            navBar,
            slider,
            message
        },
        data() {
            return {
                centerDialogVisible: false,
                currentIndex: 12,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'black'  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
            };
        }
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 80px;
        // background: url("../../assets/images/header.png") no-repeat center top;
        // background-size: cover;
    }
    a{
        color: #333333;
    }
    // header{
    //     width: 100%;
    //     color: #333333;
    //     border-bottom: 1px solid #FFFFFF;
    // }
    .head_nav{
        width: 1200px;
        margin: 0 auto;
        height: 80px;
        display: flex;
        justify-content: space-between;
    }
    #logo{
        width: 100px;
        height: 42px;
        margin-top: 19px;
    }
    .head_nav ul{
        width: 80%;
        height: 80px;
        text-align:right;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .head_nav ul li{
        margin-left:65.6px;
        display: inline-block;
        font-size: 16px;
        padding: 28px 0px;
        height: 22px;
        line-height: 22px;
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

    .wrap{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #666666;
        font-weight: normal;
        margin: 30px 0 0 0px;
    }
    .wrap span{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
        font-weight: 500;
        margin-left: 5px;
    }

    .main h3{
        height: 33px;
        line-height: 33px;
        font-size: 24px;
        color: #333;
    }
    .chapter{
        font-size: 18px;
        text-align: center;
        padding: 5px 0 0 0;
    }
    .txt{
        color: #666666;
        line-height: 27px;
        margin: 5px 0;
    }
    .main{
		width: 1200px;
        margin: 0 auto 65px auto;
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
    .main .clubbotton{
        width: 504px;
        height: 80px;
        margin: 0 auto 202px auto;
        background: url("../../assets/images/clubbotton.png") no-repeat -10px -3px;
    }
    .contact{
        font-size: 44px;
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
    .el-dialog__headerbtn .el-dialog__close:hover {
        color: #A37749;
    }
    .clubbotton{
        width: 504px;
        height: 80px;
        margin: 0 auto 80px auto;
        background: url("../../assets/images/clubbotton.png") no-repeat -10px -3px;
    }
</style>
