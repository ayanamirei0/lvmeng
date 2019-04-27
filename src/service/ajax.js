import axios from 'axios'
import Qs from 'qs'
var root = process.env.API_HOST


import JSEncrypt from "jsencrypt";

let encryptor = new JSEncrypt(); // 新建JSEncrypt对象
let publicKey =
  " MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkqb9pLOzlbPEWChGGEsAugGHT7jFdFlQNk/VxSGsL73UvUIp6fSysL0SedDnOp3u14piGqVnv002bIZJeUozsuPP9qDbyNLkhPXcnUs/76OBfxF6y+eCVj7SiO+mQL0DK++mNM0Py+6nnYymp+HFNwlQGZIyIOeQId1mL8Qx0mjbfBiwDLU5Y3f1DDLQuf6vTyBjbvlFP4RmGbdT763xJLlRsBAaKqW7Kjl4DMiIrWk38F2gis3vmIDLk8j0Yngl+WWJDdS/P26xDVgBNnGCUQGpxO7ajzJwgK86NPC6vrAzWSFI+HFP25dPadQqbnXwox2kmz0a0AjooekoAyXLowIDAQAB"; // 从后台获取公钥，这里省略，直接赋值
encryptor.setPublicKey(publicKey); // 设置公钥

let headerParam = {
  packageName: "", //包名
  appName: "", //应用名
  os: "pc",
  appType: "ifa_c", //应用类型
  version: "", //客户端版本号
  mobileType: "", //android/ios
  channel: "", //渠道标示
  platform: "", //android/ios 系统版本号
  model: "", //设备型号
  factory: "", //设备厂家
  screenSize: "", //屏幕尺寸
  denstiy: "",
  imei: "", //设备IMEI号
  mac: "", //设备mac地址
  clientId: localStorage.clientId || "", //用户Id
  token: localStorage.token || "", //用户认证信息
  //"token": "3748f704-6377-46d8-82a5-e01fee59b568",
  //"clientId": "10000139",
  sign: "", //签名
  pid: "", //协议id
  openId: localStorage.openId || "",
  position: "ifac_banner"
};

//请求拦截器
axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    // 请求出错做什么
    return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
    let responseStatus = response.data.status
    if(responseStatus === 10){
        window.location.href = '/#/login'
    }else if(responseStatus === 1){
        if(response.request.responseURL.indexOf('get_user_info.do') != -1){  //检查用户名 返回response
            return response
        }else{
            alert(response.data.msg)
            return
        }
    }else if(responseStatus === 0){
        return response
    }else{
        return response
    }
}, function (error) {
    return Promise.reject(error)
})

// axios请求封装
export default function http(url = '', data = {}, type = 'POST') {
    return new Promise((resolve, reject) => {
        console.log('http requestUrl: ' + url)
        console.log('http requestData: ' + JSON.stringify(data))
        let Promise
        let param = {};
            param.header = headerParam;
            param.test = data;
            param.bizParam = encryptor.encrypt(JSON.stringify(data));
            console.log(param.bizParam);
        if (type === 'GET') {
            Promise = axios({
                method: 'get',
                url: url,
                baseUrl: root,
                data: param.test,
                // 是否携带cookie信息
                withCredentials: true,
            })
        } else {
            Promise = axios({
                method: 'post',
                url: url,
                baseUrl: root,
                data: param,
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },                
                transformRequest: [
                    function(data) {
                        // 对 data 进行任意转换处理
                        return JSON.stringify(data);
                    }
                ],
                // 是否携带cookie信息
                withCredentials: false,
            })
        }
        Promise.then(response => {
            if(response) {
                resolve(response.data)
            }
        })
            .catch(error => {
                reject(error)
            })
    })
}
