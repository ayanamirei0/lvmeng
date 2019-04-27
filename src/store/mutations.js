export default {
    //[RECORD_BOOKID](state, bookId) {
    //    state.bookId = bookId
    //},

    //赛事预订
    matchBookId(state,id){
      state.matchBookId = id
    },
    //菁英畅打
    fasterBookId(state, id){
      state.fasterBookId = id
    },
    //精英假日
    holidayBookId(state, id){
      state.holidayBookId = id
    },
    //咨询列表
    newsListId(state,id){
      state.newsId = id
    },
    //视频列表
    videoListId(state,id){
      state.videoId = id
    },
}
