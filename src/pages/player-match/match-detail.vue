<template>
    <div>
        <div class="header_content">
            <m-header :currentIndex="currentIndex" :navColor="navColor"></m-header>
			<imgView :imgList="bannerList" :imgHeight="388" :imgWidth="698" v-if="bannerList.length != 0"/>  
            <dl class="head_dl">
                <dt class="menu"><router-link tag="a" to="/player-match">菁英赛事</router-link>>  赛事详情</dt>
                <dd>{{details.matchCity}}{{details.statusVo}}</dd>
            </dl>
			<div class="bd_banner">
				<div>
					<h2>{{details.name}}</h2>
                    <!-- 比赛球场：{{details.court}} -->
					<span>报名时间：{{new Date(details.enrollStartTime).toLocaleDateString().replace(/\//g, "-") == new Date(details.enrollEndTime).toLocaleDateString().replace(/\//g, "-") ? new Date(details.enrollStartTime).toLocaleDateString().replace(/\//g, "-") : new Date(details.enrollStartTime).toLocaleDateString().replace(/\//g, "-") + ' 至 ' + new Date(details.enrollEndTime).toLocaleDateString().replace(/\//g, "-")}}<em style="margin-left: 30px;"></em>球赛地址：{{details.matchAddress}}</span>
					<a href="javascript:;" class="btn clubbotton"  v-if="details.status == 1">活动未开始</a>
					<a href="javascript:;" class="btn clubbotton" @click="centerDialogVisible = true" v-else-if="details.status == 2">立即报名</a>
					<a href="javascript:;" class="btn clubbotton"  v-else>截止报名</a>
				</div>	
			</div>
			
		</div>
		<div class="content" id="searchBar">
            <ul class="slid_title" v-show="searchBarFixed == true">
				<li v-for="(item, index) in anchorBtnArr" :key="index" :class="{active : activeBtn == index}" @click="goAnchor('#anchor'+index,index)">{{item}}</li>
			</ul>
			<ul id="slid_title" class="slid_title" :class="searchBarFixed == true ? 'isFixed' :''">
				<li v-for="(item, index) in anchorBtnArr" :key="index" :class="{active : activeBtn == index}" @click="goAnchor('#anchor'+index,index)">{{item}}</li>
			</ul>
        </div>
        <div class="content">
			<div class="slid_cont">
				<div id="tabs-content">
					<dl id="anchor0">
						<dt>赛事简介</dt>
						<dd>赛事名称：{{details.name}}</dd>
						<dd>比赛时间：{{ new Date(details.racingStartTime).toLocaleDateString().replace(/\//g, "-") == new Date(details.racingEndTime).toLocaleDateString().replace(/\//g, "-") ?  new Date(details.racingStartTime).toLocaleDateString().replace(/\//g, "-") : new Date(details.racingStartTime).toLocaleDateString().replace(/\//g, "-") +' 到 ' +new Date(details.racingEndTime).toLocaleDateString().replace(/\//g, "-") + ' 结束' }}</dd>
						<dd>比赛球场：{{details.court}}</dd>
						<dd>比赛赛制：{{details.racingFormat}}</dd>
						<dd>开球方式：{{details.kickOffModel}}</dd>
						<dd>奖励机制：{{details.rewardMechanism}}</dd>
						<dd>主办单位：{{details.sponsorUnit}}</dd>
						<dd>协办单位：{{details.cooperationUnit}}</dd>
						<dd>赞  助 商：{{details.eventSponsors}}</dd>
					</dl>
					<dl id="anchor1">
						<dt>赛事日程</dt>
						
						<dd><pre>{{details.eventSchedule}}</pre></dd> 
						<!-- <dd>12：00-12：30  开球仪式</dd>
						<dd>12：30-17：30  18洞竞技</dd>
						<dd>17：30-17：40  1抽洞仪式</dd>
						<dd>18：00-19：00  颁奖晚宴</dd> -->
					</dl>
					<dl id="anchor2">
						<dt>赛事说明</dt>
						
						<dd><pre>{{details.eventExplain}}</pre></dd>
							<!-- <h3>一、界外（OB）</h3>
							<p>界外系禁止打球之地区，常以界桩或围篱标示。界外之界限应以界桩（不含支架）或围篱内侧最靠近地面点决定。如在地上以标线标示界外时，界外线系垂直向上向下延伸，且线之本身即作界外论。</p>
						</dd>
						<dd>
							<h3>二、遗失球</h3>
							<p>下列情况即可认定为遗失球：</p>
							<p>a球员或其同队、或彼等之杆弟在开始找球后五分钟，仍找不到球；或是虽经找到，但球员无法辨认是否为其所用之球。</p>
							<p>b球员按规则已用另一球当作比赛球，而未寻找其原球。</p>
							<p>c球员已自可能为原球所在地，或较原球位靠球洞之点击出代替球，因此该代替球即成为比赛球。代替球：原球可能在水障碍以外遗失、出界而了以代替之球，称为代替球。</p>
						</dd>
						<dd>
							<h3>三、水障碍（包括侧面水障碍）</h3>
							<p>水障碍系指任海、湖、池塘、河川、沟渠、地面排水沟或其他露天水渠（不论其中有无积水），以及其他类似者。</p>
							<p>a凡在水障碍界限内之陆地或水，地属于水障碍的部分。水障碍之界限系垂直向上延伸，用以标明界限所用的界桩、界标皆算在障碍内。</p>
							<p>b水障碍（除侧面水障碍外）应以黄色界桩或标线标明界限；侧面水障碍则是以红色界桩或标线了以界定。</p>
							<p>c水障碍中的球。向水障碍方向打出之球，是否在障碍以内或障碍以外遗失，乃是一项涉及事实的问题。如认为系障碍内遗失者，必须有之证据证明球确落入障碍内；如无确定之证据时，则应视为遗失球，按规则处理之。</p>
							<p>d如球落入、触及或遗失在水障碍中（不管球是否位于水中），球员要受一杆之处罚，并依下列方法处理：（1）尽可能在接近上次击球之原位打次一杆。（2）在原球最后通过该水障碍边缘之一点与球间之直线，于水障碍后方抛球，至于应离水障碍后方多远处抛球并无限制。（3）球落入、触及或遗失在侧面水障碍中时，可以选择下列特别措施：在障碍外距原球最后通过之水障碍边缘；或距离球洞相等距离之另一边水障碍边缘；于两支球杆长度以内抛球。球应抛下及停留在不得较原球最后通过水障碍之边缘地点更接近球洞处，按规则，所捡起的球不可擦拭。</p>
						</dd>
						<dd>
							<h3>注明：</h3>
							<p>1.本站比赛主导娱乐性较强，倡导“诚信，自律，为他人着想”的高尔夫精神，极端情况赛事组委会可在任何时间和地点对违反高尔夫球精神的球员作出仲裁，并取消其获奖资格。</p>
							<p>2.最终解释权归赛事组委会所有。</p>
						</dd> -->
					</dl>
					<dl id="anchor3">
						<dt>奖项设置 </dt>
						
						<dd><pre>{{details.rewardSettings}}</pre></dd>
							<!-- <h3>净杆冠军</h3>
							<p>1张9998高球湖南通惠继卡＋衣物包</p>
						</dd>
						<dd>
							<h3>净杆亚军</h3>
							<p>2张2880惠继卡＋衣物包</p>
						</dd>
						<dd>
							<h3>净杆季军</h3>
							<p>1张2880惠继卡＋衣物包</p>
						</dd>
						<dd>
							<h3>单项奖（最近、最远）</h3>
							<p>衣物包1个/人</p>
						</dd>
						<dd>
							<h3>趣味奖（竞猜＋三轮问答）</h3>
							<p>4斤富硒大米/人</p>
						</dd>
						<dd>
							<h3>微信红包</h3>
							<p>现金2000元、最佳手气奖衣物包一个</p>
						</dd> -->
					</dl>
				</div>
			</div>
		</div>
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
		</div>
        </el-dialog>
    </div>
</template>
<script>
    import mHeader from 'components/mHeader'
    import navBar from 'components/navBar'
    import slider from 'components/common/slider'
    import message from 'components/common/message'
    import imgView from 'components/common/imgView/imgView'
	import {matchDetail} from "../../service/getData"
    export default {
        components: {
            mHeader,
            navBar,
            slider,
            message,
            imgView
        },
        data() {
            return {
				anchorBtnArr: ["赛事简介", "赛事日程", "赛事说明", "奖项设置"],
				activeBtn: 0,
				centerDialogVisible: false, //控制弹窗是否显示
				bookId: this.$store.state.matchBookId, //获取状态管理模式的id
				details: {},
				searchBarFixed: false, //是否吸顶
                currentIndex: 3,    //根据这个值制定当前页面属于哪个导航栏部分
                navColor: 'white',  //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
                bannerList: []
            };
		},
		methods: {
			//锚点跳转
			goAnchor(selector, index) {
				this.activeBtn = index;
				document.documentElement.scrollTop = document.querySelector(selector).offsetTop -100;
            },
            scrollToAnchor() {
                var obj = document.getElementById("slid_title"),
                    tabsTitles = obj.children, // 导航
                    tabsContents = document.getElementById("tabs-content").children, // 模块
                    navLength = document.getElementById("slid_title").childElementCount - 1;
                var st = document.body.scrollTop || document.documentElement.scrollTop;

                var len = navLength;
                for (; len > -1; len--) {
                    var tabItem= tabsContents[len];
                    if (st >= tabItem.offsetTop - document.getElementById("slid_title").offsetHeight - 10) {
                    for (var i = 0; i < tabsTitles.length; i++) {
                        var c = tabsTitles[i].className;
                        tabsTitles[i].className = c.replace("active", "");
                    }
                    tabsTitles[len].className = tabsTitles[len].className + "active";
                    break;
                    }
                }
            },
			handleScroll () {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				let offsetTop = document.querySelector('#searchBar').offsetTop
                scrollTop+30> offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
                this.scrollToAnchor();
			},
		},
		beforeMount(){
			console.log(this.bannerList)
			matchDetail({id: this.bookId}).then((res)=>{
                this.details = res.result
                this.bannerList = this.details.eventImgs.split(',')
			    window.addEventListener('scroll', this.handleScroll)                
			})
		},
		destroyed () {
			window.removeEventListener('scroll', this.handleScroll)
		},
    }
</script>
<style lang="scss" scoped="" type="text/scss">
    @import '../../common/style/mixin';
    .header_content{
		// width: 100%;
        height: 480px;
        height: 480px;
		background-repeat: none;
        background-position: center top;
        background: url("../../assets/images/matchDetailBg.png") no-repeat center top;
        // background: url("../../assets/images/cdxq_banner.png") no-repeat center top;
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
        width: 800px;
        left: 50%;
        transform: translate(-600px, 0);
        position: absolute;
        z-index: 10000;
        top: 90px;
    }



    .isFixed{
		position:fixed;
		background-color:#Fff;
		top:0;
		z-index:999;
	}
    .main{
		width: 1200px;
        margin: 0 auto;
    }
    /*内容样式*/
	.content {
		width: 1200px;
		margin: 0px auto 60px;
	}
    // .bd_banner{
	// 	background: url("../../assets/images/saishi_banner.png") no-repeat center top;
	// 	background-size:cover;
	// 	width:100%;
	// 	height: 420px;
	// }
	
	.bd_banner div{
        background: rgba(0, 0, 0, .3);
        height: 103px;
        width: 800px;
        padding: 20px;
		margin: 0px auto;
		color: #FFFFFF;
	}
	.bd_banner h2{
		font-size: 22px;
		line-height: 36px;
		text-align: center;
	}
	.bd_banner span{
		display: block;
		width: 100%;
		font-size: 14px;
		line-height: 28px;
		margin:0px 0px 10px;
		text-align: center;
	}
	.bd_banner a.btn{
		background:#d1d5d3 ;
		display: block;
		width: 113px;
		height: 30px;
		line-height: 30px;
		font-size:14px;
		color: #2A3E2C;
		margin: 0px auto;
		text-align: center;
		border-radius: 30px;
	}
	.menu{
		font-size: 14px;
        margin-bottom:10px;
        color: #FFFFFF;
	}
	.menu a{ color: #FFFFFF;}
	dl.head_dl dd{
		background: url("../../assets/images/xq_mark.png") no-repeat left center;
		background-size: 124px 29px;
		width: 103px;
		height: 29px;
		line-height: 29px;
		color: #FFFFFF;
		font-size: 12px;
		padding-left: 21px;
	}
	.zx_cont{
		background: #FAFAFA;
		height: 542px;
		padding: 30px 0px;
		width: 100%;
		overflow: hidden;
	}
	.vd_list{ overflow: hidden; width:1200px; margin: 0px auto;}
	.slid_title{
		padding-top: 30px;
		 width: 1200px;
		 margin: 0 auto;
		 font-size: 22px;
		 line-height: 30px;
		 overflow: hidden;	
		 background: #fff;	 
	}
	.slid_title li{
		color: #999999;
		text-align: center;
		width: 25%;
		padding: 20px 0px;
		float: left;
		cursor: pointer;
	}
	.slid_title li.active{
		color: #8F6448;
		border-bottom: 2px solid #8F6448;
	}
	.slid_cont{
		border-left:2px solid #EBEBEB;
		padding-left: 5px;
		
	}
	.slid_cont dl{
		margin-top: 50px;
	}
	.slid_cont dl dt{
		font-size: 18px;
		color: #8F6448;
		line-height: 25px;
		padding-left: 20px;
		background: url("../../assets/images/d.png") no-repeat 5px center;
		background-size:8px 8px ;
		margin-left: -5px;
	}
	.slid_cont dl dd{
		font-size: 16px;
		color: #333333;
		line-height: 40px;
		padding-left: 35px;
	}
	.slid_cont dl dd h3{
		line-break: 40px;
		margin: 5px 0px;
		color: #333333;
		font-size: 16px;
		font-weight: normal;
		
	}
	.slid_cont dl dd p{
		color: #666666;
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
	.searchBar{
  .isFixed{
    position:fixed;
    background-color:#Fff;
    top:0;
    z-index:999;
  }
  ul {
    WIDTH:100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    li {
      font-size: 0.8rem;
      text-align: center;
      flex: 1;
      i {
        font-size: 0.9rem;
        padding-left: 5px;
        color: #ccc;
      }
    }
    border-bottom: 1px solid #ddd;
  }
}
pre{
	// white-space: normal;
	font-family: "Microsoft YaHei";
	white-space: pre-wrap;
	font-family: "微软雅黑";
}
</style>
<style type="text/css">
	.el-dialog__body{
		padding: 15px 0px;
		border:0px;
	}
</style>

