<template>
    <div v-if="holidayBookDetail">
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
            <imgView :imgList="bannerList" :imgHeight="387" :imgWidth="580"/>
            <dl>
                <dt class="menu">
                    <router-link tag="a" to="/player-holiday">菁英假日</router-link>> 行程预订
                </dt>
            </dl>

            <!-- <spaceHeader></spaceHeader> -->
            <div class="bd_banner">
                <div>
                    <h2>{{holidayBookDetail.pack.title}}</h2>
                    <span>{{holidayBookDetail.pack.description}}</span>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="content" id="searchBar">
            <div class="jr_open">
                加入俱乐部立享“会员价”待遇
                <span @click="centerDialogVisible = true">开通</span>
            </div>
            <div style="height: 60px;" v-show="searchBarFixed == true"></div>
            <ul id="slid_title" class="slid_title" :class="searchBarFixed == true ? 'isFixed' :'' ">
                <li
                    v-for="(item, index) in anchorBtnArr"
                    :key="index"
                    :class="{active : activeBtn == index}"
                    @click.stop="goAnchor('#anchor'+index,index)"
                >{{item}}</li>
            </ul>
        </div>
        <div class="content">
            <div class="slid_cont">
                <div id="tabs-content">
                    <ul class="ss_cont" id="anchor0">
                        <li v-for="(item, index) in holidayBookDetail.packDetail" :key="index">
                            <!-- <img :src="item.picthumb" alt="img"> -->

                            <!-- <img src="../../assets/images/jr_img.png" alt="img" > -->
                            <h3>套餐一: {{item.title}}</h3>
                            <p
                                class="zh"
                            >{{item.description.join("").length > 27? item.description.join("").substr(0,27) + "..." : item.description.join("")}}</p>
                            <p class="en"></p>

                            <!-- <dl>
                <dd>{{item.description.join("").length > 87? item.description.join("").substr(0,87) + "..." : item.description.join("")}}</dd>
                            </dl>-->
                            <div class="b1">
                                <!-- <p>{{item.title}}</p> -->
                                <span>
                                    球手
                                    <span class="color">￥{{item.player_price}}</span> 非球手
                                    <span class="color">￥{{item.nonplayer_price}}</span>
                                    <!-- <b>会员免费</b> -->
                                </span>
                                <a href="javascript:;" @click="centerDialogVisibleOther = true">预订</a>
                            </div>
                        </li>
                    </ul>
                    <dl class="ct_dl bdim_ct" id="anchor1">
                        <dt id="a2">产品详情</dt>
                        <dd v-for="(item, index) in holidayBookDetail.trip" :key="index">
                            <h3>{{item.title}}</h3>
                            <p
                                class="icon_d"
                                v-for="(items, index) in item.description"
                                :key="index"
                            >{{items}}</p>
                            <p>
                                <b>参考航班：</b> - 鹿儿岛 UO546 07:30-11:35
                            </p>
                            <p>
                                <b>温馨提示：</b> 日本时间比北京时间快1小时
                            </p>
                            <span>
                                <img :src="item.pic" alt="img">
                            </span>
                            <!-- <span><img src="../../assets/images/jr_img1.png" alt="img"></span> -->
                        </dd>
                        <!-- <dd>
							<h3>第二天（1月31日）：国内-爱丁堡</h3>
							<p class="icon_d">自行抵达香港国际机场，搭乘航班飞往鹿儿岛；</p>
							<p class="icon_d">抵达后前往雾岛高千穗牧场，烧烤午餐之后往雾岛神宫；观光后乘车回鹿儿岛太阳皇家酒店休息, 晚上于用会席料理晚餐；</p>
							<p><b>参考航班：</b> - 鹿儿岛 UO546 07:30-11:35</p>
							<p><b>温馨提示：</b> 日本时间比北京时间快1小时</p>
							<span><img src="../../assets/images/jr_img1.png" alt="img"></span>
						</dd>
						<dd>
							<h3>第三天（1月31日）：国内-爱丁堡</h3>
							<p class="icon_d">自行抵达香港国际机场，搭乘航班飞往鹿儿岛；</p>
							<p class="icon_d">抵达后前往雾岛高千穗牧场，烧烤午餐之后往雾岛神宫；观光后乘车回鹿儿岛太阳皇家酒店休息, 晚上于用会席料理晚餐；</p>
							<p><b>参考航班：</b> - 鹿儿岛 UO546 07:30-11:35</p>
							<p><b>温馨提示：</b> 日本时间比北京时间快1小时</p>
							<span><img src="../../assets/images/jr_img1.png" alt="img"></span>
                        </dd>-->
                    </dl>
                    <dl class="ct_dl" id="anchor2">
                        <dt id="a3">行程须知</dt>
                        <dd>
                            <p v-html="holidayBookDetail.order_note.order_note"></p>
                            <!-- <p>至少提前72小时预订</p> -->
                        </dd>
                        <dd>
                            <h3>费用包含：</h3>
                            <p v-html="holidayBookDetail.order_note.fee_include"></p>
                            <!-- <p>2.酒店：以上5晚所列酒店或同级基础房型，2人1间，含早餐及税</p>
							<p>3.2午餐+1晚</p>
							<p>4.球场：所列平日3场高尔夫(含果岭，球车4人用)</p>
							<p>（1）18洞，花园高尔夫俱乐部</p>
							<p>（2）18洞，知览高尔夫俱乐部</p>
							<p>（3）18洞，高牧高尔夫俱乐部</p>
							<p>5.交通：机场-酒店-球场往返接送</p>
							<p>6.行李：30KG行李+1个高尔夫球包拖运+飞机简餐</p>
							<p>7.领队：全程1位日语领队服务</p>
                            <p>8.保险：赠旅游意外保险（37万保额）</p>-->
                        </dd>
                        <dd>
                            <h3>费用不含：</h3>
                            <p v-html="holidayBookDetail.order_note.fee_exclude"></p>
                            <!-- <p>2.节假日附加费</p>
							<p>3.球车 4人/组，不足补差价</p>
							<p>4.不含签证、正餐、门票、个人消费及自费、航空公司临时通知增加的燃油附加费</p>
							<p>5.因违约、自身过错或自身疾病引起的人身和财产损失</p>
                            <p>6.因不可抗力引起的额外费用（如：自然灾害、罢工、境外当地政策、民俗禁忌、景点维修等）</p>-->
                        </dd>
                        <dd>
                            <h3>取消须知：</h3>
                            <p v-html="holidayBookDetail.order_note.cancel_rule"></p>
                        </dd>
                        <dd>
                            <h3>退款须知：</h3>
                            <p v-html="holidayBookDetail.order_note.fee_backnote"></p>

                            <!-- <p>请致电客服人员，提供您的相应退款信息：</p>
							<p>1.退款至银行账户，确认退款后的3~5个工作日内，完成退款。</p>
							<p>2.退款至现金账户，确认退款后的1~2个工作日，完成退款。</p>
                            <p>温馨提示：为了保障您的账户安全，节约您的等待时间，建议您退款至“我的现金账户”。</p>-->
                        </dd>
                    </dl>
                </div>
            </div>
        </div>

        <nav-bar></nav-bar>
        <el-dialog title="联系客服" :visible.sync="centerDialogVisible" width="30%" center>
            <div class="contact">400-817-8588</div>
            <p class="contact_tip">拨打上方电话，完成会员申请</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false" class="kown">我知道了</el-button>
            </span>
        </el-dialog>
        <div id="tanchuang">
            <el-dialog title :visible.sync="centerDialogVisibleOther" width="580px" center>
                <div class="pop-up">
                    <p>微信扫描下方二维码</p>
                    <p>即可完成报名</p>
                    <dl>
                        <dt>
                            <img src="../../assets/images/erwm.jpg" alt="绿盟微信">
                        </dt>
                        <dd>普信绿盟微信服务号</dd>
                    </dl>
                    <p id="customerTip">具体可预订详情以客服电话为准！</p>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import mHeader from "components/mHeader";
