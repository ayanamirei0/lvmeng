<template>
    <div>
        <div class="header_content">
            <m-header
                :currentIndex="currentIndex"
                :navColor="navColor"
            ></m-header>
        </div>
        <div class="main">
            <h3>优选假日</h3>
            <ul>
                <li
                    :class="[filterIndex == index? 'active' : '']"
                    v-for="(item, index) in showCityList"
                    :key="item.id"
                    @click="cityTab(index, item.id)"
                >{{item.name}}</li>
            </ul>
            <div class="content">
                <no-search-results v-if="total == 0"></no-search-results>
                <div
                    class="wrap"
                    v-for="item in showDetailList"
                    :key="item.id"
                    @click="goToHolidayDetail(item.id)"
                >
                    <img
                        :src="item.picthumb"
                        :alt="item.name"
                    >
                    <img
                        v-if="item.is_preferential == 1"
                        src="../../assets/images/is_prefer.png"
                        alt="特惠"
                        class="is_preferential"
                    >
                    <div class="descript">
                        <h5>{{item.title}} - {{item.intro}}</h5>
                        <div class="pip">
                            <span>{{item.intro}}</span>
                        </div>
                        <div class="pip pipOther">
                            <span class="pipOne">¥{{item.price}}<span id="black">起</span></span>
                            <!-- <span class="pipTwo">会员免费</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav-bar></nav-bar>
    </div>
</template>
<script>
import mHeader from "components/mHeader";
import navBar from "components/navBar";
import slider from "components/common/slider";
import noSearchResults from "components/common/noSearchResults";
import { getHolidayCityData, getTourismList } from "../../service/getData";
export default {
    components: {
        mHeader,
        navBar,
        slider,
        noSearchResults
    },
    data() {
        return {
            currentIndex: 2, //根据这个值制定当前页面属于哪个导航栏部分
            navColor: "white", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
            showCityList: [],
            showDetailList: [], //旅游城市
            filterIndex: 0, //默认选择第一个城市进行显示
            total: 0,
            pageSize: 20
        };
    },
    beforeMount() {     //在挂载页面前就发起请求
        getHolidayCityData().then(res => {
            this.showCityList = res.result;
            getTourismList({
                cityId: this.showCityList[0].id,
                startPage: 1,
                pageSize: this.pageSize
            }).then(res => {
                this.showDetailList = res.result.listData;
                this.total = res.result.listData.length;
            });
        });
    },
    mounted() {
        this.scroll(this.showDetailList);
    },
    methods: {
        cityTab(index, cityId) {
            this.filterIndex = index;
            getTourismList({
                cityId: cityId,
                startPage: 1,
                pageSize: this.pageSize
            }).then(res => {
                this.showDetailList = res.result.listData;
                this.total = res.result.listData.length;
            });
        },
        goToHolidayDetail(id) {
            this.$store.commit("holidayBookId", id);
            this.$router.push("/holiday-detail");
        },

        scroll(cityArr) {   //下拉滚动发起请求
            //arr存放旅游城市
            let on_off = false;
            window.onscroll = () => {
                // 距离底部300px时加载一次
                let bottomOfWindow =
                        document.documentElement.offsetHeight -
                        document.documentElement.scrollTop -
                        window.innerHeight <= 300;     
                if (bottomOfWindow && on_off == false) {
                    on_off = true;
                    getHolidayCityData().then(res => {
                        this.showCityList = res.result;
                        getTourismList({
                            cityId: this.showCityList[0].id,
                            startPage: 1,
                            pageSize: this.pageSize
                        }).then(res => {
                            console.log(res.result.listData);
                            console.log(typeof(cityArr));
                            
                            cityArr.concat(res.result.listData);
                            console.log(cityArr,'拼接以后的城市数据');
                            //this.showDetailList = res.result.listData;
                            this.total = res.result.listData.length;
                            on_off = false;
                        });
                    });
                }
            };
        }
    }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
.header_content {
    height: 480px;
    background: url("../../assets/images/header_jyjr.png") no-repeat center top;
    background-size: cover;
}
.main {
    width: 1200px;
    margin: 0 auto;
}
h3 {
    font-weight: normal;
    margin: 40px 0;
    height: 36px;
    line-height: 36px;
    font-size: 24px;
    text-align: center;
}
ul {
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    height: 43px;
    line-height: 43px;
    margin-bottom: 20px;
}
ul li {
    list-style: none;
    font-size: 18px;
    color: #999999;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    padding: 0px 20px;
    cursor: pointer;
}
ul li.active {
    color: #906448;
    border-bottom: 3px solid #906448;
    padding-bottom: 15px;
}
.content {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
}
.wrap {
    width: 282px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #ececec;
    cursor: pointer;
    position: relative;
}
.wrap:nth-child(4n) {
    margin-right: 0px;
}
.wrap img {
    width: 100%;
    height: 166px;
    vertical-align: middle;
}
.descript {
    padding: 10px 20px;
    height: 82px;
    border-top: 1px solid #ececec;
}
.descript h5 {
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
}
.descript .pip {
    display: flex;
    justify-content: space-between;
    height: 20px;
    line-height: 20px;
    // margin-top: 10px;
}
.descript .pipOther {
    padding: 10px 0;
}
.descript .pip span {
    font-size: 14px;
    color: #757272;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
}
.descript .pip span.pipOne {
    color: #f96630;
    font-size: 16px;
}
.descript .pip span.pipTwo {
    display: block;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    color: #906448;
    width: 60px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #906448;
    border-radius: 5px;
}
#black {
    color: #3f3f3f;
    font-size: 12px !important;
}
.wrap img.is_preferential {
    position: absolute;
    top: 10px;
    left: -5px;
    width: 48px;
    height: 24px;
    z-index: 10;
}
</style>
