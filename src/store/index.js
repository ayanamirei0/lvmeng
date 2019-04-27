import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from 'vuex-along'//通过这个插件解决页面刷新清空store的问题
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    matchBookId: 0 , //赛事预订id
    fasterBookId: 0, //菁英畅打ID
    newsId: 0 , //咨询列表id
    videoId: 0,  //视频列表id
    holidayBookId: 0,
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [vuexAlong]
})