import navBar from "components/navBar";
import slider from "components/common/slider";
import spaceHeader from "components/common/spaceHeader";
import imgView from "components/common/imgView/imgView";

import { getTourismDetail } from "../../service/getData";

export default {
    components: {
        mHeader,
        navBar,
        slider,
        spaceHeader,
        imgView
    },
    data() {
        return {
            anchorBtnArr: ["行程预订", "产品详情", "行程须知"],
            activeBtn: 0,
            currentIndex: 2, //根据这个值制定当前页面属于哪个导航栏部分
            navColor: "white", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
            holidayBookId: this.$store.state.holidayBookId, //假日球场预定d
            holidayBookDetail: null,
            baseImg: require("../../assets/images/header.png"),
            centerDialogVisible: false,
            centerDialogVisibleOther: false,
            searchBarFixed: false,
            // showTip: false
            stylist: "",
            bannerList: []
        };
    },
    beforeMount() {
        getTourismDetail({
            id: this.holidayBookId
        }).then(res => {
            console.log(1111);
            this.holidayBookDetail = res.result;
            this.baseImg = this.holidayBookDetail.pack.picthumb;
            let user = this.holidayBookDetail.gallery;
            this.bannerList = user.map(function(user) {
                return user.url;
            });
            console.log(this.bannerList);
            console.log(this.bannerList);
        });
    },
    methods: {
        areYoushowTip() {
            this.showTip = true;
        },
        //锚点跳转
        goAnchor(selector, index) {
            this.activeBtn = index;
            document.documentElement.scrollTop = document.querySelector(selector).offsetTop - 60;
        },
        scrollToAnchor() {
            var obj = document.getElementById("slid_title"),
                tabsTitles = obj.children, // 导航
                tabsContents = document.getElementById("tabs-content").children, // 模块
                navLength =
                    document.getElementById("slid_title").childElementCount - 1;
            var st =
                document.body.scrollTop || document.documentElement.scrollTop;

            var len = navLength;
            for (; len > -1; len--) {
                var tabItem = tabsContents[len];
                if (
                    st >=
                    tabItem.offsetTop -
                        document.getElementById("slid_title").offsetHeight -
                        10
                ) {
                    for (var i = 0; i < tabsTitles.length; i++) {
                        var c = tabsTitles[i].className;
                        tabsTitles[i].className = c.replace("active", "");
                    }
                    tabsTitles[len].className =
                        tabsTitles[len].className + "active";
                    break;
                }
            }
        },
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            let offsetTop = document.querySelector("#searchBar").offsetTop;
            scrollTop > offsetTop
                ? (this.searchBarFixed = true)
                : (this.searchBarFixed = false);

            this.scrollToAnchor();
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
.header_content {
    height: 480px;
    background-repeat: none;
    background-position: center top;
    background: url("../../assets/images/header.png") no-repeat center top;
    background-size: cover;
    position: relative;
}
.isFixed {
    position: fixed;
    background-color: #fff;
    top: 0;
    z-index: 999;
}
/*内容部分*/
.bd_banner {
    // background: url("../../assets/images/banner.png") no-repeat center top;
    background-size: cover;
    width: 840px;
    height: 58px;
    position: absolute;
    bottom: 200px;
    z-index: 990;
    margin: 0 auto;
    // transform: translate(50%, 0);
    // transform: translate(300px, 0);
    left: 50%;
    margin: 0px 0 0 -420px;
}
.header_content dl {
    width: 1200px;
    left: 50%;
    transform: translate(-600px, 0);
    position: absolute;
    z-index: 10000;
    top: 90px;
}
// .bd_banner dl {
//   width: 1200px;
//   margin: 0px auto 128px;
// }
.bd_banner div {
    width: 769px;
    height: 100px;
    margin: 0px auto;
    color: #ffffff;
    margin-bottom: 216px;
    position: relative;
    z-index: 10;
}
.bd_banner div p {
    width: 719px;
    padding: 25px;
    background: #000000;
    opacity: 0.5;
    height: 50px;
    position: absolute;
    z-index: 15;
    top: 0px;
    left: 0px;
}
.bd_banner div h2 {
    font-size: 18px;
    line-height: 33px;
    text-align: center;
    position: absolute;
    z-index: 20;
    font-weight: normal;
    width: 100%;
    top: 20px;
}
.bd_banner div span {
    display: block;
    width: 100%;
    font-size: 15px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    position: absolute;
    z-index: 20;
    bottom: 20px;
}
.menu {
    font-size: 14px;
    margin-bottom: 10px;
    color: #ffffff;
}
.menu a {
    color: #ffffff;
}
.zx_cont {
    background: #fafafa;
    height: 542px;
    padding: 30px 0px;
    width: 100%;
    overflow: hidden;
}
.vd_list {
    overflow: hidden;
    width: 1200px;
    margin: 0px auto;
}

.content {
    width: 1200px;
    margin: 45px auto 45px;
    overflow: hidden;
}
.slid_title {
    width: 1200px;
    font-size: 22px;
    line-height: 30px;
    overflow: hidden;
    text-align: center;
    margin-bottom: 0px;
    border-bottom: 1px solid #f1f1f0;
}
.jr_open {
    font-size: 18px;
    color: #906448;
    line-height: 30px;
    margin: 0px 0px 45px;
    text-align: center;
}
.jr_open span {
    display: inline-block;
    width: 81px;
    height: 31px;
    background: #906347;
    line-height: 31px;
    font-size: 17px;
    border-radius: 20px;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
}
.slid_title li {
    color: #999999;
    text-align: center;
    width: 33.33%;
    padding: 0px 0px 20px;
    display: inline-block;
    cursor: pointer;
}
.slid_title li.active {
    color: #8f6448;
    border-bottom: 2px solid #8f6448;
}
.slid_cont dl.ct_dl {
    float: left;
    width: 100%;
}
.slid_cont dl.ct_dl dt {
    line-height: 25px;
    font-size: 20px;
    font-weight: bold;
}
.slid_cont dl.ct_dl dd {
    font-size: 16px;
    color: #333333;
    line-height: 36px;
}
.slid_cont dl.bdim_ct dd {
    border-bottom: 1px solid #f1f1f1;
    padding: 30px 0;
    overflow: hidden;
}
.slid_cont dl.ct_dl dd h3 {
    line-height: 28px;
    margin: 5px 0px;
    font-size: 18px;
    color: #333333;
    width: 100%;
    float: left;
    font-weight: normal;
    color: #8f6448;
    font-size: 20px;
}
.slid_cont dl.ct_dl dd p {
    color: #666666;
    width: 940px;
    float: left;
    padding-left: 10px;
}
.icon_d {
    background: url("../../assets/images/d.png") no-repeat left center;
    background-size: 6px 6px;
}
.slid_cont dl.ct_dl dd span {
    display: inline-block;
    margin-left: 20px;
}
.slid_cont dl.ct_dl dd span img {
    width: 223px;
    height: 148px;
}
.ss_cont {
    position: relative;
    overflow: hidden;
    float: left;
    width: 100%;
}

.ss_cont li {
    width: 588px;
    height: 178px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    margin-bottom: 40px;
    overflow: hidden;
    float: left;
    margin-right: 20px;
    position: relative;
}
.ss_cont li:nth-child(2) {
    margin-right: 0px;
}
.ss_cont li h3 {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding: 0px 20px;
    background: #f6f6f6;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
}
.ss_cont li .zh {
    padding: 0px 20px;
    height: 32px;
    line-height: 32px;
    font-size: 18px;
}
.ss_cont li .en {
    padding: 0px 20px;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    color: #666666;
}
.ss_cont li img {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 10;
}

.ss_cont li div {
    //   padding: 20px;
    //   height: 55px;
    //   position: absolute;
    //   bottom: 0px;
    //   left: 0px;
    //   color: #333333;
    //   width: 548px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
}
.ss_cont li div p {
    font-size: 20px;
    line-height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ss_cont li div span {
    font-size: 18px;
    //   height: 30px;
    //   display: block;
    //   float: left;
    //   margin-top: 6px;
}
.ss_cont div span.color {
    color: #ed7063;
}
.ss_cont li div span b {
    display: block;
    font-size: 10px;
    color: #8f6448;
    float: right;
    width: 70px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #8f6448;
    font-weight: normal;
    margin-left: 20px;
    position: relative;
    top: 2px;
}
.ss_cont li div a {
    display: block;
    background: #ed7063;
    float: right;
    width: 84px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    font-size: 17px;
    color: #ffffff;
    margin-right: 20px;
}
#a3 {
    padding-top: 30px;
}
.contact {
    font-size: 44px;
    height: 56px;
    line-height: 56px;
    color: #333333;
    text-align: center;
}
.contact_tip {
    height: 31px;
    line-height: 31px;
    font-size: 18px;
    text-align: center;
}
.kown {
    width: 160px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    border-radius: 100px;
    background: -webkit-linear-gradient(
        #deb58f,
        #a37749
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#deb58f, #a37749); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#deb58f, #a37749); /* Firefox 3.6 - 15 */
    background: linear-gradient(#deb58f, #a37749); /* 标准的语法 */
}
.el-dialog__headerbtn .el-dialog__close:hover {
    color: #a37749;
}
.clubbotton {
    width: 504px;
    height: 80px;
    margin: 0 auto 80px auto;
    background: url("../../assets/images/clubbotton.png") no-repeat -10px -3px;
}

#customerTip {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #666666;
}
/*弹窗样式*/
.pop-up {
    width: 100%;
    margin-bottom: 20px;
}
.pop-up p {
    width: 226px;
    line-height: 31px;
    color: #333333;
    margin: 0px auto;
    font-size: 18px;
    text-align: center;
}
.pop-up dl {
    text-align: center;
}
.pop-up dl dt img {
    border: 1px solid #646464;
    border-radius: 5px;
    margin: 10px 0px;
}
.pop-up dl dd {
    font-size: 15px;
    color: #666666;
}
</style>
<style type="text/css">
#tanchuang .el-dialog__body {
    border: none;
}
</style>
