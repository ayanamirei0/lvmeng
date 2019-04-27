<template>
   <div class="slider">
       <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imgUrl" :key="index"><img :src="item.picUrl? item.picUrl: item" height="480px" @click="go(item.redirectUrl)"/></div>
            </div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import 'swiper/dist/js/swiper.min.js'

    export default {
      data() {
        return {
          isLoop: false
        }
      },
      props: {
        imgUrl: {
          type: [Array, Object],
          default: () => {
          }
        },
        imgHeight: {
          type: Number,
          default: 340
        }
      },
      updated() {
        var len = this.imgUrl.length
        if (len == 1) {
          this.isLoop = 0
        } else {
          this.isLoop = 5000
        }
        this.slider = new Swiper('.swiper-container', {
          autoplay: this.isLoop,
          speed: 300,
          loop: true,
          autoplayDisableOnInteraction: false,
          // observer: true,//修改swiper自己或子元素时，自动初始化swiper
          // observeParents: true,//修改swiper的父元素时，自动初始化swiper
          // 分页器
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          // navigation: {
          //     nextEl: '.swiper-button-next',
          //     prevEl: '.swiper-button-prev',
          // },
          // pagination: {
          //     el: '.swiper-pagination',
          // }
        })
        // this.$refs.slideImg.style.height = this.imgHeight + 'px'
      },
      computed: {
        // imgUrl() {
          // var len = this.imgUrl.length
          // if (len == 4) {
          //   // this.slider.loop = false
          // } else {
          //   this.slider.loop = true
          // }
        // }
      },
      methods: {
        initFocus(id) {
          // console.log(id)
        },
        go(url){
            window.open(url)
        }
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../common/style/mixin';
    .swiper-container {
        width: 100%;
        height: 480px;
    }
    .swiper-container .swiper-button-prev{
        top: 250px;
    	left: 2%;
    	background: url("../../assets/images/bg_group1.png") no-repeat right center;
        background-size:75px 75px;
        width: 75px;
        height: 75px;
        z-index: 99999;
    }
    .swiper-container .swiper-button-next{
        top: 250px;
    	right:2%;
    	background: url("../../assets/images/bg_group2.png") no-repeat right center;
        background-size:75px 75px;
        width: 75px;
        height: 75px;
        z-index: 99999;
    }
</style>
