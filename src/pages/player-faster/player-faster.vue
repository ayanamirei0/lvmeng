<template>
    <div >
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
        </div>
        <div class="main">
            <div class="toolWrapper">
                <div class="hotSite">热门球场</div>

                <div id="span_hover"><selectCity :hotCityList = "hotCityList" :chinaCityList = "chinaCityList" :internationalCityList = "internationalCityList"  @getcity="getCourtList"></selectCity></div>
                <div id="append_boder"><el-date-picker v-model="date" type="date" placeholder="选择日期" class="inline_ser dataPick" format="yyyy - MM - dd " value-format="yyyy-MM-dd" @change="getCourtListByDate()" :default-value="timeDefaultShow" :editable="false"></el-date-picker></div>
                <div class="ballCourt">
                    <div id="fixInput">
                        <input placeholder="请输入球场名称" v-model="ballCourtValue" class="input-with-select" @input="searchBallCourt()"/>
                        <span @click.stop="getBallCourtByBallCourtName()">搜索</span>
                    </div>
                    <div class="ballCourt_tip" v-show="ballCourt">
                        <p v-for="item in matchBallCourtList" :key="item.id" @click.stop="selectBallCourt(item.name)">{{item.name}}</p>
                    </div>
                </div>
            </div>
            <no-search-results v-if="total == 0 || ballCourtList.length == 0"></no-search-results>
            <div class="content" v-if="total != 0">
                <div class="wrap" v-for="(item, index) in ballCourtList" :key="index" @click.stop="goToFasterDetail(item.golfId)">
                    <div class="img_ct"><img :src="item.logo" :alt="item.name"></div>

                    <div class="descript">
                        <h5>{{item.name}}</h5>
                        <p>直线距离 {{getDistance({log: item.longitude , lat: item.latitude})}}km
                        </p>
                        <div class="pip">
                            <span>
                                ¥{{item.minPrice}}<b style="margin-left: 3px;color: #3F3F3F;">起</b>
                            </span>
                            <span @click.stop="centerDialogVisible = true">预订</span>
                        </div>
                    </div>
                </div>
            </div>
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
        <el-dialog
            title=""
            :visible.sync="centerDialogVisible"
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
    import searchMatch from 'pages/player-match/search-match'
    import noSearchResults from 'components/common/noSearchResults'
    import {getCurrentTime, getWeek, toUpperChinese, getFormatDate} from "../../common/js/util";
    import {searchBallCourtBykeyword, searchBallCourtByCityOrdate, searchBallCourtByBallCourtName, getBallCourtCity} from "../../service/getData";
    import cityList from 'components/common/selectCity/cityJson.js'
    import getCurrentCityName from 'common/js/getUserLocation'

    export default {
        components: {
            mHeader,
            navBar,
            slider,
            searchMatch,
            spaceHeader,
            noSearchResults
        },
        data() {
            return {
                currentIndex: 1,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'white',  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
                ballCourt: false,    //球场可选择列表是否展示
                ballCourtValue: '',   //搜索关键字
                matchBallCourtList: [],   //关键字匹配到的球场名称列表
                ballCourtList: [],    //需要展示的球场列表
                date: new Date(new Date().getTime() + 24*60*60*1000),   //日期筛选值
                cityValue: '',        //所选择的城市，默认通过IP获取当前的城市
                hotCityList: [],    //热门城市列表
                chinaCityList: cityList.city,   //国内打球城市
                internationalCityList: cityList.city,    //国际打球城市
                centerDialogVisible: false,    //预定弹窗提示控制是否显示
                currentPage: 1,    //当前页面
                pageSize: 15,   //一页显示的条数
                total: 0,      //根据总条数计算多少页面
                pointA: {},    //根据坐标点计算距离
                timeDefaultShow: '2019-03-07',   //默认显示的时间
            }
        },
        methods: {
            //根据输入字符及时提醒用户哪些球场可选择
            searchBallCourt(){
                this.ballCourt = false
                searchBallCourtBykeyword({
                    keyword: this.ballCourtValue,
                    startPage: 1,
                    pageSize: 10
                }).then((res) => {
                    if(res.returnCode == 200){
                        this.matchBallCourtList = res.result.list
                        if(this.matchBallCourtList.length != 0){
                            this.ballCourt = true
                            if(this.ballCourtValue == ''){
                                this.ballCourt = false
                            }
                        }
                    }

                })
            },
            //查看畅打详情
            goToFasterDetail(id){
				this.$store.commit("fasterBookId", id)
				this.$router.push("/faster-detail")
            },
            //选择球场
            selectBallCourt(courtName){
                this.ballCourtValue = courtName
                this.ballCourt = false
                searchBallCourtBykeyword({
                    keyword: this.ballCourtValue,
                    startPage: this.currentPage,
                    pageSize: this.pageSize
                }).then((res) =>{
                    this.ballCourtList = res.result.list
                    this.total = res.result.total
                })
            },
            //切换选择城市获取球场列表
            getCourtList(city){
                this.cityValue = city
                this.currentPage = 1
                searchBallCourtBykeyword({
                    keyword: this.cityValue,
                    startPage: 1,
                    pageSize: this.pageSize
                }).then((res) =>{
                    this.ballCourtList = res.result.list
                    this.total = res.result.total
                })
            },
            //翻页器
            getPage: function(currentPage){
                this.currentPage = currentPage;
                searchBallCourtBykeyword({
                    keyword: this.cityValue ? this.cityValue:this.ballCourtValue,
                    startPage: this.currentPage,
                    pageSize: this.pageSize
                }).then((res) =>{
                    this.ballCourtList = res.result.list
                    this.total = res.result.total
                    document.documentElement.scrollTop = 480
                })
//                console.log(this.currentPage)  //点击第几页
            },
            //通过百度地图获取当前城市
            getCurrentCity() {
                getCurrentCityName().then((res) => {
                    this.cityValue = res.name.replace(/市/,"")
                    this.pointA = res.center
                    this.date =   this.transfromTime(this.date.getTime())
                    //时间戳转换
                    searchBallCourtByCityOrdate({
                        cityName: this.cityValue,
                        date: this.date
                    }).then((res) =>{
                        console.log(9999);
                        console.log(res.result)
                        this.ballCourtList = res.result
                        this.total = this.pageSize
                    })
                })
            },
            //根据坐标点计算距离
            getDistance (itemPoint) {
                var map = new BMap.Map('')
                var pointB = new BMap.Point(parseFloat(itemPoint.log), parseFloat(itemPoint.lat))  // 球场的经纬度
                var distance = (map.getDistance(this.pointA, pointB) / 1000).toFixed(2) // 保留小数点后两位
                return distance
            },
            getCourtListByDate(){
                searchBallCourtByCityOrdate({
                        cityName: this.cityValue,
                        date: this.date.substr(0,10)
                    }).then((res) => {
                        this.ballCourtList = res.result
                        this.total = this.pageSize
                    })
            },
            //点击搜索获取畅打球场列表
            getBallCourtByBallCourtName(){
                this.currentPage = 1
                this.cityValue = ''
                this.ballCourt = false
                console.log(document.querySelector("#checkCity"))
                // document.querySelector("#checkCity").value = ""
                console.log(this.ballCourtValue + "/////***")
                if(this.ballCourtValue == ''){
                   //this.total = 0
                  // alert("请输入您想查看")
                   return false
                }
                
                searchBallCourtBykeyword({
                    keyword: this.ballCourtValue.replace(/(^\s*)|(\s*$)/g, ""),
                    startPage: this.currentPage,
                    pageSize: this.pageSize
                }).then((res) =>{
                    this.ballCourtList = res.result.list
                    this.total = res.result.total
                })
            },
            goToFasterDetail(id){
				this.$store.commit("fasterBookId", id)
				this.$router.push("/faster-detail")
            },
            closeKeyWord(){
                this.ballCourt = false
            },
            transfromTime(time){
                return getFormatDate(time)
            }
        },
        mounted(){
            this.getCurrentCity()
            getBallCourtCity().then((res) =>{
                this.hotCityList = res.result.hot
                this.chinaCityList = res.result.inland
                this.internationalCityList = res.result.overseas
            })
            this.timeDefaultShow = new Date(new Date().getTime() + 24*60*60*1000);
        }

    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
        height: 480px;
         background: url("../../assets/images/header_jycd.png") no-repeat center top;
        background-size: cover;
    }
    .cont{
        width: 1200px;
        margin: 0 auto;
        padding-top: 90px;
    }
    .main{
      width: 1200px;
      margin: 0 auto;
    }
    .toolWrapper{
        display: flex;
        align-items: center;
        height: 150px;
        padding:30px 0 30px 0;
        box-sizing:border-box;
    }
    .dataPick{
      margin: 0px 60px 0px 30px;
        width: 190px;
    }
    .hotSite{
        font-size: 28px;
        color: #333333;
        margin-right: 30px;
    }

	.content{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		/*justify-content: space-between;*/
        flex-wrap: wrap;
        margin-bottom: 60px;
	}
	.wrap{
		width: 224px;
		margin: 20px 17px 0 0;
        cursor: pointer;
        border:1px solid #ECECEC;
		border-radius:10px;
		overflow: hidden;
	}
	.wrap:nth-child(5n){
		width: 224px;
		margin-right: 0px;
	}
	.wrap  .img_ct{text-align: center; width: 100%;}
	.wrap img{
		display: inline-block;
		width: 224px;
		height: 224px;
		margin: 0px auto;
		text-align: center;
        vertical-align: middle;
	}
	.descript{
		padding: 10px 20px 10px;
		border-top: 1px solid #ECECEC;

	}
	h5{
		font-weight: normal;
		height: 30px;
		line-height: 30px;
		font-size: 18px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	p{
		color: #999999;
		font-size: 14px
	}
	.pip{
		height: 25px;
        line-height: 25px;
		display: flex;
		justify-content: space-between;
		color: #ED7063;
		font-size: 16px;
    }
    .pip span.s{
		height: 38px;
		color: #ED7063;
		font-size: 12px;
    }
    .pip span:nth-of-type(1){
        width: 255px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
	}
    .pip span:nth-of-type(1) b{
        font-size: 12px;
        color: #3F3F3F;
	}
	.pip span:nth-of-type(2){
		display: inline-block;
        color: #fff;
        width: 77px;
        height: 25px;
        line-height: 25px;
		// padding: 0px 10px;
		border-radius: 5px;
        font-size: 12px;
        text-align: center;
		background: #ED7063; /* Safari 5.1 - 6.0 */

	}
    #search_from{
        width: 298px;
        height: 319px;
        padding: 47px 37px 53px 39px;
        background: #fff;
        border-radius: 5px;
    }
    .searchCourt_input, .city input{
        width: 334px;
        outline: none;
        background-color: #F6F6F6;
        background-image: none;
        border-radius: 4px;
        border: none;
        box-sizing: border-box;
        color: #999999;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        font-size: 20px;
        &::-webkit-input-placeholder {
          color: #999999 ;
        }
        &::-moz-placeholder {
          color: #999999 ;
        }
        &:-ms-input-placeholder {
          color: #999999 ;
        }
    }
    #fixInput{
        display: flex;
        height: 40px;
        line-height: 40px;
        background-color: #F6F6F6;
        border-radius: 10px;
    }
    #fixInput input{
        padding: 0 25px;
        width: 170px;
        outline: none;
        border: none;
        background-image: none;
        border-radius: 4px 0px 0px 4px;
        border-right: none;
        font-size: 18px;
        color: #999999;
        background-color: #F6F6F6;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #fixInput span{
        padding:0px 10px;
        width: 40px;
        height: 20px;
        border-radius: 0px 4px 4px 0px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        font-size: 18px;
        color: #333333;
        border-left: 1px solid #999999;
        margin: 10px 0;

    }

    .ballCourt{
      position:relative;
      height: 40px;
      .ballCourt_tip{
        width: 281px;
        height: 284px;
        overflow-y: auto;
        position: absolute;
        top: 40px;
        left: 0px;
        z-index: 999;
        background: #F6F6F6;
      }
    }
    .searchContain{
        height: 40px;
    }

    .ballCourt_tip p{
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        text-indent: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    #span_hover{
    	.city {
	    width:130px;
	    .city-components{
	    	span{
	    			cursor: pointer;
	    		}
	    		span:hover,span:click{
	    			color:#8F6448;
	    		}
	      .city_slid{
	        h2{
	          width: 100%;
	        }
	      }
	    }
	  }
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
    #page{
        text-align: center;
        margin-bottom: 40px;
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
    #customerTip{
        width: 100%;
        text-align: center;
        font-size: 14px;
		color: #666666;
    }
</style>
<style>
.toolWrapper .city{
    width: 130px;
}
.toolWrapper .city .city-components span{
	cursor: pointer;
}
.toolWrapper .city .city-components span:hover{
	color:#F4F9FF;
}

.toolWrapper .city input{
    width: 130px;
    height: 40px;
    line-height: 40px;
    outline: none;
    border: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    box-sizing: border-box;
    color: #999999;
    display: inline-block;
    outline: 0;
    position:relative;
    font-size: 20px;
    text-align: center;
    background:url("../../assets/images/select.png") no-repeat center right ;
	background-size: 15px 8.5px;
}
#append_boder .el-input--suffix .el-input__inner{
	background:url("../../assets/images/select.png") no-repeat center right ;
	background-size: 15px 8.5px;
	color: #999999;
	border: none;
	font-size: 20px;
}
#append_boder .el-input--suffix input::-webkit-input-placeholder{
	color: #999999;
}
#append_boder .el-input__prefix{
	color: #999999;
	width: 110px;
}
#append_boder .el-input__prefix .el-icon-date:before{
	content: '';
}
.el-date-table td.today span{
    color: #606266;
}
.el-date-table td.default span{
    color: #409EFF;
}

</style>
