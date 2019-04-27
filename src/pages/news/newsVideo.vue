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
            to="/videoList"
          >视频列表 </router-link>> 视频详情
        </div>
        <h1>{{ this.title }}</h1>
        <h2>{{ this.pushTimeStr}}</h2>
        <dl>
          <dt>
            <video
              width="755px"
              height="420px"
              controls="controls"
              name="media"
              autoplay
              ref='video'
            >
            </video>

          </dt>
        </dl>
        <ul>
          <h3>其他视频</h3>
          <li
            v-for="item of videoList"
            :key="item.id"
            @click="toVideoDetail(item.id)"
          >
            <p>
              <img
                :src="item.coverImagesPath"
                :alt="item.title"
              />
              <!-- <span class='b'></span> -->

              <!-- <video
                  :src="item.videoPath"
                  class="videoWrapper"
                  ref='videos'
                  controls="controls"
                ></video>
                -->
            </p>
            <div>
              <span>{{ item.title.length > 27? item.title.substr(0,27) + "..." : item.title }}</span>
              <span>{{item.pushTimeStr}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h2>其他动态</h2>
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
                <a href="javascript:;">{{ item.title }}</a>
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
import navBar from "components/navBar";
import slider from "components/common/slider";
import message from "components/common/message";
import spaceHeader from "components/common/spaceHeader";
import { videoDetail, videoList, informationList } from "../../service/getData";
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
      videoPath: "",
      title: "",
      updateTime: "",
      videoId: this.$store.state.videoId,
      videoList: [], //视频列表
      newsList: [] //新闻列表
    };
  },
  methods: {
    //视频详情
    videoDetail(id) {
      videoDetail(id).then(res => {
        const data = res.result;
        this.title = data.title;
        this.$refs.video.src = data.videoPath;
        this.updateTime = this.formatTime(data.updateTime);
      });
    },
    // 获取新闻列表
    newsListFun() {
      informationList({
        startPage: 1,
        pageSize: 6
      }).then(res => {
        this.newsList = res.result.data;
        console.log(this.newsList);
      });
    },
    // 获取视频列表
    videoListFun({ startPage: startPage, pageSize: pageSize }) {
      videoList({
        startPage: startPage,
        pageSize: pageSize,
        videoType: 1
      }).then(res => {
        this.videoList = res.result.data
          .filter(item => item.id != this.videoId)
          .slice(0, 3);
        // this.$refs.videos.src = res.result.list.videoPath
        console.log(this.videoList);
      });
    },
    toVideoDetail(id) {
      this.$store.commit("videoListId", id);
      window.location.reload();
    },
    //时间处理
    formatTime(str) {
      var date = new Date(str);
      var y = 1900 + date.getYear();
      var m = "0" + (date.getMonth() + 1);
      var d = "0" + date.getDate();
      return (
        y +
        "-" +
        m.substring(m.length - 2, m.length) +
        "-" +
        d.substring(d.length - 2, d.length)
      );
    },
    //展示新闻详情
    showDetail() {
      var id = this.$store.state.videoId; //vuex取id
      this.videoDetail(id); //通过id调用详情接口
    },
    //通过Vuex存储咨询列表id
    toNewsDetail(id) {
      this.$store.commit("newsListId", id);
    },
    //时间戳转换
    transfromTime(time) {
      return getFormatDate(time);
    }
  },
  beforeMount() {},
  created() {},
  mounted() {
    this.showDetail();
    this.videoListFun({ startPage: 1, pageSize: 4 });
    this.newsListFun();
  }
};
</script>
<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
a {
  color: #333333;
}
.videoWrapper {
  width: 338px;
  height: 188px;
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

/*内容部分*/

.zx_cont {
  background: #fafafa;
  // height: 726px;
  padding: 23px 0px 50px;
  width: 100%;
  overflow: hidden;
}
.vd_list {
  overflow: hidden;
  width: 1200px;
  margin: 0px auto;
}
.vd_list .menu {
  margin-bottom: 15px;
  font-size: 14px;
  color: #666666;
}
.vd_list h1 {
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
}
.vd_list h2 {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: normal;
  color: #666666;
}
.vd_list dl {
  float: left;
  width: 755px;
  height: 420px;
  position: relative;
}
.vd_list dl dt {
  width: 755px;
  height: 420px;
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
    }
  }
}
.vd_list dl dt img {
  height: 521px;
}

.vd_list ul {
  float: right;
  width: 438px;
}
.vd_list ul h3 {
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1;
  color: #666;
  font-weight: normal;
}
.vd_list ul li {
  display: flex;
  cursor: pointer;
  margin-top: 15px;
  position: relative;
  >div{
    flex:1;
    padding-left: 12px;
  }
}
.vd_list ul li p {
  position: relative;
  line-height: 33px;
  font-size: 18px;
  width: 216px;
  height: 120px;
  color: #666666;
}
.vd_list ul li p img {
  width: 216px;
  height: 120px;
}
.vd_list ul li span {
  display: block;
  font-size: 15px;
  text-overflow: ellipsis;
  // white-space: nowrap;
  color: #333333;
  margin-bottom: 10px;
  &:nth-child(2){
    margin-top: 20px;
    font-size: 12px;
    color: #666;
  }
}
.vd_list ul li span.b {
  display: block;
  position: absolute;
  background: url("../../assets/images/zx_video.png") no-repeat left top;
  background-size: 61px 61px;
  top: 69px;
  left: 136px;
  width: 61px;
  height: 61px;
  z-index: 20;
}
.content {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.content h2 {
  line-height: 75px;
  font-size: 16px;
  color: #333;
  font-weight: normal;
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
  height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
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
