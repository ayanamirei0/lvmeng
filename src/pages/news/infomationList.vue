<template>
  <div>
    <div class="header_content">
      <m-header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></m-header>
    </div>
    <spaceHeader></spaceHeader>
    <div class="content">
      <div class="menu">
        <router-link
          tag="a"
          to="/news"
        > 新闻动态 </router-link>> 动态列表
      </div>
      <p>
        <span class="title">新闻动态</span>
      </p>
      <ul class="cont_list">
        <li
          v-for="item of newsList"
          :key="item.id"
          @click="toNewsDetail(item.id)"
        >
          <router-link to="/news-details">
            <img
              :src="item.picUrl"
              alt="新闻动态"
            >
            <dl>
              <dt>
                {{ item.title }}
              </dt>
              <dd>
                <p v-html="item.introduction"></p>
                <span>{{ item.pushTimeStr }}</span>
              </dd>
            </dl>
          </router-link>
        </li>
      </ul>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import mHeader from "components/mHeader";
import spaceHeader from "components/common/spaceHeader";
import navBar from "components/navBar";
import slider from "components/common/slider";
import message from "components/common/message";
import { informationList } from "../../service/getData";

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
      newsList: []
    };
  },
  methods: {
    // 获取新闻列表
    newsListFun() {
      informationList({
        startPage: 1,
        pageSize: 10
      }).then(res => {
        this.newsList = res.result.data;
      });
    },
    //通过Vuex存储咨询列表id
    toNewsDetail(id) {
      this.$store.commit("newsListId", id);
    }
  },
  mounted() {
    this.newsListFun();
  }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
.content .menu {
  padding-top: 20px;
  font-size: 14px;
  color: #666666;
  a {
    font-size: 14px;
    color: #666666;
  }
}
.zx_list dl {
  float: left;
  width: 818px;
  position: relative;
}
.zx_list dl dt {
  background: url("../../assets/images/zx_img5.png") no-repeat left top;
  background-size: 818px 383px;
  position: relative;
  width: 818px;
  height: 383px;
  z-index: 10;
}
.zx_list dl dt b {
  display: block;
  position: absolute;
  background: url("../../assets/images/zx_video.png") no-repeat left top;
  background-size: 122px 122px;
  top: 50%;
  left: 50%;
  margin: -67px 0px 0px -67px;
  width: 122px;
  height: 122px;
  z-index: 20;
}
.zx_list dl dd {
  padding: 10px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 30;
}
.zx_list dl dd p {
  font-size: 22px;
  color: #ffffff;
  line-break: 29px;
}
.zx_list dl dd img {
  font-size: 15px;
  color: #ffffff;
  margin-top: 8px;
  display: block;
}
.zx_list ul {
  float: right;
  width: 360px;
}
.zx_list ul li {
  border-bottom: 1px solid #ececec;
  margin-bottom: 20px;
}
.zx_list ul li.videoLi p {
  margin-bottom: 0;
}
.zx_list ul li p {
  height: 66px;
  max-height: 66px;
  line-height: 33px;
  font-size: 18px;
  color: #666666;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.zx_list ul li img {
  display: block;
  height: 188px;
}
.content {
  width: 1200px;
  margin: 0px auto;
  overflow: hidden;
  > p {
    display: flex;
    height: 44px;
    line-height: 44px;
    color: #333333;
    width: 1200px;
    margin: 0px auto;
    span {
      flex: 1;
      font-size: 16px;
      font-weight: 700;
    }
    .more {
      text-align: right;
      font-size: 18px;
      color: #999999;
    }
  }
}
.cont_list {
  width: 100%;
}
.cont_list h2 {
  font-size: 24px;
  color: #454545;
  width: 100%;
}
.cont_list li {
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f1f1f1;
  overflow: hidden;
  &:first-child{
    margin-top: 0;
  }
}
.cont_list li img {
  width: 250px;
  height: 140px;
  float: left;
}
.cont_list li dl {
  width: 920px;
  float: right;
  height: 140px;
  position: relative;
}
.cont_list li dl dt {
  width: 100%;
  margin-bottom: 7px;
  font-size: 16px;
  color: #323333;
}
.cont_list li dl dt a {
  color: #323333;
  font-size: 16px;
  line-height: 27px;
}
.cont_list li dl dd p {
  line-height: 22px;
  font-size: 14px;
  color: #666666;
  height: 69px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
}
.cont_list li dl dd span {
  display: block;
  color: #999999;
  font-size: 14px;
  line-height: 18px;
  position: absolute;
  left: 0px;
  bottom: -2px;
}
</style>
