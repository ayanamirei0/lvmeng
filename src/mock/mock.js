import chinaCity from './city'
// 使用mock模拟首页数据
const Mock = require('mockjs')
    let cityData = {
            "res": "200",
            "data": {
                "hotcity": [{
                    "id": "158",
                    "name": "北京市"
                }, {
                    "id": "40",
                    "name": "山西市"
                }, {
                    "id": "151",
                    "name": "天津市"
                }, {
                    "id": "11",
                    "name": "上海市"
                }],
                "city": [
                    {
                        "province": "北京",
                        "citylist": [{
                            "id": "58",
                            "name": "海淀区"
                        }, {
                            "id": "158",
                            "name": "通州"
                        }, {
                            "id": "40",
                            "name": "朝阳"
                        }]
                    },
                    {
                        "province": "º£ÄÏ",
                        "citylist": [{
                            "id": "109",
                            "name": "º£ÄÏ"
                        }, {
                            "id": "61",
                            "name": "º£¿Ú"
                        }, {
                            "id": "8",
                            "name": "±£Í¤"
                        }, {
                            "id": "25",
                            "name": "ÙÙÖÝ"
                        }, {
                            "id": "101",
                            "name": "ÁêË®"
                        }, {
                            "id": "142",
                            "name": "Çíº£"
                        }, {
                            "id": "150",
                            "name": "ÈýÑÇ"
                        }, {
                            "id": "190",
                            "name": "ÍòÄþ"
                        }, {
                            "id": "300",
                            "name": "¶«·½ÊÐ"
                        }]
                    }
                ]
            }
    }

    let currentMatch = {
        times: "三",
        "list": [
            {
            "id": 8,
            "status": 3,
            "matchCity": "山西",
            "matchAddress": null,
            "name": "hhh",
            "court": null,
            "type": 4,
            "matchStartTime": 1550110877000,
            "matchEndTime": 1550110877000,
            "racingStartTime": 1550110877000,
            "racingEndTime": 1550110877000,
            "enrollStartTime": 1550110877000,
            "enrollEndTime": 1550110877000,
            "racingAddress": null,
            "racingFormat": null,
            "kickOffModel": null,
            "rewardMechanism": null,
            "sponsorUnit": null,
            "cooperationUnit": null,
            "eventSponsors": null,
            "eventSchedule": null,
            "rewardSettings": null,
            "eventExplain": null,
            "eventImgs": null,
            "createTime": 1550110877000,
            "editTime": 1550110877000,
            "yn": 1
            },
            {
                "id": 8,
                "status": 3,
                "matchCity": "山西",
                "matchAddress": null,
                "name": "hhh",
                "court": null,
                "type": 4,
                "matchStartTime": 1550110877000,
                "matchEndTime": 1550110877000,
                "racingStartTime": 1550110877000,
                "racingEndTime": 1550110877000,
                "enrollStartTime": 1550110877000,
                "enrollEndTime": 1550110877000,
                "racingAddress": null,
                "racingFormat": null,
                "kickOffModel": null,
                "rewardMechanism": null,
                "sponsorUnit": null,
                "cooperationUnit": null,
                "eventSponsors": null,
                "eventSchedule": null,
                "rewardSettings": null,
                "eventExplain": null,
                "eventImgs": null,
                "createTime": 1550110877000,
                "editTime": 1550110877000,
                "yn": 1
            },
        ]
    }

    //news组件，资讯列表假数据
    let infomationList = {
    "returnCode": 200,
    "message": "处理成功",
    "result": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 10,
        "orderBy": null,
        "startRow": 1,
        "endRow": 10,
        "total": 286,
        "pages": 29,
        "list": [
        {
            "id": 5313,
            "title": "大象好大大象好大大象好大大象好大大象好大大象好大大象好大大象好大大象好大大象好大大象好大",
            "content": "<p>å¤</p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p>ç¯å¢</p>",
            "label": "小大象",
            "conferenceTime": "2019-01-01",
            "period": "13",
            "titleDetail": "环环紧扣",
            "titleImg": "https://qiniu.puxinasset.com/FoIUYnsSBN_0BFF3EEGIpCG5z7Sm",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5304,
            "title": "honghaiying",
            "content": "<p>1</p>",
            "label": "",
            "conferenceTime": "2019-01-01",
            "period": "",
            "titleDetail": "1",
            "titleImg": "https://qiniu.puxinasset.com/Fuwf0obwwNYN5kp5Tj6XaTmOM5ue",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5301,
            "title": "honghaiying",
            "content": "<p>1</p>",
            "label": "",
            "conferenceTime": "2019-01-01",
            "period": "",
            "titleDetail": "1",
            "titleImg": "https://qiniu.puxinasset.com/Fuwf0obwwNYN5kp5Tj6XaTmOM5ue",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5299,
            "title": "再看看",
            "content": "<p>1111111111111111111111111111111111111111111111111111111</p><p><br/></p><p><br/></p><p><br/></p><p>1111111111111111111</p><p>11111111111</p><p><br/></p><p><br/></p><p><br/></p><p>11111111111</p>",
            "label": "11",
            "conferenceTime": null,
            "period": "",
            "titleDetail": "11111111111111111111111111111111111111111111111111111111111111111111111111111",
            "titleImg": "https://qiniu.puxinasset.com/Fv6fdi2iD4dodBzbNyiNGvK8uXVk",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5296,
            "title": "大家好",
            "content": "<p>å¤§å®¶å®¢æ·</p>",
            "label": "大规划局",
            "conferenceTime": null,
            "period": "54",
            "titleDetail": "大广交会",
            "titleImg": "https://qiniu.puxinasset.com/FlFuEoBRb1XGDvBcDQOBhI0ByEAn",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5289,
            "title": "萨哈",
            "content": "<p>QWGHä¸è§å½æ°&nbsp;</p>",
            "label": "多撒谎就",
            "conferenceTime": null,
            "period": "656",
            "titleDetail": "大清后宫JHAS",
            "titleImg": "https://qiniu.puxinasset.com/FlFuEoBRb1XGDvBcDQOBhI0ByEAn",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5286,
            "title": "35535",
            "content": "<p>æç«æºç±ççè¿¹</p>",
            "label": "222",
            "conferenceTime": null,
            "period": "12",
            "titleDetail": "带回家大多数",
            "titleImg": "https://qiniu.puxinasset.com/FlFuEoBRb1XGDvBcDQOBhI0ByEAn",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5284,
            "title": "全英文歌曲",
            "content": "<p>ç±ä¸å¸¦åå®¶åçå¢åµç</p>",
            "label": "受打击很",
            "conferenceTime": null,
            "period": "",
            "titleDetail": "带上的",
            "titleImg": "https://qiniu.puxinasset.com/FlFuEoBRb1XGDvBcDQOBhI0ByEAn",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5279,
            "title": "和u我和uu二位五",
            "content": "<p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">åæ¹çå¬å¤©æ¯å¹´é½æ¥çæ©ï¼è¿æªæåå°ç§çå³éå¬å¤©çèæ­¥å°±ææçåæä»¬èµ°æ¥ï¼æ¨å¤çä¸åºå¯é£å®èµ°äºæåä¸ä¸çææï¼è·¯è¾¹æ ä¸çå¶å­ä¸å¤ä¹é´é½æ¶å¤±çæ å½±æ è¸ªï¼æ å¹²åç§ç§çç«å¨é£éå»è¿æ¥å¬å¤©æ´å·çå¤©æ°ãæ´å¼ºçå¯é£ãå¯æå çæ å¶è¿ææä¸èçæå¨æå¤´ï¼æåä¸<a href=\"http://www.duwenzhang.com/huati/muqin/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æ¯äº²</a>æåç<a href=\"http://www.duwenzhang.com/huati/meihao/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">ç¾å¥½</a>æ¶åã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã ç°å¨çå¬å¤©éªä¸çå¾å°ï¼æ¯å¹´åªæææ°ç2ã3åºç®çæ°çéªï¼æ²¡æäºå¿æ¶å¯¹éªçå°è±¡ï¼ä»¿ä½èªå·±åä¸ä¸ªåæ¹äººä¸æ ·ï¼å¯¹éªçæ¸´æå¾å¼ºçï¼è®°å¾è¿å å¹´æå¤§çä¸åºéªå°±æ°09å¹´çé£å¹´å¤§éªï¼å¤§éªè¾¹çä¸äºä¸å¤©ä¸å¤ï¼è¶³è¶³æåç±³æ·±ãå¬å¤©æ¯ææ<a href=\"http://www.duwenzhang.com/huati/xihuan/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">åæ¬¢</a>çå­£èèå¬å¤©çéªå´æäºææç¼æçåºæ¯ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã è®°å¾å°æ¶åéªä¸çç¹å«å¤§ä¹ç¹å«å¤ï¼å ä¹æ´ä¸ªå¬å¤©é½æ¯å¨éªçéªä¼´ä¸åº¦è¿ï¼èä¸ä¸çæå¤ç<a href=\"http://www.duwenzhang.com/huati/shijian/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æ¶é´</a>ä¹å°±æ¯å¨å­ï¼å¨å­æ©ä¸å¼å§é£éªå°äºä¸­åå¿«æ¾å­¦çæ¶åéªå·²ç»ä¸äºå¾å¤§å¾å¤§ï¼è¶³è¶³æ²¡è¿äºéå­ï¼åä¸å®çéªæ¯æä»¬å°<a href=\"http://www.duwenzhang.com/huati/pengyou/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æå</a>æåæ¬¢çï¼è¸©å¨ç½ç½çéªè±ä¸é¢å¥½è±¡èµ°å¨ååçæ£è¢«ä¸é¢ï¼ä½ è¿½çæãæè¿½çä½ ï¼æè¾¹è¿ææéªä»çåºé¢éå¸¸çç­é¨ï¼å ä¸ªæ·æ°çåå­¦æå ä¸ªéªçè¶åå­¦ä¸æ³¨æå·å·çæ¾å¨åå­¦çåèéï¼é£ç§ååç<a href=\"http://www.duwenzhang.com/huati/ganjue/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æè§</a>è³ä»<a href=\"http://www.duwenzhang.com/huati/nanwang/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">é¾å¿</a>ãæ¶åæ»æ¯ç­æçè¿ç§ç­é¹çåºæ¯å¨ä¸è¯¾çéå£°ä¸­æ¶å¤±ï¼æ´ä¸ª<a href=\"http://www.duwenzhang.com/wenzhang/xiaoyuanwenzhang/\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æ ¡å­</a>åç¬é´å®éä¸æ¥ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã 90å¹´ä»£çåæéæ¡ä»¶æ¯è¾è°è¦ï¼æ²¡æåå¸é<a href=\"http://www.duwenzhang.com/huati/haizi/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å­©å­</a>ä»¬<a href=\"http://www.duwenzhang.com/huati/xingfu/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å¹¸ç¦</a>ï¼æ´æ²¡æåå¸éçææ°ï¼æ´ä¸ªæå®¤éåªæä¸ä¸ªç¤ççå­å¨åæï¼èä¸è¿æ¯ééçå­¦æ ¡åçåªçç§å®äºå°±å¾ä»å®¶éå¾å­¦æ ¡å¸¦ï¼è¿ä¹æäºåå¹´æ¥ä¸ææçè§ç©äºã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã æ¾å­¦æ¶éªå·²ç»ä¸çå¾å¤§äºï¼æå°é¢ä¸ç©èè¿çèå°å·²ç»å®æè¦çä½äºï¼å¥½è±¡è¦ææä»¬ç¾å¥½çè®°å¿å¨é¨æ³¯ç­ä¸æ ·ãæä»¬èçä¹¦åå¨<a href=\"http://www.duwenzhang.com/huati/jiejie/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å§å§</a>çéªä¼´ä¸é«é«å´å´çå¾å®¶èµ°ï¼å¤é¢çéªæ¯å¥½æ¼äº®åï¼æ´ä¸ªæåºé½æ¯ç½ç½çï¼ãå°ä¸ãå±é¡¶ä¸ãæ ä¸ä»¥åè¿æ¹çå°éé½æ¯ç½è²çäºï¼ä»¿ä½æ¶é´å·²ç»åæ­¢äºèæ­¥ï¼è¿è¿æå»å¤©ä¸å°å·²ç»å®å¨æ´åå¨ä¸èµ·ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã èµ°å°æè¾¹å¤§äººå·²ç»æè¿éçéªæ«åºäºä¸æ¡å°è·¯ï¼ä½å¾å¿«è·¯å·²ç»è¢«æ°ä¸çéªåè¦çä½äºï¼è¿å¤å®¶éççå±éååºççå¨åé£çå¹æä¸å¨å¤©å°é´å½¢æä¸æ¡ç»ç»çé¿é¾ç´å°è¿æ¹ã<a href=\"http://www.duwenzhang.com/huati/fuqin/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">ç¶äº²</a>æé¢å­éçéªæ«çå¹²å¹²ååè¿ç»æåå§å§æ¨äºä¸ä¸ªä¸ªçéªäººï¼éªäººå°±åä¸ä¸ª<a href=\"http://www.duwenzhang.com/huati/weixiao/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å¾®ç¬</a>çèäººåèµ°è¿é¢å­éçæ¯ä¸ä¸ªäººå¾®ç¬ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ããé¥­åæä»¬å¨å®¶æ¤å¨ç«çä¸çä¸è¢«å­çççªå¤é£è½çéªè±ç¡ä¸ªåè§ï¼é£æè§çæ¯èæãéªæ¯æ¯ç¾å¥½çä¹æ¯ç­æçï¼å¾å¿«éªåäºå¤é´å¨æåçç§èä¸æ¯ä¸çéªè±é½æ¶è¹åéãéªéªååã</p><p><br/></p>",
            "label": "而无武",
            "conferenceTime": null,
            "period": "",
            "titleDetail": "杀菌达收到货鬼打鬼 个发",
            "titleImg": "https://qiniu.puxinasset.com/Fsep_XggLoFhv_aPRYAiRxSDf2cU",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        },
        {
            "id": 5271,
            "title": "预约",
            "content": "<p>èææ°´è</p>",
            "label": "洒上档次",
            "conferenceTime": null,
            "period": "850",
            "titleDetail": "是的撒",
            "titleImg": "https://qiniu.puxinasset.com/FuWAxAE4_JQSFemJRXrFAAzLoWa_",
            "redirectUrl": null,
            "thumbsUpNum": 0,
            "browsingTimes": "",
            "typeCode": null,
            "orgCode": null
        }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 2,
        "lastPage": 8,
        "isFirstPage": true,
        "isLastPage": false,
        "hasPreviousPage": false,
        "hasNextPage": true,
        "navigatePages": 8,
        "navigatepageNums": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
        ]
    },
    "enResult": null
    }

