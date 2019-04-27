<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
            <slider :imgUrl="bannerList"></slider>
        </div>
        <div class="content">
			<div class="cont_jjcd">
				<h2 class="ct_title"><img src="../../assets/images/h1.png" alt="菁英畅打"></h2>
				<router-link class="more" to="/player-faster"><a href="javascipt:;">更多</a></router-link>
				<ul>
					<li v-for="(item, index) in fasterList" :key="index">
						<a href="javascript:;" @click="goToFasterDetail(item.id)">
							<!-- <img src="../../assets/images/img1.png" alt="img"> -->
                            <img :src="fasterImgList[index]" :alt="item.name">
							<!-- <img :src="item.logo" :alt="item.name"> -->

							<dl>
								<dt>{{item.name}}</dt>
								<dd>
									<p>直线距离 {{getDistance({log: item.longitude , lat: item.latitude})}}km</p>
									<span>¥{{item.minPrice}}</span><b style="margin-left: 3px;color: #3F3F3F;">起</b>
                                    <!-- <span class="s">会员价 ¥300</span> -->
								</dd>
							</dl>
						</a>
					</li>
				</ul>
			</div>
            <div>

            </div>
			<div class="cont_jjjr">
				<h2 class="ct_title"><img src="../../assets/images/h2.png" alt="菁英假日"></h2>
				<router-link tag="a" class="more" to="/player-holiday"><a href="javascipt:;">更多</a></router-link>

				<ul id="holidayContent">
					<li v-for="(item, index) in holidayList" :key="index">
						<a href="javascript:;" @click="goToHolidayDetail(item.id)">
							<!-- <img src="../../assets/images/img4.png" alt="img"> -->
                            <div class="is_preferentialDiv">
                                <img :src="item.picthumb" alt="item.title">
                                <img v-if="item.is_preferential == 1" src="../../assets/images/is_prefer.png" alt="特惠" class="is_preferential">
                            </div>
							
                            <div class="descript">
                                <h5>{{item.title}} - {{item.intro}}</h5>
                                <div class="pip">
                                    <span>{{item.intro}}</span>
                                </div>
                                <div class="pip">
                                    <span class="pipOne">¥{{item.price}}<span id="black">起</span></span>
                                    <!-- <span class="pipTwo">会员免费</span> -->
                                </div>
                            </div>
						</a>
					</li>
					<!-- <li>
						<a href="#">
							<img src="../../assets/images/img5.png" alt="img">
							<dl>
								<dt>海南海口观澜湖高尔夫3晚3场球</dt>
								<dd>
									<p>富有海滨自然旖旎风光的城市—海口</p>
									<span>¥2490</span>
								</dd>
							</dl>
						</a>
					</li> -->
				</ul>
			</div>
			<div class="cont_jjjr cont_ct1">
				<h2 class="ct_title"><img src="../../assets/images/h3.png" alt="菁英赛事"></h2>
				<ul>
					<li v-for="item in matchList" :key="item.id" @click="goToMatchDetail(item.id)">
                            <a href="javascript:;">
                                <b :class='item.status == 5? "b1": "b2"'>{{item.statusVo}}</b>
                                <img :src="item.eventImgs.split(',')[0]" :alt="item.name" />
                                <!-- <img src="../../assets/images/img6.png" alt="img"> -->
                                <dl>
                                    <dt>{{item.name}}</dt>
                                    <dd>
                                        <p>开始时间：{{transfromTime(item.racingStartTime)}}  结束时间：{{transfromTime(item.racingEndTime)}}</p>                                        
                                    </dd>
                                </dl>
                            </a>
					</li>
				</ul>
				<div class="value_ct">
					<div class="val_l">
						<dl>
							<dt>{{showCurrentTime}}</dt>
							<dd>
								<span>{{currentweek}}</span>
								<p>{{currentNum}}场比赛</p>
								<router-link tag="a" to="/player-match"> 查看全部赛程</router-link>
							</dd>
						</dl>
						<div class="b1 pre" @click="addDay"></div>
						<div class="b2 pre" @click="reduceDay"></div>
					</div>
					<div class="val_r">
                        <img v-if="currentMatchList.length == 0" src="../../assets/images/nomatchbg.png" width="100%">
                        <div class="swiper-container-other" v-if="currentMatchList.length != 0">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in currentMatchList" :key="index" @click="goToMatchDetail(item.id)">
                                    <div class="swp_cont">
										<span :class='["pre-ct", item.status == 5? "b2": "b1"]'>{{item.statusVo}}</span>
										<img :src="item.eventImgs.split(',')[0]" :alt="item.name" />
										<dl>
											<dt>{{item.name}}</dt>
										    <dd>开始时间：{{transfromTime(item.racingStartTime)}}   结束时间：{{transfromTime(item.racingEndTime)}}</dd>
										</dl>
										<p></p>
									</div>
                                </div>
                            </div>
                            
                            <div class="swiper-button-next"></div>
                            
                        </div>
					</div>
				</div>
			</div>
			<div class="cont_xyzx">
				<h2 class="ct_title"><img src="../../assets/images/h5.png" alt="新闻动态"></h2>
                <router-link class="more" to="/news"><a href="javascipt:;">更多</a></router-link>
				<ul id="homeNewList">
                    <li v-for="item of newsList.slice(0,6)" :key="item.id" @click="toNewsDetail(item.id)">
                        <p class="newTitle"><span class="dot"></span>{{item.title}}</p>
						<div class="newTime">{{item.pushTimeStr}}</div>
                    </li>
				</ul>
			</div>
		</div>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
    import mHeader from 'components/mHeader'
    import navBar from 'components/navBar'
    import slider from 'components/common/slider'
    import {homeData, homeBanner, matchList, currentTime, currentMatch, informationList,videoList, searchBallCourtByCityOrdate, getTourismList, getHolidayCityData} from "../../service/getData";
    import {getCurrentTime, getWeek, toUpperChinese, getFormatDate} from "../../common/js/util";

    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import 'swiper/dist/js/swiper.min.js'
    import getCurrentCityName from 'common/js/getUserLocation'
    export default {
        components: {
            mHeader,
            navBar,
            slider,
        },
        data() {
            return {
                cityValue: '',      //当前所在的城市
                bannerList: [],  
                fasterList: [],    //畅打首页展示列表
                
                fasterImgList: [require("../../assets/images/fasterImg_one.png"), require("../../assets/images/fasterImg_two.png"), require("../../assets/images/fasterImg_four.png"), require("../../assets/images/fasterImg_three.png")],    //畅打图片列表
                holidayList: [],   //假日首页展示的列表
                matchList: [],    //赛事首页展示列表
                currentTime: "2018-12-21",    //交互需要传的日期
                showCurrentTime: "12月23日",  //展示的日期
                currentMatchList: [], //当前日期下有几场比赛
                currentweek: "一",    //星期几
                currentNum: "零",    //场次数量
                currentIndex: 0,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'white',  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
                newsList:[],
                newsLength:6,//设计图上展示的6条数据
                videoList:[],
                videoLength:3,
                pointA: {}
            }
        },
        beforeCreate(){
            currentTime().then((res) => {
                this.currentTime = res.result.time;
                this.showCurrentTime =  getCurrentTime(new Date(res.result.time).getTime())
                this.currentweek = getWeek(new Date(res.result.time).getTime())
                this.getTimeMatchList()
            })

        },
        beforeMount() {
            this.getCurrentCity()
            homeBanner().then((res) => {
                this.bannerList = res.result
            })
            //获取首页展示的菁英赛事的列表
            matchList({
                startPage: 1,
                pageSize: 2,
            }).then((res)=>{
                this.matchList = res.result.list;
            })
            // window.addEventListener('scroll', this.pageScroll)
        },
        mounted() {
            this.newsListFun()
            // this.videoListFun()
            // 通过浏览器定位获得我的经纬度
        },
        updated(){
            this.home = new Swiper ('.swiper-container-other', {
                loop: true, // 循环模式选项
                autoplay: false,//等同于以下设置
                slidesPerView : 1.5,
                spaceBetween : 20,
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                // navigation: {
                //     nextEl: '.swiper-button-next'
                // }
            })  
            
        },
        computed: {

        },
        methods: {
            // 获取新闻列表
            newsListFun(){
                informationList({
                    startPage: 1,
                    pageSize: 6
                }).then((res) => {
                    this.newsList = res.result.data;
                })
            },
            // 获取视频列表
            // videoListFun(){
            //     videoList({
            //         startPage: 1,
            //         pageSize: 1
            //     }).then((res) => {
            //     this.videoList = res.result.list;
            //     })
            // },
            //通过Vuex存储咨询列表id
            toNewsDetail(id){
                this.$store.commit('newsListId', id)
                this.$router.push('/news-details')
            },
            toVideoDetail(id){
                this.$store.commit('videoListId', id)
                this.$router.push('/news-video')
            },
            //此组件多次使用到请求赛事列表方法
            getTimeMatchList(){
                currentMatch({time: this.currentTime}).then((res) => {
                    this.currentNum = toUpperChinese(res.result.total)
                    this.currentMatchList = res.result.list
                })
            },
            //加一天
            addDay(){
                this.currentTime = getFormatDate(parseInt(new Date(this.currentTime).getTime()) - 86400000)
                this.showCurrentTime =  getCurrentTime(new Date(this.currentTime).getTime())
                this.currentweek = getWeek(new Date(this.currentTime).getTime())
                this.getTimeMatchList()
            },
            //减一天
            reduceDay(){
                this.currentTime = getFormatDate(parseInt(new Date(this.currentTime).getTime()) + 86400000)
                this.showCurrentTime =  getCurrentTime(new Date(this.currentTime).getTime())
                this.currentweek = getWeek(new Date(this.currentTime).getTime())
                this.getTimeMatchList()
            },
            //通过百度地图获取当前城市
            getCurrentCity() {
                getCurrentCityName().then((res) => {
                    this.cityValue = "北京"
                    this.pointA = res.center
                })
            },
            // getMyPoint () {
            //     var self = this
            //     var geolocation = new BMap.Geolocation()
            //     geolocation.getCurrentPosition(function (res) {
            //         self.pointA = new BMap.Point(res.point.lng, res.point.lat)  // 通过浏览器获得我的经纬度
            //     })
            // },
            
            getDistance (itemPoint) {
                var map = new BMap.Map('')
                var pointB = new BMap.Point(parseFloat(itemPoint.log), parseFloat(itemPoint.lat))  // 球场的经纬度
                var distance = (map.getDistance(this.pointA, pointB) / 1000).toFixed(2) // 保留小数点后两位
                return distance
            },
            goToFasterDetail(id){
				this.$store.commit("fasterBookId", id)
				this.$router.push("/faster-detail")
            },
            goToHolidayDetail(id){
				this.$store.commit("holidayBookId", id)
				this.$router.push("/holiday-detail")
            },
            //查看赛事详情
            goToMatchDetail(id){
				this.$store.commit("matchBookId", id)
				this.$router.push("/match-detail")
            },
            //时间戳转换
          transfromTime(time){
            return getFormatDate(time)
          }
        },
        watch: {
            cityValue: function(){
                let _this = this;
                _this.$nextTick(function () {
                    //获取首页展示的菁英假日列表
                    getHolidayCityData().then((response) => {
                        getTourismList({
                            cityId: response.result.map((item, index, array) => item.id).join(),
                            startPage: 1,
                            pageSize: 4
                        }).then((res)=> {
                            this.holidayList = res.result.listData
                        })
                    })
                    //获取首页展示的菁英畅打列表
                    searchBallCourtByCityOrdate({
                        cityName: this.cityValue,
                    }).then((res) => {
                        this.fasterList = res.result.slice(0,4)
                    })  
                });
            }
        },
        
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 480px;
        // background: url("../../assets/images/header.png") no-repeat center top;
        // background-size: cover;
    }
    /*内容部分*/
    .content{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .ct_title{
        text-align: center;
        height: 47px;
        margin-top: 45px;
    }
    .ct_title img{
        display: inline-block;
    }
    .cont_jjcd{ margin: 0px;}
    .cont_jjcd span{
        display: block;
        text-align: right;
    }
    .cont_jjcd ul li{
        width: 282px;
        height: 351px;
        float: left;
        margin-right: 24px;
    }
    .cont_jjcd ul li:nth-child(4){
    	margin-right: 0px;
    }
    .cont_jjcd ul li a{
        display: block;
        height: 100%;
        width: 100%;
        position: relative;
    }
    .cont_jjcd ul li a img{
        width: 282px;
        height: 351px;
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .cont_jjcd ul li a dl{
        width: 207px;
        height: 55px;
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        padding: 15px 20px;
        right: 0px;
        bottom: 35px;
    }
    .cont_jjcd ul li a dl dt{
        font-size: 16px;
        color: #333333;
        line-height: 24px;
        
    }
    .cont_jjcd ul li a dl dd p{
        font-size: 12px;
        color: #999999;
        line-height: 12px;
        
    }
    .cont_jjcd ul li a dl dd span{
        display: inline-block;
        text-align: left;
        color: #ED7063;
        font-size: 16px;
        
    }
    .cont_jjcd ul li a dl dd span.s {
        margin-left: 10px;
        font-size: 12px;
        color: #ED7063; 
    }
    .more{
        font-size: 18px;
        display: block;
        height: 25px;
        line-height: 25px;
        margin: 20px 0px 30px;
        text-align: right;
        
        width:100%;
    }
    .more a{
    	display: block;
        color: #999999;
        background: url("../../assets/images/Group13.png") no-repeat 1160px center;
        background-size:66px 66px;
        padding-right: 20px;
        
    }
    //精英假日样式
    .cont_jjjr{
        position: relative;
        overflow: hidden;
        float: left;
        width: 100%;
    }
    .cont_jjjr ul li{
        width: 585px;
        // height: 460px;
        border: 1px solid #F1F1F1;
        float: left;
    }
    .cont_jjjr ul li:nth-child(2){
    	float: right;
    }
    .cont_jjjr ul li a{
        display: block;
        height: 100%;
        width: 100%;
    }
    .cont_jjjr ul li a img{
        width: 585px;
        height: 313px;
        display: block;
    }

    //菁英赛事下面介绍的样式
    .cont_jjjr ul li a dl{
        height: 70px;
        padding: 15px;
        background: #FFFFFF;
        border-top: 1px solid #F1F1F1;
    }
    .cont_jjjr ul li a dl dt{
        font-size: 22px;
        color: #333333;
        line-height: 30px;
        overflow: hidden;
        white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: normal;
        
    }
    .cont_jjjr ul li a dl dd p{
        font-size: 15px;
        color: #999999;
        line-height: 23px;
        float: left;
        width: 80%;
        
    }
    .cont_jjjr ul li a dl dd span{
        display: block;
        text-align: left;
        color: #f84000;
        font-size: 22px;
        float: right;        
    }




    .left{float: left;}
    .right{ float: right;}
    .cont_ct1{
        /*background: url("../../assets/images/bg_back.png") no-repeat center bottom;
        background-size:100%;*/
    }
    .cont_ct1 .ct_title,.cont_jyhd .ct_title{
        margin-bottom: 50px;
    }
    .cont_ct1 ul li a{
        position: relative;
    }
    .cont_ct1 ul li a b{
        display:inline-block;
        position: absolute;
        padding: 0px 10px;
        width: 70px;
        height: 30px;
        line-height: 30px;
        color: #FFF;
        left: 0px;
        top: 0px;
        z-index: 10;
        text-align: center;
        font-size: 14px;
    }
    .cont_ct1 ul li a .b1{
        background: url("../../assets/images/matchstop.png") no-repeat 0px 0px;
        background-size: 90px 30px;
        // border-bottom-right-radius:20px;
		// border-top-right-radius:20px;
    }
    .cont_ct1 ul li a .b2{
        background: url("../../assets/images/matchstart.png") no-repeat 0px 0px;
        background-size: 90px 30px;
    }
    .value_ct{
        overflow: hidden; width: 100%; margin-top: 20px; float: left;
    }
    .val_l{
        background: #fff;
        width: 326px;
        height: 259px;
        float: left;
        position: relative;
        padding-top: 40px;
        border:1px solid #F1F1F1;
    }
    .val_l dl dt{
        color: #333333;
        font-size: 28px;
        line-height: 46px;
        text-align: center;
    }
    .val_l dl dd span{
        display: block;
        font-size: 18px;
        color: #666666;
        line-height: 32px;
        border-bottom:1px solid #E5E5E5;
        width: 131px;
        margin: 0px auto;
        text-align: center;
        padding-bottom: 13px;
    }
    .val_l dl dd p{
        color: #906448;
        font-size: 23px;
        line-height: 36px;
        text-align: center;
        margin-top:13px;
    }
    .val_l dl dd a{
        display: block;
        background: url("../../assets/images/button.jpg") no-repeat center center;
        background-size:197px 49px;
        font-size: 16px;
        color: #FFFFFF;
        width: 197px;
        height: 49px;
        line-height: 49px;
        margin: 22px auto 0px;
        text-align: center;
    }
    .val_l .pre{
        display: block;
        width: 65px;
        height: 66px;
        position: absolute;
        cursor: pointer;
    }
    .val_l .pre.b1{
        background: url("../../assets/images/Group14.png") no-repeat center bottom;
        background-size:65px 66px;
        left: 31px;
        top: 75px;
    }
    .val_l .pre.b2{
        background: url("../../assets/images/Group13.png") no-repeat center bottom;
        background-size:65px 66px;
        right: 31px;
        top: 75px;
    }
    .val_r{
        width: 850px;
        float: right; 
        position: relative;
        height: 300px;
        overflow: hidden;
        // background: url("../../assets/images/nomatchbg.png") no-repeat center center;
    }
    .swiper-button-next, .swiper-container-rtl{
        position: absolute;
        display: block;
        background: url("../../assets/images/bg_group.png") no-repeat right center;
        background-size:75px 75px;
        width: 75px;
        height: 75px;
        right: -15px;
        top:120px;
        cursor: pointer;
        overflow: hidden;
        z-index: 200;  
    }
    
    .val_r ul{
    	width:1820px;
    	overflow: hidden;
    	position: absolute;
    	left: 0px;
    	top: 0px;
    	z-index: 30;
    	height: 300px;
    }
    .val_r ul li{
        width: 553px;
        height: 296px;
        float: left;
        margin-right: 10px;
    }
    .val_r ul li:nth-child(2){
    	float: left;
    }
    .val_r ul li a{
        display: block;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 5;
    }
    .val_r ul li a img{
        display: block;
    }
    .val_r ul li a dl,.val_r ul li a p{
        position: absolute;
        width: 100%;
        height: 54px;
        text-indent: 10px;
        left: 0;
        bottom: 0;
        padding: 0px;
        
    }
    .val_r ul li a dl{
        z-index: 20;
    }
    .val_r ul li a p{
        background: #000000;
        opacity:0.5;
        filter:Alpha(opacity=50);
        z-index: 10;
    }
    .val_r ul li a dl dt{
        font-size: 22px;
        color: #ffffff;
        line-height: 30px;
        
    }
    .val_r ul li a dl dd{
        font-size: 15px;
        color: #ffffff;
        line-height: 23px;
        float: left;
        width: 100%;
    }
    .cont_jyhd{position: relative; overflow: hidden; float: left;    width: 100%;}
    .cont_jyhd ul li{
        width: 386px;
        height:303px;
        border: 1px solid #F1F1F1;
        float: left;
        margin-right: 18px;
    }
    .cont_jyhd ul li:nth-child(3){
    	margin-right: 0px;
    }
    .cont_jyhd ul li a{
        display: block;
        height: 100%;
        width: 100%;
    }
    .cont_jyhd ul li a img{
        display: block;
    }
    .cont_jyhd ul li a dl{
        width: 100;
        height: 100px;
        padding: 15px;
    }
    .cont_jyhd ul li a dl dt{
        font-size: 22px;
        color: #333333;
        line-height: 30px;
        
    }
    .cont_jyhd ul li a dl dd p{
        font-size: 18px;
        color: #F96630;
        height: 25px;
        line-height: 25px;
        float: left;
        width: 80%;
        background:url("../../assets/images/huo.png") no-repeat left top;
        background-size:16px 19px;
        text-indent: 20px;
        
    }
    .cont_jyhd ul li a dl dd p.over{
        background:url("../../assets/images/huo1.png") no-repeat left top;
        color: #906448;
    }
    .cont_jyhd ul li a dl dd span{
        display: block;
        text-align: left;
        color: #f84000;
        font-size: 22px;
        float: right;
        
    }
    .cont_xyzx{ overflow: hidden; float: left; position: relative; width: 100%;}
    .cont_xyzx dl{
        float: left;
        width: 448px;
        cursor: pointer;
    }
    .cont_xyzx dl dt{
        background:url("../../assets/images/homeVideoImg.png") no-repeat left top;
        background-size:448px 460px;
        position: relative;
        width: 448px;
        height: 460px;
    }
    .cont_xyzx dl dt b{
        display: block;
        position: absolute;
        background:url("../../assets/images/homeVideoBtn.png") no-repeat left top;
        background-size:100px 100px;
        top: 50%;
        left: 50%;
        margin: -67px 0px 0px -67px;
        width: 100px;
        height: 100px;
    }
    .cont_xyzx dl dd{
        padding: 10px;
    }
    .cont_xyzx dl dd p{
        font-size: 22px;
        color: #151515;
        line-break: 29px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .cont_xyzx dl dd span{
        font-size: 15px;
        color: #999999;
        margin-top: 8px;
        display: block;
    }
    // .cont_xyzx ul{
    //     float: right;
    //     width: 660px;
    //     padding: 40px;
    // }
    // .cont_xyzx ul li{
    //     border-bottom:1px solid #ECECEC ;
    //     margin-bottom: 20px;
    //     cursor: pointer;
    // }
    // .cont_xyzx ul li p{
    //     line-height: 48px;
    //     font-size: 22px;
    //     color: #666666 ;
    // }
    // .cont_xyzx ul li span{
    //     display: block;
    //     font-size: 18px;
    //     line-height: 30px;
    //     color: #999999;
    //     margin-bottom:20px;
    // }
    .swp_cont{
    	height: 300px;
    	position: relative;
    	width:553px;
    	margin-right: 10px;
    	border: 1px solid #F1F1F1;
        cursor: pointer;
    }
    .swp_cont img{
    	width:553px;
    	height: 300px;
    }
    .swp_cont span{
	        display: block;
	        position: absolute;
            padding: 0px 10px;
            width: 70px;
	        height: 30px;
	        line-height: 30px;
	        color: #FFF;
	        left: 0px;
	        top: 0px;
	        z-index: 10;
	        text-align: center;
	        font-size: 14px;
	    }
	    .swp_cont span.b1{
	      background: url("../../assets/images/matchstart.png") no-repeat 0px 0px;
          background-size: 90px 30px;
	    }
	    .swp_cont span.b2{
	       background: url("../../assets/images/matchstop.png") no-repeat 0px 0px;
           background-size: 90px 30px;
	    }
	    .swp_cont dl,.swp_cont p{
        position: absolute;
        width: 100%;
        height: 54px;
        text-indent: 10px;
        left: 0;
        bottom: 0;
        padding: 10px 0;
        
    }
    .swp_cont dl{
        z-index: 20;
    }
    .swp_cont p{
        background: #000000;
        opacity:0.5;
        filter:Alpha(opacity=50);
        z-index: 10;
    }
    .swp_cont dl dt{
        font-size: 18px;
        color: #ffffff;
        line-height: 30px;
        
    }
    .swp_cont dl dd{
        font-size: 15px;
        color: #ffffff;
        line-height: 23px;
        float: left;
        width: 100%;
    }
    .descript{
            padding: 20px;
            border-top: 1px solid #ECECEC;
        

    }
    .descript h5{
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
    }
    .descript .pip{
        display: flex;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        margin-bottom: 4px;
    }
    .descript .pip span{
        font-size: 18px;
        color: #757272;
    }
    .descript .pip span.pipOne{
        color: #F96630;
        font-size: 21px;
    }
    .descript .pip span.pipTwo{
        display: block;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        color: #906448;
        width: 59px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #906448;
        border-radius: 3px;
    }
    //后期修改的
    #holidayContent{
        width: 1200px;
        display: flex;
        justify-content: space-between;
    }
    #holidayContent li{
        width: 282px;
        height: 268px;
        margin-left: 4px;
    }
    #holidayContent li img{
        width: 282px;
        height: 166px;
        vertical-align: middle;
    }
    #holidayContent li .is_preferentialDiv{
        position: relative;
    }
    #holidayContent li .is_preferential{
        position: absolute;
        top: 10px;
        left: -5px;
        width: 48px;
        height: 24px;
        z-index: 10;
    }
    #holidayContent li img.is_preferential{
        width: 48px;
        height: 30px;
        vertical-align: middle;
    }
    #holidayContent li .descript{
       padding: 14px;
    }
    #holidayContent li .descript h5{
       font-size: 16px;
    }
    #holidayContent li .descript .pip{
       height: 24px;
       line-height: 24px;
    }
    #holidayContent li .descript .pip span{
        overflow: hidden;
        white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: normal;
       font-size: 14px;
    }
    //首页新闻资讯迭代修改样式
    #homeNewList{
        display: flex;
        height: 244px;
        flex-wrap: wrap;
        margin-bottom: 143px;
    }
    #homeNewList li{
        width: 565px;
        height: 74px;
        text-indent: 15px;
        justify-content: space-between;
        border-bottom: 1px #ECECEC solid;
    }
    #homeNewList li:nth-child(2n){
        margin-left: 40px;
    }
    #homeNewList li .newTitle{
        margin-top: 15px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        color: #333333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #homeNewList li .newTitle .dot{
        display: inline-block;
        width: 4px;
        height: 4px;
        background: #906448;
        position: relative;
        top: -4px;
        left: -15px;
        z-index: 10;
    }
    #homeNewList li .newTime{
        font-size: 14px;
        color: #999999;
        margin-top: 10px;
    }
    #black{
        color: #3F3F3F;
        font-size: 12px !important;
        margin-left: 3px;
    }
</style>

