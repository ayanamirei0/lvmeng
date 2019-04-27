import Vue from 'vue'
import Router from 'vue-router'

//  懒路由加载

//首页
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')

//关于我们页
const aboutUs = r => require.ensure([], () => r(require('@/pages/about-us/about-us')), 'about-us')

const playerActivety = r => require.ensure([], () => r(require('@/pages/player-activety/player-activety')), 'player-activety')
const playerFaster = r => require.ensure([], () => r(require('@/pages/player-faster/player-faster')), 'player-faster')
const fasterDetail = r => require.ensure([], () => r(require('@/pages/player-faster/faster-detail')), 'faster-detail')


const playerHoliday = r => require.ensure([], () => r(require('@/pages/player-holiday/player-holiday')), 'player-holiday')
const holidayDetail = r => require.ensure([], () => r(require('@/pages/player-holiday/holiday-detail')), 'holiday-detail')

const playerMatch= r => require.ensure([], () => r(require('@/pages/player-match/player-match')), 'player-match')
const matchDetail= r => require.ensure([], () => r(require('@/pages/player-match/match-detail')), 'match-detail')
const news= r => require.ensure([], () => r(require('@/pages/news/news')), 'news')
const newsDetail= r => require.ensure([], () => r(require('@/pages/news/newsDetail')), 'newsDetail')
const newsVideo= r => require.ensure([], () => r(require('@/pages/news/newsVideo')), 'newsVideo')



const club= r => require.ensure([], () => r(require('@/pages/club/club')), 'club')
const rules= r => require.ensure([], () => r(require('@/pages/club/rules')), 'rules')
const legalStatement= r => require.ensure([], () => r(require('@/pages/others/legalStatement')), 'legal-statement')
const privacyStatement= r => require.ensure([], () => r(require('@/pages/others/privacyStatement')), 'privacy-statement')












// const frame = r => require.ensure([], () => r(require('@/components/common/frame')), 'frame')
const infomationList = r => require.ensure([], () => r(require('@/pages/news/infomationList')), 'infomationList')
const videoList = r => require.ensure([], () => r(require('@/pages/news/videoList')), 'videoList')


Vue.use(Router)

export default new Router({
    // linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },{
            path: '/home',
            meta: {
                index: 1
            },
            component: home
        },
        {
            path: '/about-us',
            meta: {
                index: 1
            },
            component: aboutUs
        },
        {
            path: '/player-activety',
            meta: {
                index: 1
            },
            component: playerActivety
        },
        {
            path: '/player-faster',
            meta: {
                index: 1
            },
            component: playerFaster
        },
        {
            path: '/faster-detail',
            meta: {
                index: 1
            },
            component: fasterDetail
        },
        {
            path: '/player-holiday',
            meta: {
                index: 1
            },
            component: playerHoliday
        },
        {
            path: '/holiday-detail',
            meta: {
                index: 1
            },
            component: holidayDetail
        },
        {
            path: '/player-match',
            meta: {
                index: 1
            },
            component: playerMatch
        },
        {
            path: '/match-detail',
            meta: {
                index: 1
            },
            component: matchDetail
        },
        {
            path: '/news',
            meta: {
                index: 1
            },
            component: news
        },
        {
            path: '/news-details',
            meta: {
                index: 1
            },
            component: newsDetail
        },
        {
            path: '/news-video',
            meta: {
                index: 1
            },
            component: newsVideo
        },
        {
            path: '/club',
            meta: {
                index: 1
            },
            component: club
        },
        {
            path: '/rules',
            meta: {
                index: 1
            },
            component: rules
        },
        {
            path: '/legal-statement',
            meta: {
                index: 1
            },
            component: legalStatement
        },
        {
            path: '/privacy-statement',
            meta: {
                index: 1
            },
            component: privacyStatement
        },





        // {
        //     path: '/frame',
        //     meta: {
        //         index: 3
        //     },
        //     component: frame
        // },
        {
          path: '/infomationList',
          meta: {
            index: 3
          },
          component: infomationList
        },
        {
          path: '/videoList',
          meta: {
            index: 3
          },
          component: videoList
        }
    ],
    mode: 'history'
})
