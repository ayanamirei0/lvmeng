<template>
    <div id="copySwiperCenter">
        <div class="copySwiper">
            <div><div class="upIt" @click.stop="upIt()" v-show="upItshow">往上翻</div></div>
            <ul>
                <li v-for="(item, index) in showbannerList" :key="index" @click.stop="viewIt(item)">
                    <img :src="item"/>
                </li>
            </ul>
            <div><div class="downIt" @click.stop="downIt()" v-show="downItshow">往下翻</div></div>
        </div>
        <div id="coverImg" v-show="closeBtn" @click.stop="close()">
            <div class="coverImgWrap">
                <div><div class="leftIt" @click.stop="leftIt()"></div></div>
                <ul>
                    <li><img :src="imgList[this.viewNum]" :height="imgHeight" :width="imgWidth"/></li>                
                </ul>
                <div><div class="rightIt" @click.stop="rightIt()"></div></div>
                <span class="colseView" @click.stop="close()">×</span>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        imgList: {
            type: Array,
            required: true,
            default: () => []
        },
        imgWidth: {
            type: Number,
            required: true,
        },
        imgHeight: {
            type: Number,
            required: true,
        }
       
    },
    data(){
        return {
            //是否展示相关图片的参数
            showNum: 0, //根据这个数字进行截取数组
            viewNum: 0,
            showbannerList: [],
            upItshow: false,
            downItshow: false,
            closeBtn: false
        }
    },
    beforeMount(){
        this.showbannerList = this.imgList.slice(0,3)
        console.log(this.imgList)
        //如果长度小于等于3，下翻按钮不展示
        if(this.imgList.length <= 3){
            this.downItshow = false;
        }else{
            this.downItshow =true;
        }
    },
    methods: {
        //翻阅浏览
        upIt(){
            this.showNum -=1;
            this.showbannerList = this.imgList.slice(this.showNum, this.showNum+3)
            if(this.showNum == 0){
                this.upItshow = false;
                this.downItshow = true;
            }else{
                this.upItshow = true;
                this.downItshow = true;
            }
        },
        downIt(){
            this.showNum +=1;
            this.showbannerList = this.imgList.slice(this.showNum, this.showNum+3)
            if(this.showNum+2 == this.imgList.length-1){
                this.downItshow = false;
                this.upItshow = true;
            }else{
                this.upItshow = true;
                this.downItshow = true;
            }
        },
        viewIt(item){
            this.closeBtn =true;
            for(let i=0;i<this.imgList.length; i++){
                if(item == this.imgList[i]){
                    console.log(i)
                    this.viewNum = i;
                }
            }
            console.log(this.showNum)
        },
        leftIt(){
            if(this.viewNum == 0){
                this.viewNum = this.imgList.length-1
            }else{
                this.viewNum -=1
            }
        },
        rightIt(){
            this.viewNum +=1
            console.log(this.viewNum)
            if(this.viewNum == this.imgList.length){
                this.viewNum = 0;
            }
        },
        close(){
            this.closeBtn = false
        }
    },
}
</script>
<style lang="scss" scoped="" type="text/scss">
    ul li{
        list-style: none;
    }
   //手动翻看器
    #copySwiperCenter{
        width: 1200px;
        height: 480px;
        margin: 0 auto;
        position: relative;
    }
    .copySwiper{
        width: 126px;
        height: 275px;
        position: absolute;
        top: 130px;
        right: 0px;
    }
    .copySwiper div{
        height: 10px;
        margin: 0 auto;
        overflow: hidden;
    }
    .copySwiper div .upIt{
        width: 50px;
        height: 50px;
        border: 2px #fff solid;
        transform: rotate(45deg);
        position: relative;
        top: 11px;
        cursor: pointer;
    }
    .copySwiper div .downIt{
        width: 50px;
        height: 50px;
        border: 2px #fff solid;
        transform: rotate(-45deg);
        position: relative;
        top: -55px;
        cursor: pointer;
    }
    .copySwiper ul{
        height: 255px;
        display: flex;
        padding: 10px 0;
        justify-content: space-around;
        flex-direction: column;
    }
    .copySwiper ul li{
        height: 69.5px;
        cursor: pointer;
    }
    .copySwiper ul li img{
        width: 100%;
        height: 100%;
    }
    //蒙层
    #coverImg{
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .4);
        z-index: 9999999;
    }
    .coverImgWrap{
        width: 895px;
        height: 505px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-450px, -220px);
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .coverImgWrap div{
        height: 100%;
        width: 20px;
        margin: 0 auto;
        overflow: hidden;
    }
    div.leftIt{
        width: 50px;
        height: 50px;
        border: 2px #fff solid;
        transform: rotate(45deg);
        position: relative;
        top: 220px;
        left: 12px;
        cursor: pointer;
    }
    div.rightIt{
        width: 50px;
        height: 50px;
        border: 2px #fff solid;
        transform: rotate(-45deg);
        position: relative;
        top: 220px;
        right: 45px;
        cursor: pointer;
    }
    .coverImgWrap ul{
        padding: 26px 12px;
        background: #fff;
        border-radius: 5px;
    }
    // .coverImgWrap ul li img{
    //     width: 698px;
    //     height: 388px;
    // }
    .colseView{
        display: block;
        width: 24px;
        height: 24px;
        font-size: 24px;
        position: absolute;
        top: 27px;
        right: 60px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        cursor: pointer;
    }
</style>
