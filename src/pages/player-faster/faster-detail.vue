<template>
    <div v-if="fasterBookDetail">
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
			<!-- <slider :imgUrl="bannerList"></slider> -->
            <imgView :imgList="bannerList" :imgHeight="388" :imgWidth="698"/>    
			<dl>
				<dt class="menu"><router-link tag="a" to="/player-faster">菁英畅打 </router-link> > 详情页</dt>
			</dl>
            <div class="bd_banner">
				<div>
					<h2>{{fasterBookDetail.name}}</h2>
					<span>球场特色：{{fasterBookDetail.facility}}</span>
				</div>
			</div>
        </div>
        
        <div class="content">
			<div class="jr_open">加入俱乐部立享“会员价”待遇<span @click="centerDialogVisible = true">开通</span></div>
            <div id="ballSpaceDetail">
                <div class="courtDetail">
                    <ul class="detailOne">
						<li>球场数据：{{fasterBookDetail.data}}</li>
						<li>球道长度 ：{{fasterBookDetail.length}}</li>
						<li>球道草种 ：{{fasterBookDetail.lane_grass}}</li>
						<li>球场模式 ：{{fasterBookDetail.mode}}</li>
						<li>建立时间 ：{{fasterBookDetail.build_time}}</li>
					</ul>
					<ul class="detailTwo">
						<li>场地面积 ：{{fasterBookDetail.area}}</li>
						<li>设计师：{{fasterBookDetail.designer}}</li>
						<li>球场电话 ：{{fasterBookDetail.tel}}</li>
						<li>球场地址 ：{{fasterBookDetail.address}}</li>
					</ul>
                </div>
                <div class="courtWether">
                    <ul class="weather" v-if="this.weatherListLen">
						<li>
							<img src="../../assets/images/noWether.png" alt="" width="480px" height="120px">
						</li>
					</ul> 
                    <ul class="weather" v-else>
						<li v-for="(item, index) in weatherList" :key="index">
							<span v-if="index == 0">今日</span>
							<span v-else-if="index == 1">明日</span>
							<span v-else>{{item.day1}}</span>
							<span><img :src="item.pic"></span>
							<span>{{item.overview}}</span>
							<p style="text-align: center;">{{item.temperature_min}}~{{item.temperature_max}}℃</p>
						</li>
					</ul> 
                </div>
            </div>
			<div class="head_slide">
				<span>搜索结果</span>
                <el-date-picker v-model="date" type="date" placeholder="选择日期" class="inline_ser dataPick" format="yyyy - MM - dd " value-format="yyyy-MM-dd" @change="clickGetOtherThreeDays()"></el-date-picker>			
			</div>
			<div v-for="(item, index) in priceTotalList" :key="index">
				<div class="time" v-if="index == 0">{{item.date}}   </div>
				<div class="time" v-if="index == 1">{{item.date}}   </div>
				<div class="time" v-if="index == 2">{{item.date}}   </div>
				<div class="cont">
					<div class="cont_all" v-for="(items, indexs) in item.prices" :key="indexs">
						<!-- <img src="../../assets/images/jr_img1.png" alt="1"> -->
						<div class="intro">
							<h3>{{items.timePeriod}}{{items.payway}}</h3>
							<p class="txt">{{items.label}}</p>
							<p class="pop">
								<span class="price">¥{{items.price}}</span>
								<!-- <span class="vipTip">会员价¥300</span>  -->
								<span class="book" @click="centerDialogVisibleOther = true">预订</span>
							</p>
						</div>
					</div>
				</div>
				<!-- 
					<div class="cont">
						<div class="cont_all">
							<img src="../../assets/images/jr_img1.png" alt="1">
							<div class="intro">
								<h3>你肯定不知道</h3>
								<p class="txt">卧室真的不知道</p>
								<p class="pop"><span class="price">55555</span> <span class="book" @click="centerDialogVisibleOther = true">预订</span></p>
							</div>
						</div>
					</div> 
				-->
			</div>
			
		</div>
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
        <el-dialog
            title=""
            :visible.sync="centerDialogVisibleOther"
            width="580px"
            center>
            <div class="pop-up">
			<p>微信扫描下方二维码</p>
			<p>即可完成报名</p>
			<dl>
				<dt><img src="../../assets/images/erwm.jpg" alt="绿盟微信"></dt>
				<dd>普信绿盟微信服务号</dd>
			</dl>
            <p id="customerTip">具体可预订详情以客服电话为准！</p>
		</div>
        </el-dialog>
    </div>
