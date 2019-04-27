<template>
  <div>
    <div class="header_content">
      <m-header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></m-header>
    </div>
    <space-header></space-header>
    <div class="zx_cont">
      <div class="vd_list">
        <div class="menu">
          <router-link
            tag="a"
            to="/news"
          > 新闻动态 </router-link>> 动态详情
        </div>
        <h1>{{ this.title }}</h1>
        <h2>{{ this.pushTimeStr }}</h2>
        <div
          class="content newscontent"
          v-html="this.content"
        ></div>

        <!-- <dl>
					<dt><a href="#" target="_blank"><img :src="titleImg"></a></dt>
				</dl> -->
      </div>
      <ul>
        <li
          v-for="item of newsList"
          :key="item.id"
          @click="toNewsDetail(item.id)"
        >
          <a href="javascript:;">
            <p>{{item.title.length > 62? item.title.substr(0,62) + "..." : item.title}}</p>
            <span>{{ item.pushTimeStr }}</span>
          </a>
        </li>
      </ul>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import mHeader from "components/mHeader";
import navBar from "components/navBar";
import slider from "components/common/slider";
import message from "components/common/message";
import spaceHeader from "components/common/spaceHeader";
import { informationDetail, informationList } from "../../service/getData";

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
      currentIndex: 5, //根据这个值制定当前页面属于哪个导航栏部分
      navColor: "black", //white代表导航栏是白色的字体 black代表导航栏是黑色的字体
      title: "", //以下三个变量是详情里需要的
      content: "",
      newsId: this.$store.state.newsId,
      pushTimeStr: "",
      titleImg: "",
      newsList: [] //这里是详情里的列表需要的
    };
  },
  methods: {
    //新闻详情接口
    newsDetailFun(id) {
      informationDetail(id).then(res => {
        const data = res.result;
        this.title = data.title; //方法里面修改属性
        this.content = data.content;
        this.pushTimeStr = data.pushTimeStr;
        this.titleImg = data.titleImg;
      });
    },
    //通过Vuex存储咨询列表id
    toNewsDetail(id) {
      this.$store.commit("newsListId", id);
      var newsId = this.$store.state.newsId; //vuex取id
      this.newsDetailFun(newsId); //通过id调用本文章里面的新闻详情接口
      window.location.reload();
    },
    // 获取新闻列表
    newsListFun() {
      informationList({
        startPage: 1,
        pageSize: 6
      }).then(res => {
        this.newsList = res.result.data.filter(item => item.id != this.newsId);
        console.log(this.newsList);
      });
    },
    //展示新闻详情
    showDetail() {
      var id = this.$store.state.newsId; //vuex取id
      this.newsDetailFun(id); //通过id调用新闻详情接口
    }
  },
  mounted() {
    this.showDetail(); //展示数据到页面
    this.newsListFun(); //详情里面的列表
  }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
a {
  color: #333333;
}
header {
  width: 100%;
  color: #333333;
  border-bottom: 1px solid #ffffff;
}
.head_nav {
  width: 1200px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
}
#logo {
  width: 100px;
  height: 42px;
  margin-top: 19px;
}
.head_nav ul {
  width: 80%;
  height: 80px;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.head_nav ul li {
  margin-left: 65.6px;
  display: inline-block;
  font-size: 16px;
  padding: 28px 0px;
  height: 22px;
  line-height: 22px;
}
.head_nav ul li.active {
  border-bottom: 2px solid #8f6448;
  color: #8f6448;
}
.head_nav ul li.active a {
  color: #8f6448;
}
.orange {
  color: #906448;
}

body {
  background: #fafafa;
}
.zx_cont {
  // background: #FAFAFA;
  // height: 542px;
  // padding: 30px 0px;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
}
.vd_list {
  width: 740px;
  overflow: hidden;
}
.vd_list .menu {
  padding-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  margin-bottom: 15px;
  color: #666666;
  a{
    color: #666666;
  }
}
.vd_list h1 {
  font-size: 16px;
  margin: 15px auto 10px;
  color: #333333;
  font-weight: normal;
}
.vd_list h2 {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 30px;
  color: #666666;
}
.vd_list dl {
  float: left;
  width: 818px;
  position: relative;
}
.vd_list dl dt {
  width: 818px;
  height: 383px;
}
.vd_list dl dt img {
  width: 818px;
  height: 383px;
}
.zx_cont ul {
  // float: right;
  width: 422px;
  // height: 383px;
  overflow: hidden;
  margin-top: 56px;
  padding-left: 30px;
}
.zx_cont ul li {
  border-bottom: 1px solid #ececec;
  margin-bottom: 20px;
}
.zx_cont ul li p {
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 15px;
  color: #333333;
  overflow: hidden;
  &:first-child{
    margin-top: 0;
  }
}
.zx_cont ul li span {
  display: block;
  font-size: 14px;
  color: #999999;
  margin-bottom: 10px;
}
.content {
  width: 740px;
  // margin: 0px auto 60px;
  overflow: hidden;
  // padding-top: 30px;
  // padding-right: 382px;
  margin-bottom: 60px;
}
</style>
<style>
.newscontent img {
  width: 100%;
}
.newscontent p {
  font-size: 16px;
  line-height: 40px;
  text-indent: 20px;
  width: 100%;
}
.newscontent p:nth-child(1) {
  font-size: 14px;
  padding: 30px 0px;
}
</style>
