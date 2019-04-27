import $http from './ajax'

var root = process.env.API_HOST

// 获取首页的banner
export const homeBanner = () => $http(root + '/information/loadingImg');


//菁英畅打球场关键字匹配
export const searchBallCourtBykeyword = (params) => $http(root + '/product/golf/spaceSearch', params);

//菁英畅打根据城市或日期筛选球场
export const searchBallCourtByCityOrdate = (params) => $http(root + '/product/golf/space', params);

export const searchBallCourtByBallCourtName = (params) => $http(root + '/product/golf/spaceSearch', params);

//获取畅打详情
export const getBallCourtDetail = (params) => $http(root + '/product/golf/detail', params);

//获取热门城市数据
export const getBallCourtCity = (params) => $http(root + '/product/golf/city', params);

//菁英详情里面指定日期显示三天的价格数据
export const getPriceAfterThreeDays = (params) => $http(root + '/product/golf/spacePrice', params);
export const getOtherThreeDays = (params) => $http(root + '/product/golf/spacePrice', params);


//菁英假日-获取城市天气数据
export const getCityWeather = (params) => $http(root + '/product/golf/getWeather', params);

//获取菁英假日的城市
export const getHolidayCityData = () => $http(root + '/product/tourism/city');
//根据城市获取菁英假日的列表
export const getTourismList = (params) => $http(root + '/product/tourism/list', params);
// 菁英假日详情
export const getTourismDetail = (params) => $http(root + '/product/tourism/detail', params);

















//获取模拟赛事热门城市数据
export const cityData = () => $http(root + '/search/cityData')

//获取服务器当前时间
export const currentTime = () => $http(root + '/user/getNowTime')

//根据时间查询赛事列表
export const currentMatch = (params) => $http(root + '/product/match/listByTime', params)



// 获取赛事列表
export const matchList = (params) => $http(root + '/product/match/list', params);
//通过ID获取赛事详情
export const matchDetail = (params) => $http(root + '/product/match/detail', params)

/**
 * 资讯列表
 * startPage  当前页数
 * pageSize   每页数量

 */
export const informationList = (params) => $http(root + '/information/informationList', params);

  /**
   * 视频分类列表
   * startPage  当前页数
   * pageSize   每页数量

   */
export const videoList = (params) => $http(root + '/information/videoList', params);

  /**
   * 资讯详情
   * id  资讯id
   */
  export const informationDetail = (id) => $http(root + '/information/informationDetail', {
    id
  });

/**
 * 视频详情
 * id  视频id
 */
export const videoDetail = (id) => $http(root + '/information/videoDetail', {
  id
});


export const chinaCity = () => $http('/chinaCity');


















