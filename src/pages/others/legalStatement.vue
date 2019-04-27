<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
        </div>
        <div class="main">
            <h3>法律声明</h3>
            <p class="txt">感谢您访问普信绿盟菁英俱乐部官方网站。在您使用本网站之前，请您仔细阅读本声明的所有条款。您一旦链接、登录本网站，即表明您无条件地接受本声明并遵守本声明和中华人民共和国国家相关法律法规的规定。</p>
            <p class="txt" style="height: 30px;"> </p>
            <p class="txt">本网站声明：</p>
            <p class="txt">1、本网站所刊载的所有信息资料、图片及图表仅供参考。在任何情况下，普信绿盟菁英俱乐部对于因本网站之资料引起的任何损失或损害，包括但不限于任何错误、误差、遗漏、或侵权性质、诽谤性质或虚假性质的信息或任何其他可导致冒犯或在其他方面引致发生任何追索或投诉的资料或遗漏，概不负责亦不承担任何有关责任。本网站之资料的准确性及完整性由使用者自行评估。</p>
            <p class="txt">2、有关版权、知识产权我们将保留所有权利。所有的文字、图片、照片、有声文件、动画文件、视频文件以及所有的排版和其他知识产权均受中华人民共和国包括著作权法在内的所有相关知识产权保护。在遵守以下声明条件下可用于私人下载观看，但不可复制用于商业目的或发行，也不可修改后在其他网站使用。普信绿盟菁英俱乐部网站中的图片有其相应的提供者的，这些图片的版权同时属于它们的提供者。</p>
            <p class="txt">3、普信绿盟菁英俱乐部没有义务对用户输入到普信绿盟菁英俱乐部官方网站的信息进行监视或检查，并且不承担与用户输入信息有关的任何责任和义务。普信绿盟菁英俱乐部保留随时检查用户输入的信息和删除、修改用户输入信息的权利，并无须说明理由或通知。</p>
            <p class="txt">4、本网站中出现的所有商标、标识和服务标志的所有权均归普信绿盟菁英俱乐部或拥有合法权的第三方。未经普信绿盟菁英俱乐部或第三方书面许可，禁止将其以任何方式使用、永久下载、复制、分发及其它类似前述的行为。</p>
            <p class="txt">5、凡以任何方式登录本网站或直接、间接使用本网站资料者，视为自愿接受本网站声明的约束。</p>
            <p class="txt">6、任何由于计算机黑客攻击、计算机病毒入侵、硬件设施损坏、因政府管制或司法行为而造成的暂时性关闭等影响网络正常经营的不可抗力而造成的个人资料泄漏、丢失、被盗用或者被篡改等，本网站均不负任何责任。</p>
            <p class="txt">7、本网站如果因发生不可抗力，或因线路、硬件故障、系统维护、系统升级或者其它无法预见或控制的事件而导致暂停服务，在暂停服务期间造成的一切不便与损失，本网站均不负任何责任。</p>
            <p class="txt">8、本声明未涉及的问题参见中华人民共和国国家相关法律法规，当本声明与中华人民共和国国家法律、法规冲突时，以中华人民共和国国家法律、法规为准。</p>
            <p class="txt">9、本网站的声明及其修改权、更新权以及最终解释权均属于普信绿盟菁英俱乐部。
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
