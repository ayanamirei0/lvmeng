<template>
     <div class="city">
            <input type="text" placeholder="选择城市" id="checkCity" readonly @click="showCityDialog" v-model="cityValue">
            <div class="citymask" v-show="showMask" @click="hideCityDialog()"></div>
            <div class="city-components"  v-if="showCity">
                <div class="hot_city">
                	<p>热门城市</p>
                    <span v-for="(item, index) in hotCityList" :key="index"  @click.prevent="viewCity(item.name)" :class="item.name == cityValue? 'spanActive' : ''">{{item.name}}</span>
                </div>
                <div class="city_slid">
                    <h2>
                        <span @click="CityInlandShow" :class="{on: !ison}">国内打球城市</span>
                        <span @click="internationalCityShow" :class="{on: ison}">国际打球城市</span>
                    </h2>
                    <!--国内城市-->
                    <div class="inlandWrapper" v-if="CityInland">
                        <ul>
                            <li v-for="(item, index) of chinaCityList" :key="index" @click="goAnchor('#initial'+index,index)">
                                {{ item.initial }}
                            </li>
                        </ul>
                        <div id="city_slid">
                            <dl v-for="(item, index) of chinaCityList" :key="index">
                                <dt :id='"initial"+ index +""'>{{ item.initial }}</dt>
                                <dd v-for="(a, b) in item.items" :key="b">
                                    <span class="province">{{a.province}}省</span>
                                    <p><span v-for="(c,d) of a.cities" :class="c.name == cityValue? 'spanActive' : ''" :key="d" @click.prevent="viewCity(c.name)" >{{ c.name }}</span></p>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <!--国际城市-->
                    <div class="internationalWrapper" v-if="internationalCity" >
                    <ul>
                        <!--这里要删除，换掉实际的数据-->
                        <!-- <li>国际</li> -->
                        <li v-for="(item, index) of internationalCityList" :key="index" @click="goAnchor('#initial'+index,index)">
                            {{ item.initial }}
                        </li>
                    </ul>
                    <div id="city_slid">
                        <dl v-for="(item, index) of internationalCityList" :key="index">
                            <dt :id='"initial"+ index +""'>{{ item.initial }}</dt>
                                <dd v-for="(a, b) in item.items" :key="b">
                                    <span class="province">{{a.province}}</span>
                                    <p><span v-for="(c,d) of a.cities" :class="c.name == cityValue? 'spanActive' : ''" :key="d" @click.prevent="viewCity(c.name)" >{{ c.name }}</span></p>
                                </dd>
                            <!-- <dt :id='"initial"+ index +""'>{{ item.initial }}</dt> -->
                            <!-- <dd><span v-for="(items,index) of item.items[0].cities" :class="items.name == cityValue? 'spanActive' : ''" :key="index" @click.prevent="viewCity(items.name)">{{ items.name }}</span></dd> -->
                        </dl>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import cityList from './cityJson.js'
// import {getBallCourtCity} from "../../../service/getData"
import getCurrentCityName from 'common/js/getUserLocation'

export default {
    props: {
        hotCityList: {
            type: Array,
            required: true,
            default: () => []
        },
        chinaCityList: {
            type: Array,
            required: true,
            default: () => []
        },
        internationalCityList: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data(){
        return {
            cityValue: this.defaultCity,
            showCity: false,
            // hotCityList: [],
            // chinaCity: chinaCityList,
            activeBtn: 0,
            CityInland:true,
            internationalCity:false,
            showMask: false,
            ison: false
        }
    },
    methods: {
        //隐藏城市选区
        hideCityDialog(){
            this.showCity = false;
            this.showMask = false;
        },
//          展示城市选区
        showCityDialog(){
            this.showCity = true;
            this.showMask = true;
        },
        viewCity(city){
            this.showMask = false;
            this.cityValue = city;//输入框显示当前选择的城市
            this.$emit("getcity", city)
            this.showCity = false;//关闭城市选区
        },
        //通过百度地图获取当前城市
        getCurrentCity() {
            getCurrentCityName().then((res) => {
                this.cityValue = res.name
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
            this.ison = false
            // this.$refs.inland.classList.add("on")
            // this.$refs.international.classList.remove("on")
        },
        internationalCityShow(){
            this.CityInland=false
            this.internationalCity=true
            this.ison = true

            // this.$refs.inland.classList.remove("on")
            // this.$refs.international.classList.add("on")
        }
    },
        mounted(){
            this.getCurrentCity()
        }
}
</script>
<style lang="scss" scoped="" type="text/scss">
    *{
        margin: 0;
        padding: 0;
    }
    .citymask{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 998;
        background: rgba($color: #000000, $alpha: 0)
    }
    .city{
        // width: 600px;
        // height: 600px;
        // margin: 0 auto;
        position:relative;
        .city-components{
            position: absolute;
            top: 40px;
            left: 6px;
            color: #fff;
            width: 697px;
            /*height: 338px;*/
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
				span:hover{
					color: #8F6448;
				}
				span.spanActive{
					color: #8F6448;
				}
        	}
        	.city_slid{
        		h2 {
        			text-align: center;
        			/*width:430px;*/
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
                        cursor: pointer;
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
                    p{
                        padding: 40px;
                    }
                    span{
                      display: inline-block;
                      float:left;
                      font-size: 16px;
                      margin-right: 40px;
                      color: #999999;
                    }
                    span.province{
                        width: 100%;
                        display: block;
                        color: #333;
                        font-weight: 300px;
                        margin-top: 20px;
                        cursor: default;
                    }
                    span.province:hover{
                        color: #000;
                    }
                    span:hover{
                    	color: #8F6448;
                    }
                    span.spanActive{
					color: #8F6448;
				}
                  }
                }
              }
             }
        	}
        }
    }
</style>
