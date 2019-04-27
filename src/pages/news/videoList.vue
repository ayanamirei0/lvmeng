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
        >新闻动态 </router-link>> 视频列表
      </div>
      <p>
        <span class="title">精彩视频</span>
      </p>
      <ul class="cont_list">
        <li
          v-for="item of videoList"
          :key="item.id"
          @click="toVideoDetail(item.id)"
        >
          <router-link to="/news-video">
            <img
              :src="item.coverImagesPath"
              alt="新闻动态"
            >
            <dl>
              <dt>
                {{ item.title.length > 63? item.title.substr(0,63) + "..." : item.title }}
              </dt>
              <dd>
                <p>{{ item.introduction.length > 100? item.introduction.substr(0,270) + "..." : item.introduction }}</p>
                <span>{{item.pushTimeStr}}</span>
              </dd>
            </dl>
            <span class='b'></span>
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
import { videoList } from "../../service/getData";
import { getFormatDate } from "common/js/util";

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
      videoList: []
    };
  },
  methods: {
    // 获取视频列表
    videoListFun() {
      videoList({
        startPage: 1,
        pageSize: 10,
        videoType: 1
      }).then(res => {
        this.videoList = res.result.data;
      });
    },
    toVideoDetail(id) {
      this.$store.commit("videoListId", id);
    },
    //时间戳转换
    transfromTime(time) {
      return getFormatDate(time);
    }
  },
  mounted() {
    this.videoListFun();
  }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
/*内容部分*/
.zx_cont {
  background: #fafafa;
  /*height: 384px;*/
  /*padding: 65px 0px;*/
  width: 100%;
  overflow: hidden;
}
.videoWrapper {
  /*height: 522px;*/
  h2 {
    height: 80px;
    line-height: 80px;
    font-size: 22px;
    color: #333333;
    width: 1200px;
    margin: 0px auto;
  }
  .zx_list {
    dl {
      dt {
        height: 522px;
        background: url(/static/img/zx_img5.4262383.png) no-repeat left top;
        background-size: 818px 383px;
        position: relative;
        width: 818px;
        z-index: 10;
      }
    }
  }
}
.zx_list {
  overflow: hidden;
  width: 1200px;
  margin: 0px auto;
}
.content .menu {
  padding-top: 20px;
  font-size: 14px;
  color: #666;
  a{
    color: #666;
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
.zx_list dl dd.lucency {
  width: 100%;
  height: 74px;
  background: #000000;
  opacity: 0.5;
  filter: Alpha(opacity=50);
  z-index: 25;
  padding: 0px;
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
.zx_list ul li.videoLi {
  border: none;
  margin-bottom: 0;
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
.zx_list ul li.moreLi {
  height: 50px;
  line-height: 50px;
  text-align: right;
  font-size: 18px;
  color: #999999;
  border: none;
  margin-bottom: 0;
}

.zx_list ul li p.videoTitle {
  height: 50px;
  line-height: 50px;
  text-overflow: ellipsis;
}
.zx_list ul li img {
  display: block;
  height: 188px;
  /*font-size: 14px;*/
  /*line-height: 21px;*/
  /*height: 21px;*/
  /*color: #999999;*/
  /*margin-bottom:11px;*/
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
  position: relative;
  &:first-child{
    margin-top: 0;
  }
}
.cont_list li span.b {
  display: block;
  position: absolute;
  background: url("../../assets/images/zx_video.png") no-repeat left top;
  background-size: 61px 61px;
  top: 40px;
  left: 93px;
  width: 61px;
  height: 61px;
  z-index: 20;
}
.cont_list li img {
  width: 250px;
  height: 140px;
  float: left;
}
.cont_list li dl {
  width: 920px;
  float: right;
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
  height: 90px;
  overflow: hidden;
}
.cont_list li dl dd span {
  display: block;
  color: #999999;
  font-size: 14px;
  line-height: 23px;
}
</style>
