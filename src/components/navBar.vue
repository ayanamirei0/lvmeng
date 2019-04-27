<template>
    <div class="footer">
        <div class="foot">
        <div class="ft_l">
            <dl>
                <router-link tag="dt" to="about-us">
                    关于我们
                </router-link>
                <router-link tag="dt" to="legal-statement">
                    法律声明
                </router-link>
                <router-link tag="dt" to="privacy-statement">
                    隐私声明
                </router-link>
            </dl>
            <dl>
                <!-- <dt>合作伙伴</dt> -->
                <dt>
                    客服电话
                </dt>
                <dt>
                    400-817-8588
                </dt>
            </dl>
            <!-- <dl>
                <router-link tag="dt" to="news">新闻动态</router-link>
            </dl> -->
        </div>
        <dl class="ft_c">
            <dt>
                <img src="../assets/images/erwm.jpg" alt="二维码">
                <p>关注普信绿盟公众号</p>
            </dt>
        </dl>
        </div>
        <div class="ft_border">湖南绿盟体育俱乐部有限公司 湘ICP备19006591号</div>


        <div class="slider1">
			<ul>
				<li @mouseover="showCode()"  @mouseleave="hideCode()">
					<a class="slid_1" href="javascript:;"></a>
                    <p class="slid_ct1" v-show="showCodeIt">
						<span class="sp_im1">服务热线</span>
						<span class="sp_im2">400-817-8588</span>
					</p>
					
				</li>
				<li @mouseover="showTel()"  @mouseleave="hideTel()">
					<a class="slid_2"  href="javascript:;"></a>
					<p class="slid_ct2" v-show="showTelIt">
						<span>关注普信绿盟服务号</span>
					</p>
				</li>
				<li v-show="toTop" @click="gotoTop()"><a class="slid_3"  href="javascript:;"></a></li>
			</ul>
		</div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                toTop: false,    //是否展示置顶
                showCodeIt: false,   //是否展示二维码
                showTelIt: false
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll, true)
            // window.onscroll= function(){
            //     //变量t是滚动条滚动时，距离顶部的距离
            //     var t = document.documentElement.scrollTop||document.body.scrollTop;
            //     //当滚动到距离顶部200px时，返回顶部的锚点显示
            //     if(t>=50){
            //         this.toTop = true;
            //     }else{          //恢复正常
            //         console.log(t);
            //         this.toTop = true;

            //     }
            // }
        },
        methods: {
            handleScroll() {
                var t = document.documentElement.scrollTop||document.body.scrollTop;
                if(t>=50){
                    this.toTop = true;
                }else{          //恢复正常
                    console.log(t);
                    this.toTop = false;
                }
            },
            showCode(){
                this.showCodeIt = true
            },
            hideCode(){
                this.showCodeIt = false
            },
            showTel(){
                this.showTelIt = true
            },
            hideTel(){
                this.showTelIt = false
            },
            gotoTop(){
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    @import '../common/style/mixin';
    /*页脚*/
    .footer{
        background: url("../assets/images/bg_back1.png") no-repeat center bottom;
        background-size:1920px 260px;
        font-size: 18px;
        color: #969696;
        position: relative;
        overflow: hidden;
        height: 200px;
        padding-top: 60px;
    }
    .foot{
        width: 1200px;
        margin: 0px auto;
    }
    .ft_l{ width: 680px;float: left;}
    .ft_l dl{
        float: left;
        width: 160px;
        text-align: left;
    }
    .ft_l dl dt{
        font-size: 14px;
        color: #969696;
        line-height: 26px;
        margin-bottom: 17px;
    }
    .ft_l dl:nth-child(1) dt{
        cursor: pointer;
    }
    .ft_l dl dd{
        font-size: 13px;
        line-height:19px;
    }
    .ft_l dl dd p{
        margin-bottom: 10px;
    }
    .ft_c{ width: 150px; height: 126px;
    float:right;}
    .ft_c dt{ font-size: 13px;  text-align: center; margin:0px 10px;}
    .ft_c dt img{
        width: 106px;
        height: 106px;
    }
    .ft_c dt p{ text-align: center; line-height: torem(20);}
    .ft_border{ border-top:1px solid #716f6f; height: 50px; line-height: 50px; font-size: 12px; float: left;text-align: center; width: 100%; margin-top: 20px;}
    .slider{
        position: fixed;
        right: 20px;
        top: 100px;
    }
    .slider ul li{
        height: 48px;
        margin-top: 5px;
    }
    .slider ul li a img{
        width: 48px;
        height: 48px;
        
    }
    /*侧边浮窗*/
    .slider1{
		position: fixed;
		right: 20px;
		top: 50%;
		z-index: 9999999;
	}
	.slider1 ul li{
		margin-top: 0px;
		list-style:none;
		position: relative;
	}
	.slider1 ul li a img{
		width: 48px;
		height: 48px;
		
	}
	.slider1 ul li a{
		display: block;
		width: 48px;
		height: 48px;
		background-size: 48px 48px;
	}
	.slider1 ul li a.slid_1{
		 background: url("../assets/images/Viber.png") no-repeat center bottom;
	}
	.slider1 ul li a.slid_1:hover{
		 background: url("../assets/images/Viber_hover.png") no-repeat center bottom;
	}
	.slider1 ul li a.slid_2{
		 background: url("../assets/images/er.png") no-repeat center bottom;
	}
	.slider1 ul li a.slid_2:hover{
		 background: url("../assets/images/er_hover.png") no-repeat center bottom;
	}
	.slider1 ul li a.slid_3{
		 background: url("../assets/images/go.png") no-repeat center bottom;
	}
	.slider1 ul li a.slid_3:hover{
		 background: url("../assets/images/go_hover.png") no-repeat center bottom;
	}
	.slider1 ul li p{
		position: absolute;
		
	}
	.slider1 ul li p.slid_ct1{
		background: url("../assets/images/slid_ct2.png") no-repeat center bottom;
		background-size: 158px 124px;
		width: 158px;
		height: 107px;
		left: -158px;
		top: -30px;
		padding-top: 17px;
	}
	.slider1 ul li p.slid_ct1 span{
		display: block;
		font-size: 12px;
		text-align: center;
		color: #646464;
	}
	.slider1 ul li p.slid_ct1 span.sp_im1{
		background: url("../assets/images/slid_ct2img.png") no-repeat center top;
		background-size: 42px 39px;
		width: 158px;
		height: 20px;
		padding-top: 45px;
	}
	.slider1 ul li p.slid_ct1 span.sp_im1{
		color: #CEBCA6;
	}
	.slider1 ul li p.slid_ct2{
		background: url("../assets/images/slid_ct1.png") no-repeat center bottom;
		background-size: 168px 176px;
		width: 168px;
		height: 176px;
		left: -168px;
		top: -60px;
	}
	.slider1 ul li p.slid_ct2 span{
		display: block;
		background: url("../assets/images/slid_ct1img.png") no-repeat center bottom;
		background-size: 110px 136px;
		width: 110px;
		height: 20px;
		margin: 15px 25px;
		font-size: 9px;
		padding-top: 116px;
		color: #FFFFFF;
		text-align: center;
	}
	
</style>