</template>
<script>
    import mHeader from 'components/mHeader'
    import navBar from 'components/navBar'
	import slider from 'components/common/slider'
    import spaceHeader from 'components/common/spaceHeader'
    import imgView from 'components/common/imgView/imgView'
	import {getBallCourtDetail, getPriceAfterThreeDays, getCityWeather, getOtherThreeDays} from "../../service/getData";
	
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
				anchorBtnArr: ["行程预订", "产品详情", "行程需知"],
				bannerList: [],
				activeBtn: 0,
                currentIndex: 1,    //根据这个值制定当前页面属于哪个导航栏部分
				navColor: 'white',  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
				fasterBookId: this.$store.state.fasterBookId,    //假日球场预定d
				fasterBookDetail: null,
				baseImg: "../../assets/images/header.png",
				centerDialogVisible: false,
				centerDialogVisibleOther: false,
				date: new Date(new Date().getTime() + 24*60*60*1000),
				priceTotalList: [],  //价格总列表
				city: "",
                weatherList: [],
                weatherListLen: false
                // showTip: false
            }
		},
		beforeMount(){
			getBallCourtDetail({
				id: this.fasterBookId
			}).then((res)=> {
                this.fasterBookDetail = res.result
                this.bannerList = this.fasterBookDetail.galleriesArray
                // this.bannerList = [require("../../assets/images/cdxq_banner.png")]
				this.city = this.fasterBookDetail.city
				getCityWeather({
					cityName: this.city,
					days: 5
				}).then((res) =>{
                    if(res.returnCode == 200){
                        this.weatherList = res.result.weather
                        this.weatherListLen = false
                    }else{
                        this.weatherListLen = true;
                    }
                    console.log(this.weatherListLen)
				})
			})
			getPriceAfterThreeDays({
				id: this.fasterBookId,
				date: this.date
			}).then((res) => {
				this.priceTotalList = res.result.prices
			})
		},
		methods: {
			areYoushowTip(){
				this.showTip = true
			},
			//锚点跳转
			goAnchor(selector, index) {
				this.activeBtn = index;
				document.documentElement.scrollTop = document.querySelector(selector).offsetTop;
			},
			clickGetOtherThreeDays(){
				getOtherThreeDays({
					id: this.fasterBookId,
					date: this.date
				}).then((res) =>{
					this.priceTotalList = res.result.prices
				})
            },	
		}
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
		height: 480px;
		background-repeat: none;
		background-position: center top;
        background: url("../../assets/images/cdxq_banner.png") no-repeat center top;
		background-size: cover;
		position: relative;
    }
    .bd_banner{
        // background: url("../../assets/images/banner.png") no-repeat center top;
        background-size:cover;
        width:840px;
        height: 58px;
        position: absolute; 
        bottom: 225px;
        z-index: 990;
        margin: 0 auto;
        // transform: translate(50%, 0);
        // transform: translate(300px, 0);
        left: 50%;
        margin: 0px 0 0 -420px;
    }
    .header_content dl{ 
        width: 1200px;
        left: 50%;
        transform: translate(-600px, 0);
        position: absolute;
        z-index: 10000;
        top: 90px;
    }
			.bd_banner div{
        padding: 41px 0px;              
        // height: 58px;
				// width: 803px;
				margin: 0px auto;
				color: #FFFFFF;
				background: #000000;
				opacity: 0.5;
				overflow: hidden;
			}
			.bd_banner div h2{
                text-align: center;
				font-size: 18px;
				line-height: 26px;
				color: #FFFFFF;
			}
			.bd_banner div span{
				display: block;
				// width: 100%;
				font-size: 14px;
				line-height: 26px;
				margin:0px 0px 8px;
                color: #FFFFFF;
                padding: 0 80px;
                text-align: center;
			}
			.bd_banner div .list_ul{
				width: 200px;
				float: left;
				line-height: 22px;
				font-size: 14px;
				color: #FFFFFF;
			}
			.bd_banner div .list_ul li{
				width: 200px;
				float: left;
			}
			.bd_banner div .list_weather{
				width: 400px;
				float: right;
			}
			.bd_banner div .list_weather li{
				width:50px;
				float: left;
				margin: 0px 15px;
			}
			.bd_banner div .list_weather li span{
				display: block;
				font-size: 14px;
				color: #FFFFFF;
				line-height: 22px;
				margin: 0px;
				text-align: center;
			}
			.bd_banner div .list_weather li span img{
				width: 50px;
				height: 50px;
				margin: 5px 0px 8px;
			}
			.menu{
				font-size: 14px;
                margin-bottom:10px;
                color: #FFFFFF;
			}
			.menu a{ color: #FFFFFF;}
			.zx_cont{
				background: #FAFAFA;
				height: 542px;
				padding: 30px 0px;
				width: 100%;
				overflow: hidden;
			}
			.vd_list{ overflow: hidden; width:1200px; margin: 0px auto;}
			
			
			
			.jr_open{ font-size: 22px; color: #906448;line-height: 30px; margin: 0px 0px 46px; text-align: center;}
			.jr_open span{ display: inline-block; width: 101px; height: 37px; background: #906347; line-height: 37px;
			font-size: 20px; border-radius: 20px; color: #fff; margin-left: 20px; cursor: pointer;}
			.head_slide {
				margin-top:53px;
				width: 100%;
				height: 30px;
			}
			
			.head_slide span {
				display: block;
				font-size:28px;
				float: left;
				margin-right: 60px;
			}
			
			.head_slide select {
				border: 0px;
				font-size:20px;
				height:28px;
				line-height: 28px;
				margin-right: 60px;
				color: #666666;
			}
			
			.time {
				color: #666666;
				font-size: 18px;
				height: 21px;
				line-height: 21px;
				margin: 20px 0px 28px;
            }
            .contact{
        font-size: 44px;
        height: 56px;
        line-height: 56px;
        color: #333333;
        text-align: center;
	}
	.content {
		width: 1200px;
		margin: 50px auto;
		overflow: hidden;
	}
	.cont{
		display: flex;
		flex-wrap: wrap;
        flex-direction: flex-start;
        justify-content: space-between;
		margin: 0px 0px 20px 0px;
	}
	.cont>div{
		margin: 0px 0px 20px 0px;
		cursor: pointer;
	}
	.cont>div:nth-child(3n){
		margin-right: 0px;
	}
	.cont img{
		width: 386px;
		height: 216px;
		vertical-align: middle;
	}
	.cont h3{
        height: 48px;
        line-height: 48px;
		font-size: 18px;
        color: #333;
        background: #F6F6F6;
        // margin-bottom: 20px;
        padding: 0 20px;
	}
	.cont .intro{
        width: 588px;
	    font-size: 18px;
		height: 145px;
		// padding: 20px;
        border: 1px solid #EEEEEE;
        border-radius: 7px;
	}
	.cont p.txt{
        font-size: 16px;
        padding: 20px 20px 10px 20px;        
		color: #999999;
		// margin-bottom: 10px;

	}
	.cont p.pop{
        padding-left: 20px;
		font-size: 16px;
		color: #999999;
	}
	.cont p span.price{
        font-size: 18px;
		color: #ED7063;
	}
	.cont p span.book{
		background: #ED7063;
		color: #fff;
		margin-left: 350px;
		display: inline-block;
		width: 80px;
		height: 30px;
		border-radius: 3px;
		font-size: 15px;
		text-align: center;
		line-height: 30px;
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
	/*弹窗样式*/
     .pop-up{ 
		width: 100%;
		margin-bottom: 20px;
	}
	.pop-up p{
		width: 226px;
		line-height: 31px;
		color:#333333;
		margin: 0px auto;
		font-size: 18px;
		text-align: center;
	}
	.pop-up dl{
		text-align: center;
	}
	.pop-up dl dt img{
		border:1px solid #646464;
		border-radius: 5px;
		margin: 10px 0px;
	}
	.pop-up dl dd{
		font-size: 15px;
		color: #666666;
		
	}
	.vipTip{
		margin-left: 10px;
		color: #ED7063;
		font-size: 12px;
	}
	#customerTip{
        width: 100%;
        text-align: center;
        font-size: 14px;
		color: #666666;
    }

    //迭代球场详情的修改
    #ballSpaceDetail{
        width: 1200px;
        height: 170px;
        display: flex;
        justify-content: space-between;
        margin-top: 39px;
        margin-bottom: 61px;
    }
    #ballSpaceDetail div{
        width: 480px;
        height: 120px;
        padding: 25px 55px;
        display: flex;
        justify-content: space-between;
        border: 1px #DFDFDF solid;
        border-radius: 7px;
        color: #333333 ;
    }
    #ballSpaceDetail div .detailOne{
        width: 192px;
    }
    #ballSpaceDetail div .detailTwo{
        width: 252px;
    }
    #ballSpaceDetail div.courtDetail ul li{
        // height: 24px;
        line-height: 24px;
        font-size: 14px;
    }
    #ballSpaceDetail div.courtWether ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    #ballSpaceDetail div.courtWether ul li{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
</style>
