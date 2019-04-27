<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
        </div>
        <div class="bd_banner">
            <div>
                <h2>SELECTED EVENTS</h2>
                <span>精选赛事</span>
            </div>
        </div>
        <div class="content">
			<div class="head_slide">
                <tip :chinaCityList = "chinaCityList" :hotCityList = "hotCityList" :internationalCityList = "internationalCityList"  @getcity="getCityMatchList"></tip>
                <el-select v-model="matchTypeValue" placeholder="赛事类型" @change="currentType">
                    <el-option
                        v-for="item in matchTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="matchStatusValue" placeholder="赛事进程" @change="currentStatus">
                    <el-option
                        v-for="item in matchStatusOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
			</div>
            <no-search-results v-if="total == 0"></no-search-results>
            <!-- <div v-for="(item, index) in matchList" :key="index" class="bigWrap"> -->
                <!-- <div class="time">{{item.time}}</div> -->
                <ul class="ss_cont">
                    <li v-for="items in matchList" :key="items.id" @click="goToMatchDetail(items.id)">
                        <a href="javascript:;">
                            <img :src="items.coverImg" :alt="items.name">
                            <dl>
                                <dt>{{items.name}}</dt>
                                <dd>
                                    <p>比赛时间：{{new Date(items.matchStartTime).toLocaleDateString().replace(/\//g, "-")}}-{{new Date(items.matchEndTime).toLocaleDateString().replace(/\//g, "-")}}</p>
                                    <!-- <span class="sp1"></span> -->
                                </dd>
                            </dl>
                            <div :class="items.status == 1 || items.status == 2?'b2':'b1'">
                                <span>{{items.matchCity}}</span>
                                <!-- <span v-else-if="items.status == 2">{{items.matchCity}}活动报名中</span>
                                <span v-else-if="items.status == 3">{{items.matchCity}}活动报名结束</span>
                                <span v-else-if="items.status == 4">{{items.matchCity}}赛事进行中</span>
                                <span v-else-if="items.status == 5">{{items.matchCity}}赛事结束</span> -->
                                <!-- <p  v-if="items.status == 1 || items.status == 2" @click="toMatchDetail(items.id)">{{items.status == 1 || items.status == 2?'预定':'截止报名'}}</p> -->
                                <p  v-if="items.status == 1 || items.status == 2" @click="toMatchDetail(items.id)">{{items.statusVo}}</p>
                                <p  v-else>{{items.statusVo}}</p>

                            </div>
                        </a>
                    </li>
                </ul>
            <!-- </div> -->
		</div>
        <el-pagination
                id="page"
                v-if="total != 0"
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                :current-page="currentPage"
                @current-change='getPage'>
        </el-pagination>
        <nav-bar></nav-bar>
    </div>
</template>
<script>
    import mHeader from 'components/mHeader'
    import tip from 'components/common/selectCity/tip'
    import navBar from 'components/navBar'
    import noSearchResults from 'components/common/noSearchResults'
    import {matchList, cityData, chinaCity, getBallCourtCity} from "../../service/getData"
    import getCurrentCityName from 'common/js/getUserLocation'
    export default {
        components: {
            mHeader,
            tip,
            navBar,
            noSearchResults
        },
        data() {
            return {
                // hotCityList: ["深圳", "广州", "上海", "北京", "海南", "云南", "泰国", "柬埔寨", "巴厘岛", "越南"],
                hotCityList: [],
                chinaCityList: [],
                internationalCityList: [],
                cityValue: '',
                matchList: [], //赛事列表
                cityList: [], //热门城市列表
                currentIndex: 3,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'black',  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
                //matchTypeOptions指的的赛事类型选项
                matchTypeOptions: [{
                    value: '1',
                    label: '邀请赛'
                }, {
                    value: '2',
                    label: '联谊赛'
                }, {
                    value: '3',
                    label: '挑战赛'
                }, {
                    value: '4',
                    label: '国际赛'
                }, {
                    value: '5',
                    label: '总决赛'
                }],
                // matchStatusOptions指的的赛事进程的选项
                matchStatusOptions: [{
                    value: '1',
                    label: '即将开始'
                }, {
                    value: '2',
                    label: '报名中'
                }, {
                    value: '3',
                    label: '报名结束'
                }, {
                    value: '4',
                    label: '进行中'
                }, {
                    value: '5',
                    label: '赛事结束'
                }],
                //选择城市是否显示
                showCity: false,
                //赛事热门城市选项值
                cityValue: '',
                //赛事类型选项值
                matchTypeValue: '',
                //赛事进程选项值
                matchStatusValue: '',
                //赛事列表总条数
                total: 0,
                currentPage: 1,
                pageSize: 6,
                //所有城市列表
                chinaCity:[],
                activeBtn: 0,
                CityInland:true,
                internationalCity:false
            }
        },
        methods: {
            //隐藏城市选区
            hideCityDialog(){
                this.showCity = false;
            },
//          展示城市选区
            showCityDialog(){
                this.showCity = true;
            },
            viewCity(city){
                this.cityValue = city;//输入框显示当前选择的城市
                this.showCity = false;//关闭城市选区
            },
            //此组件多次使用到请求赛事列表方法
            getMatchList(){
                matchList({
                    startPage: this.currentPage,
                    pageSize: this.pageSize,
                    matchCity: this.cityValue,
                    type: this.matchTypeValue,
                    status: this.matchStatusValue
                }).then((res)=>{
//                    console.log(res.result.list)
                    this.matchList = res.result.list;
                    console.log(this.matchList)
                    this.total = res.result.total
                })
            },
            //选择城市切换进行数据匹配
            getCityMatchList(city){
                this.cityValue = city
                matchList({
                    startPage: this.currentPage,
                    pageSize: this.pageSize,
                    matchCity: this.cityValue,
                    type: this.matchTypeValue,
                    status: this.matchStatusValue
                }).then((res)=>{
                    this.matchList = res.result.list;
                    this.total = res.result.total
                })
            },
            //查看赛事详情
            goToMatchDetail(id){
                console.log(id)
				this.$store.commit("matchBookId", id)
				this.$router.push("/match-detail")
            },
            //切换热门城市刷新列表
            currentCity(){
//                console.log(this.cityValue);
                this.getMatchList()
            },
            //切换赛事类型刷新列表
            currentType(){
//                console.log(this.matchTypeValue);
                this.getMatchList()
            },
            //切换赛事进程刷新列表
            currentStatus(){
//                console.log(this.matchStatusValue);
                this.getMatchList()
            },
            //翻页器
            getPage: function(currentPage){
                this.currentPage = currentPage;
                this.getMatchList()
//                console.log(this.currentPage)  //点击第几页
            },
            //通过百度地图获取当前城市
            getCurrentCity() {
                getCurrentCityName().then((res) => {
                    console.log(res);
                    this.cityValue = res.name.replace(/市/, '');
//                    console.log(99999);
                    // 获取赛事列表
                    this.getMatchList()
                })
            },
            toMatchDetail(id){
                this.$store.commit('recordBookId', id)
  		          this.$router.push('/match-detail')
            },
          //渲染城市列表
            chinaCityRender(){
              chinaCity().then((res) =>{
                this.chinaCity = res.city
              console.log(res.city)
              })
            },
          //锚点跳转
            goAnchor(selector, index) {
              this.activeBtn = index
              document.querySelector("#city_slid").scrollTop  = document.querySelector(selector).offsetTop-207;
            },
            CityInlandShow(){
              this.CityInland=true
              this.internationalCity=false
              this.$refs.inland.classList.add("on")
//              this.$refs.inland.style.color="red"
              this.$refs.international.classList.remove("on")
            },
            internationalCityShow(){
              this.CityInland=false
              this.internationalCity=true
              this.$refs.inland.classList.remove("on")
              this.$refs.international.classList.add("on")
            },
            // handleScrollIt() {
            //     var tHeight = document.documentElement.scrollTop||document.body.scrollTop;
            //     console.log(tHeight)
            //     if(tHeight>=50){
            //         console.log('真操蛋')
            //     }else{          //恢复正常
            //         console.log('真完蛋')
            //     }
            // },
            
        },
        beforeMount(){
            this.getCurrentCity()
        },
        mounted(){
        //   this.chinaCityRender()
            getBallCourtCity().then((res) =>{
                this.hotCityList = res.result.hot
                this.chinaCityList = res.result.inland
                this.internationalCityList = res.result.overseas
            })
            // window.addEventListener('scroll', this.handleScrollIt, true)  
           
        }
    }
</script>
<style lang="scss" scoped type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 61px;
        background: #fff;
        // background: url("../../assets/images/matchbanner.png") no-repeat center top;
        background-size: cover;
        color: #333333;
    }
    .header_content ul li a{
        height: 80px;
        color: #333333 !important;
    }
    /*内容部分*/
    .bd_banner{
        background: url("../../assets/images/matchbanner.png") no-repeat center top;
        background-size:torem(1920) torem(220);
        width:100%;
        padding-top: 70px;
        color: #fff;
    }
    .bd_banner div{
        height: 151px;
        margin: 0px auto;
        width: 1200px;
    }
    .bd_banner div h2{
        font-size: 35px;
        line-height: 41px;
    }
    .bd_banner div span{
        display: block;
        width: 100%;
        font-size: 26px;
        line-height: 37px;
        margin-top: 4px;
    }
    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .content {
        width: 1200px;
        min-height: 600px;
        margin: 0 auto;
        overflow: hidden;
    }

    .ss_cont {
        position: relative;
        overflow: hidden;
        float: left;
        width: 100%;
    }

    .ss_cont li {
        width: 282px;
        height: 256px;
        border: 1px solid #D7D7D7;
        margin-bottom: 30px;
        border-radius:10px;
        overflow: hidden;
        float: left;
        margin-right: 21px;
    }
    .ss_cont li:nth-child(4n) {
        margin-right: 0px;
    }

    .ss_cont li a {
        display: block;
        height: 100%;
        width: 100%;
        position: relative;
    }

    .ss_cont li a img {
        width: 282px;
        height: 151px;
        display: block;
    }

    .ss_cont li a dl {
        height: 35px;
        padding: 15px;
    }

    .ss_cont li a dl dt {
        font-size: 16px;
        color: #333333;
        line-height: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .ss_cont li a dl dd p {
        font-size: 13px;
        color: #999999;
        line-height: 23px;
        float: left;
        margin-top: 6px;
    }

    .ss_cont li a dl dd span {
        display: block;
        float: right;
        height: 35px;
    }

    .ss_cont li a div{
        padding: 0px 15px 15px;
        height: 29px;
    }
    .ss_cont li a div span{
        font-size: 15px;
        line-height: 21px;
        padding-left: 20px;
        float: left;
        color: #769721;
    }
    .ss_cont li a div p{
        font-size: 14px;
        color: #FFFFFF;
        float: right;
        width: 80px;
        height: 29px;
        line-height: 29px;
        text-align: center;
        border-radius: 5px;
    }
    .ss_cont li a .b1 span{
        background: url("../../assets/images/huo2.png") no-repeat left center;
        background-size: 17px 19px;
        color: #D2D2D2;
    }
    .ss_cont li a .b2 span{
        background: url("../../assets/images/huo4.png") no-repeat left center;
        background-size: 17px 19px;
    }
    .ss_cont li a .b1 p{
        background: #D2D2D2;
    }
    .ss_cont li a .b2 p{
        background: #F96630;
    }
    .head_slide {
        margin-top:50px;
        width: 100%;
        height: 63px;
    }

    .head_slide span {
        display: block;
        font-size: 45px;
        float: left;
    }

    .head_slide select {
        border: 0px;
        font-size: 30px;
        height: 42px;
        line-height: 42px;
        margin-right: 60px;
        color: #666666;
    }
    .bigWrap::after{
        content: '';
        clear: both;
        display: block;
    }
    .time {
        color: #666666;
        font-size: 18px;
        height: 25px;
        line-height: 25px;
        margin: 0px 0px 25px;
    }
    .mg_lt{ margin-left: 28px;}
    #page{
        text-align: center;
        margin-bottom: 40px;
    }

    .city{
        position:relative;
        .city-components{
            position: absolute;
            color: #fff;
            width: 697px;
            height: 338px;
            background-color: #FFFFFF;
            border-radius: 2px;
            padding: 20px 21px;
            z-index: 999;
            border:1px solid #F1F1F1;
        	.hot_city{
        		width: 100%;
        		overflow: hidden;
    			p {
					font-size: 18px;
					margin-bottom: 10px;
					color: #666666;
				}
				span{
					display: inline-block;
					margin-right:30px;
					color: #999999;
					font-size: 15px;
				}
        	}
        	.city_slid{
        		h2 {
        			text-align: center;
        			width:430px;
        			display: block;
        			margin: 30px auto 20px;
        			overflow: hidden;
        			span {
        				font-size: 16px;
        				color: #333333;
        				display: inline-block;
        				width: 110px;
        				text-align: center;
        				margin: 0px 50px;
        			}
              .on{
                color: #8F6448;
              }
        		}
        		ul{
        			width: 100%;
        			overflow: hidden;
        			margin: 20px 0px;
        			li{
        				float: left;
        				display: inline-block;
        				margin: 0px 18px;
        				font-size: 16px;
        				color: #666666;
        			}
        		}
            >div{
              div{
                height: 135px;
                overflow: auto;
                dl{
                  width: 100%;
                  font-size:16px;
                  color: #999999;
                  line-height: 22px;
                  overflow: hidden;
                  dt{
                    float: left;
                    width: 20px;
                  }
                  dd{
                    width: 660px;
                    float: right;
                    span{
                      display: inline-block;
                      float:left;
                      font-size: 16px;
                      margin-right: 40px;
                      color: #999999;
                    }
                  }
                }
              }
             }
        	}
        }
    }


</style>
<style type="text/css">
	.el-select{
		margin-left: 60px;
		width: 115px;

	}
	.el-input__inner{
    	outline: none;
    	border: none;
    	background: none;
    	font-size: 20px;
    	color: #333333;
    	padding: 0px;
    }
    .el-select .el-input .el-select__caret{
    	background:url("../../assets/images/select.png") no-repeat center right ;
    	background-size: 15px 8.5px;
    	font-size: 0px;
    	transform: rotateZ(0deg);
    	width: 15px;
    	padding: 0px;

    }
    .city{
    	float: left;
    	width: 115px;
    }
    .city input{
    	outline: none;
    	border: none;
    	background: none;
    	font-size: 20px;
    	color: #333333;
    	padding: 0px;
    	background:url("../../assets/images/select.png") no-repeat center right ;
    	background-size: 15px 8.5px;
    	border: 0px;
    	width: 115px;
    	height: 40px;
    	line-height: 40px;
    }
</style>