//newsDetail组件假数据
    let infomationDetail = {
    "returnCode": 200,
    "message": "处理成功",
    "result": {
        "id": 5313,
        "title": "和u我和uu二位五",
        "content": "<p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">åæ¹çå¬å¤©æ¯å¹´é½æ¥çæ©ï¼è¿æªæåå°ç§çå³éå¬å¤©çèæ­¥å°±ææçåæä»¬èµ°æ¥ï¼æ¨å¤çä¸åºå¯é£å®èµ°äºæåä¸ä¸çææï¼è·¯è¾¹æ ä¸çå¶å­ä¸å¤ä¹é´é½æ¶å¤±çæ å½±æ è¸ªï¼æ å¹²åç§ç§çç«å¨é£éå»è¿æ¥å¬å¤©æ´å·çå¤©æ°ãæ´å¼ºçå¯é£ãå¯æå çæ å¶è¿ææä¸èçæå¨æå¤´ï¼æåä¸<a href=\"http://www.duwenzhang.com/huati/muqin/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æ¯äº²</a>æåç<a href=\"http://www.duwenzhang.com/huati/meihao/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">ç¾å¥½</a>æ¶åã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã ç°å¨çå¬å¤©éªä¸çå¾å°ï¼æ¯å¹´åªæææ°ç2ã3åºç®çæ°çéªï¼æ²¡æäºå¿æ¶å¯¹éªçå°è±¡ï¼ä»¿ä½èªå·±åä¸ä¸ªåæ¹äººä¸æ ·ï¼å¯¹éªçæ¸´æå¾å¼ºçï¼è®°å¾è¿å å¹´æå¤§çä¸åºéªå°±æ°09å¹´çé£å¹´å¤§éªï¼å¤§éªè¾¹çä¸äºä¸å¤©ä¸å¤ï¼è¶³è¶³æåç±³æ·±ãå¬å¤©æ¯ææ<a href=\"http://www.duwenzhang.com/huati/xihuan/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">åæ¬¢</a>çå­£èèå¬å¤©çéªå´æäºææç¼æçåºæ¯ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã è®°å¾å°æ¶åéªä¸çç¹å«å¤§ä¹ç¹å«å¤ï¼å ä¹æ´ä¸ªå¬å¤©é½æ¯å¨éªçéªä¼´ä¸åº¦è¿ï¼èä¸ä¸çæå¤ç<a href=\"http://www.duwenzhang.com/huati/shijian/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æ¶é´</a>ä¹å°±æ¯å¨å­ï¼å¨å­æ©ä¸å¼å§é£éªå°äºä¸­åå¿«æ¾å­¦çæ¶åéªå·²ç»ä¸äºå¾å¤§å¾å¤§ï¼è¶³è¶³æ²¡è¿äºéå­ï¼åä¸å®çéªæ¯æä»¬å°<a href=\"http://www.duwenzhang.com/huati/pengyou/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æå</a>æåæ¬¢çï¼è¸©å¨ç½ç½çéªè±ä¸é¢å¥½è±¡èµ°å¨ååçæ£è¢«ä¸é¢ï¼ä½ è¿½çæãæè¿½çä½ ï¼æè¾¹è¿ææéªä»çåºé¢éå¸¸çç­é¨ï¼å ä¸ªæ·æ°çåå­¦æå ä¸ªéªçè¶åå­¦ä¸æ³¨æå·å·çæ¾å¨åå­¦çåèéï¼é£ç§ååç<a href=\"http://www.duwenzhang.com/huati/ganjue/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æè§</a>è³ä»<a href=\"http://www.duwenzhang.com/huati/nanwang/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">é¾å¿</a>ãæ¶åæ»æ¯ç­æçè¿ç§ç­é¹çåºæ¯å¨ä¸è¯¾çéå£°ä¸­æ¶å¤±ï¼æ´ä¸ª<a href=\"http://www.duwenzhang.com/wenzhang/xiaoyuanwenzhang/\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">æ ¡å­</a>åç¬é´å®éä¸æ¥ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã 90å¹´ä»£çåæéæ¡ä»¶æ¯è¾è°è¦ï¼æ²¡æåå¸é<a href=\"http://www.duwenzhang.com/huati/haizi/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å­©å­</a>ä»¬<a href=\"http://www.duwenzhang.com/huati/xingfu/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å¹¸ç¦</a>ï¼æ´æ²¡æåå¸éçææ°ï¼æ´ä¸ªæå®¤éåªæä¸ä¸ªç¤ççå­å¨åæï¼èä¸è¿æ¯ééçå­¦æ ¡åçåªçç§å®äºå°±å¾ä»å®¶éå¾å­¦æ ¡å¸¦ï¼è¿ä¹æäºåå¹´æ¥ä¸ææçè§ç©äºã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã æ¾å­¦æ¶éªå·²ç»ä¸çå¾å¤§äºï¼æå°é¢ä¸ç©èè¿çèå°å·²ç»å®æè¦çä½äºï¼å¥½è±¡è¦ææä»¬ç¾å¥½çè®°å¿å¨é¨æ³¯ç­ä¸æ ·ãæä»¬èçä¹¦åå¨<a href=\"http://www.duwenzhang.com/huati/jiejie/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å§å§</a>çéªä¼´ä¸é«é«å´å´çå¾å®¶èµ°ï¼å¤é¢çéªæ¯å¥½æ¼äº®åï¼æ´ä¸ªæåºé½æ¯ç½ç½çï¼ãå°ä¸ãå±é¡¶ä¸ãæ ä¸ä»¥åè¿æ¹çå°éé½æ¯ç½è²çäºï¼ä»¿ä½æ¶é´å·²ç»åæ­¢äºèæ­¥ï¼è¿è¿æå»å¤©ä¸å°å·²ç»å®å¨æ´åå¨ä¸èµ·ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ãã èµ°å°æè¾¹å¤§äººå·²ç»æè¿éçéªæ«åºäºä¸æ¡å°è·¯ï¼ä½å¾å¿«è·¯å·²ç»è¢«æ°ä¸çéªåè¦çä½äºï¼è¿å¤å®¶éççå±éååºççå¨åé£çå¹æä¸å¨å¤©å°é´å½¢æä¸æ¡ç»ç»çé¿é¾ç´å°è¿æ¹ã<a href=\"http://www.duwenzhang.com/huati/fuqin/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">ç¶äº²</a>æé¢å­éçéªæ«çå¹²å¹²ååè¿ç»æåå§å§æ¨äºä¸ä¸ªä¸ªçéªäººï¼éªäººå°±åä¸ä¸ª<a href=\"http://www.duwenzhang.com/huati/weixiao/index1.html\" style=\"color: rgb(51, 51, 51); text-decoration-line: none;\">å¾®ç¬</a>çèäººåèµ°è¿é¢å­éçæ¯ä¸ä¸ªäººå¾®ç¬ã</p><p style=\"font-family: å¾®è½¯éé»; font-size: 14px; white-space: normal;\">ããé¥­åæä»¬å¨å®¶æ¤å¨ç«çä¸çä¸è¢«å­çççªå¤é£è½çéªè±ç¡ä¸ªåè§ï¼é£æè§çæ¯èæãéªæ¯æ¯ç¾å¥½çä¹æ¯ç­æçï¼å¾å¿«éªåäºå¤é´å¨æåçç§èä¸æ¯ä¸çéªè±é½æ¶è¹åéãéªéªååã</p><p><br/></p>",
        "label": "而无武",
        "conferenceTime": "2019-01-01",
        "period": "",
        "titleDetail": "杀菌达收到货鬼打鬼 个发",
        "titleImg": "https://qiniu.puxinasset.com/Fsep_XggLoFhv_aPRYAiRxSDf2cU",
        "redirectUrl": null,
        "thumbsUpNum": 0,
        "browsingTimes": "",
        "typeCode": null,
        "orgCode": null
    },
    "enResult": null
    }

    //news组件，视频列表假数据
    let videoList = {
    "returnCode": 200,
    "message": "处理成功",
    "result": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 10,
        "orderBy": null,
        "startRow": 1,
        "endRow": 10,
        "total": 47,
        "pages": 5,
        "list": [
        {
            "id": 233,
            "name": "哈节",
            "orgCode": "1010",
            "orgId": null,
            "title": "eee",
            "videoPath": "https://qiniu.puxinasset.com/5b3916327071223b2a42ecf35e8c4178.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/FlFuEoBRb1XGDvBcDQOBhI0ByEAn",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "打火机十多个",
            "userCreateTime": 1544198400000,
            "sort": null,
            "isTop": 0,
            "pushTime": 1544254698000,
            "createUserId": 17,
            "lastUpdateUserId": 17,
            "topTime": 1544254694000,
            "version": 2,
            "titleImg": null,
            "videoType": 4
        },
        {
            "id": 232,
            "name": "后我以为",
            "orgCode": "1010",
            "orgId": null,
            "title": "嘿哈",
            "videoPath": "https://qiniu.puxinasset.com/b193eb575801d4de26b5acc1dc8cf95e.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/Fsep_XggLoFhv_aPRYAiRxSDf2cU",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "123木头人",
            "userCreateTime": 1544198400000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1544251966000,
            "createUserId": 17,
            "lastUpdateUserId": 17,
            "topTime": null,
            "version": 1,
            "titleImg": null,
            "videoType": 3
        },
        {
            "id": 230,
            "name": "精彩视频",
            "orgCode": "1010",
            "orgId": null,
            "title": "精彩视频",
            "videoPath": "https://qiniu.puxinasset.com/a27a6c69c5c562ecbc3a656db739d13a.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/Fnspok0PwlnZdsV2XN3W0P1c_869",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "2222",
            "userCreateTime": 1544112000000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1544168552000,
            "createUserId": 17,
            "lastUpdateUserId": 17,
            "topTime": null,
            "version": 1,
            "titleImg": null,
            "videoType": 3
        },
        {
            "id": 229,
            "name": "1527视频",
            "orgCode": "1010",
            "orgId": null,
            "title": "视频更改",
            "videoPath": "https://qiniu.puxinasset.com/17d30f0618b5c2832b19aa47956e7a20.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/FlP6wQOuTXoBI9swRpOKalvhM12L",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "是的发生的",
            "userCreateTime": 1526745600000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1526800658000,
            "createUserId": 17,
            "lastUpdateUserId": 17,
            "topTime": null,
            "version": 1,
            "titleImg": null,
            "videoType": 2
        },
        {
            "id": 228,
            "name": "1527视频",
            "orgCode": "1010",
            "orgId": null,
            "title": "视频更改",
            "videoPath": "https://qiniu.puxinasset.com/17d30f0618b5c2832b19aa47956e7a20.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/FlP6wQOuTXoBI9swRpOKalvhM12L",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "是的发生的",
            "userCreateTime": 1524844800000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1524900482000,
            "createUserId": 16,
            "lastUpdateUserId": 16,
            "topTime": null,
            "version": 2,
            "titleImg": null,
            "videoType": 4
        },
        {
            "id": 225,
            "name": "0428测试视频",
            "orgCode": "1010",
            "orgId": null,
            "title": "“变味”的知乎：商业化之手强插广告",
            "videoPath": "https://qiniu.puxinasset.com/22370752904c6687cf3ec3d7db51741e.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/FudyPbQ2aLNY-YJYavkYA6h0qh8R",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "水电费水电费",
            "userCreateTime": 1524844800000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1524886430000,
            "createUserId": 16,
            "lastUpdateUserId": 16,
            "topTime": null,
            "version": 2,
            "titleImg": null,
            "videoType": 4
        },
        {
            "id": 224,
            "name": "继续测试青牛029",
            "orgCode": "1010",
            "orgId": null,
            "title": "继续测试青牛029",
            "videoPath": "https://qiniu.puxinasset.com/d195fb1e7a3c8087a795440aad550582.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/FgMT2A8_EKAKj7ys7Y3Fi-vNBrUz",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "继续测试青牛029",
            "userCreateTime": 1524499200000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1524551247000,
            "createUserId": 23,
            "lastUpdateUserId": 23,
            "topTime": null,
            "version": 1,
            "titleImg": null,
            "videoType": 4
        },
        {
            "id": 223,
            "name": "test2",
            "orgCode": "1010",
            "orgId": null,
            "title": "2222",
            "videoPath": "https://qiniu.puxinasset.com/dccf279817b6372f83358b4137f49ebc.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/Fhig0HuG75pOmrYnuKMnbXxh5Vkv",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "2222",
            "userCreateTime": 1524412800000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1524550262000,
            "createUserId": 23,
            "lastUpdateUserId": 23,
            "topTime": null,
            "version": 9,
            "titleImg": null,
            "videoType": 4
        },
        {
            "id": 219,
            "name": "继续测试青牛030",
            "orgCode": "1010",
            "orgId": null,
            "title": "继续测试青牛030",
            "videoPath": "https://qiniu.puxinasset.com/d195fb1e7a3c8087a795440aad550582.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/FgMT2A8_EKAKj7ys7Y3Fi-vNBrUz",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "继续测试青牛030",
            "userCreateTime": 1522771200000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1522776075000,
            "createUserId": 8,
            "lastUpdateUserId": 8,
            "topTime": null,
            "version": 1,
            "titleImg": null,
            "videoType": 3
        },
        {
            "id": 218,
            "name": "继续测试青牛029",
            "orgCode": "1010",
            "orgId": null,
            "title": "继续测试青牛029",
            "videoPath": "https://qiniu.puxinasset.com/d195fb1e7a3c8087a795440aad550582.mp4",
            "coverImagesPath": "https://qiniu.puxinasset.com/FgMT2A8_EKAKj7ys7Y3Fi-vNBrUz",
            "state": "1",
            "delFlag": "0",
            "createTime": 1550047109000,
            "updateTime": 1550047109000,
            "introduction": "继续测试青牛029",
            "userCreateTime": 1522771200000,
            "sort": null,
            "isTop": 1,
            "pushTime": 1522776071000,
            "createUserId": 8,
            "lastUpdateUserId": 8,
            "topTime": null,
            "version": 1,
            "titleImg": null,
            "videoType": 3
        }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 2,
        "lastPage": 5,
        "isFirstPage": true,
        "isLastPage": false,
        "hasPreviousPage": false,
        "hasNextPage": true,
        "navigatePages": 8,
        "navigatepageNums": [
        1,
        2,
        3,
        4,
        5
        ]
    },
    "enResult": null
    }

    let videoDetail ={
    "returnCode": 200,
    "message": "处理成功",
    "result": {
        "id": 170,
        "name": "2018-04-03测试",
        "orgCode": "1010",
        "orgId": null,
        "title": "ceshi王毅发布一则重大消息",
        "videoPath": "https://qiniu.puxinasset.com/ab62e3536a9717c2130c7b0ef7467751.mp4",
        "coverImagesPath": "https://qiniu.puxinasset.com/FjwmpTJSritI5XRDYtKhTwJVP9_Z",
        "state": "1",
        "delFlag": "0",
        "createTime": 1550047109000,
        "updateTime": 1550047109000,
        "introduction": "受到了福建省德拉吉拉圣诞节离开",
        "userCreateTime": 1522684800000,
        "sort": null,
        "isTop": 1,
        "pushTime": 1522745474000,
        "createUserId": 16,
        "lastUpdateUserId": 16,
        "topTime": null,
        "version": 1,
        "titleImg": null,
        "videoType": 4
    },
    "enResult": null
    }
    let chinacity = chinaCity

Mock.mock('/search/cityData', 'post', cityData)
Mock.mock('/search/currentMatch', 'post', currentMatch)
Mock.mock('/information/informationList', 'post', infomationList)//news组件，咨询列表假数据
Mock.mock('/information/informationDetail', 'post', infomationDetail)//咨询列表假数据
Mock.mock('/information/videoList', 'post', videoList)//视频列表假数据
Mock.mock('/information/videoDetail', 'post', videoDetail)//newsDetail组件，视频列表假数据
Mock.mock('/chinaCity', 'post', chinacity)//newsDetail组件，视频列表假数据


