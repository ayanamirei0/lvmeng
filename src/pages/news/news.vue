<template>
  <div>
    <div class="header_content">
      <m-header
        :currentIndex="currentIndex"
        :navColor="navColor"
      ></m-header>
    </div>
    <spaceHeader></spaceHeader>
    <div class="zx_cont videoWrapper">
      <h2>精彩视频</h2>
      <div class="zx_list">
        <dl
          v-for="item of videoList.slice(0,1)"
          :key="item.id"
          @click="toVideoDetail(item.id)"
        >
          <router-link to="/news-video">
            <dt :style="{background: `url(${item.coverImagesPath}) no-repeat`,backgroundSize: 'cover'}">
              <b></b>
            </dt>
            <dd>
              <p>{{item.title}}</p>
              <span>{{item.pushTimeStr}}</span>
            </dd>
            <dd class="lucency"></dd>
          </router-link>
        </dl>
        <ul>
          <li class="moreLi">
            <router-link to="/videoList">更多视频</router-link>
          </li>
          <li
            class="videoLi"
            v-for="item of videoList.slice(1,videoLength)"
            :key="item.id"
            @click="toVideoDetail(item.id)"
          >
            <router-link
              tag="a"
              to="/news-video"
            >
              <div class="item">
                <p><img :src="item.coverImagesPath" /></p>
                <div>
                  <p class="videoTitle">{{ item.title.length > 27? item.title.substr(0,27) + "..." : item.title}}</p>
                  <p class="videoInfo">{{item.pushTimeStr}}</p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div>
        <p>
          <span class="title">新闻动态</span>
          <router-link
            class="more"
            to="infomationList"
          >
            更多动态
          </router-link>
        </p>
        <ul class="cont_list">
          <li
            v-for="item of newsList.slice(0,newsLength)"
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
                  <router-link
                    tag="a"
                    to="/news-details"
                  >
                    {{ item.title }}
                  </router-link>
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
import { informationList, videoList } from "../../service/getData";
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
      newsList: [],
      newsLength: 6, //设计图上展示的6条数据
      videoList: [],
      videoLength: 4
    };
  },
  methods: {
    // 获取新闻列表
    // 获取新闻列表
    newsListFun() {
      informationList({
        startPage: 1,
        pageSize: 6
      }).then(res => {
        this.newsList = res.result.data;
      });
    },
    // 获取视频列表
    videoListFun() {
      videoList({
        startPage: 1,
        pageSize: 6,
        videoType: 1
      }).then(res => {
        this.videoList = res.result.data;
      });
    },
    //通过Vuex存储咨询列表id
    toNewsDetail(id) {
      this.$store.commit("newsListId", id);
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
    this.newsListFun();
    this.videoListFun();
  }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
/*内容部分*/
.zx_cont {
  // background: #FAFAFA;
  /*height: 384px;*/
  /*padding: 65px 0px;*/
  width: 100%;
  overflow: hidden;
}
.videoWrapper {
  padding-bottom: 50px;
  /*height: 522px;*/
  h2 {
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    color: #333333;
    width: 1200px;
    margin: 0px auto;
  }
  .zx_list {
    dl {
      dt {
        height: 420px;
        background: url(/static/img/zx_img5.4262383.png) no-repeat left top;
        background-size: 755px 420px;
        position: relative;
        width: 755px;
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
.zx_list dl {
  float: left;
  width: 755px;
  position: relative;
}
.zx_list dl dt {
  background: url("../../assets/images/zx_img5.png") no-repeat left top;
  background-size: 755px 420px;
  position: relative;
  width: 755px;
  height: 420px;
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
  padding: 5px 20px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 30;
}
.zx_list dl dd.lucency {
  width: 100%;
  height: 48px;
  background: #000000;
  opacity: 0.5;
  filter: Alpha(opacity=50);
  z-index: 25;
  padding: 0px;
}
.zx_list dl dd p {
  font-size: 14px;
  color: #ffffff;
  line-break: 29px;
  line-height: 1.5;
}
.zx_list dl dd span {
  font-size: 12px;
  color: #ffffff;
  line-height: 1.5;
}
.zx_list dl dd img {
  font-size: 15px;
  color: #ffffff;
  margin-top: 8px;
  display: block;
}
.zx_list ul {
  float: right;
  width: 436px;
}
.zx_list ul li {
  // border-bottom: 1px solid #ececec;
  margin-bottom: 15px;
  position: relative;
}
.zx_list ul li b {
  display: block;
  position: absolute;
  background: url("../../assets/images/zx_video.png") no-repeat left top;
  background-size: 61px 61px;
  top: 50%;
  left: 50%;
  margin: -48px 0px 0px -30px;
  width: 61px;
  height: 61px;
  z-index: 20;
}
// .zx_list ul li.videoLi{
//     border: none;
//     margin-bottom: 0;
//     cursor: pointer;
// }
// .zx_list ul li.videoLi p{
//   margin-bottom: 0;
// }
.zx_list ul li.videoLi {
  .item {
    display: flex;
    > p {
      img {
        width: 216px;
        height: 120px;
      }
    }
    >div{
      padding-left: 12px;
      .videoTitle {
      line-height: 25px;
      height: auto;
      font-size: 15px;
      color: #333;
      height: 90px;
    }
    .videoInfo {
      margin-top: 5px;
      line-height: 2;
      font-size: 12px;
      color: #666;
    }
    }
  }
}
// .zx_list ul li p{
//     height: 66px;
//     max-height: 66px;
//     line-height: 33px;
//     font-size: 18px;
//     color: #666666 ;
//     margin-bottom: 15px;
//     overflow: hidden;
//     text-overflow: ellipsis;
// }
.zx_list ul li.moreLi {
  border: none;
  margin-bottom: 12px;
  a {
    width: 7em;
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    color: #999999;
    background: url("../../assets/images/Group13.png") no-repeat center right;
    background-size: 50px auto;
  }
}

.zx_list ul li p.videoTitle {
  height: 48px;
  line-height: 48px;
  text-overflow: ellipsis;
  color: #333333;
}
.zx_list ul li img {
  display: block;
  height: 188px;
  width: 100%;
  /*font-size: 14px;*/
  /*line-height: 21px;*/
  /*height: 21px;*/
  /*color: #999999;*/
  /*margin-bottom:11px;*/
}
.content {
  overflow: hidden;
  background-color: #fafafa;
  > div {
    width: 1200px;
    margin: 0px auto;
    > p {
      display: flex;
      height: 75px;
        line-height: 75px;
      font-size: 22px;
      color: #333333;
      width: 1200px;
      margin: 0px auto;
      span {
        flex: 1;
      }
      .title {
        font-size: 16px;
        font-weight: 700;
      }
      .more {
        width: 100px;
        background: url("../../assets/images/Group13.png") no-repeat center right/ 50px auto;
        text-align: left;
        font-size: 14px;
        color: #999999;
      }
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
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f1f1f1;
  overflow: hidden;
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
  height: 65px;
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
