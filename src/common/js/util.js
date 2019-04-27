//存储localStorage
export const setStore = (name, content) => {
    if (!name) return;
    localStorage.setItem(name, JSON.stringify(content))
}

//获取localStorage
export const getStore = name => {
    if (!name) return;
    return JSON.parse(localStorage.getItem(name))
}

export function removeSpace(value){
    return value.replace(/\s+/g,"")
}

export function formValidate(val,type){
    let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,
        emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if(val === ''){
        return false
    }else{
        //非空验证
        if(type === 'require'){
            return !!removeSpace(val)
        }
        if(type === 'phone'){
            return phoneReg.test(val)
        }
        if(type === 'email'){
            return emailReg.test(val)
        }
    }
}

//获取url参数
export function getUrlKey (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

//数组去重
export function dedupe(array){
    return Array.from(new Set(array))
}

//去除重复对象
export function dedupeObject(obj) {
  var uniques = [];
  var stringify = {};
  for (var i = 0; i < obj.length; i++) {
    var keys = Object.keys(obj[i]);
    keys.sort(function(a, b) {
      return (Number(a) - Number(b));
    });
    var str = '';
    for (var j = 0; j < keys.length; j++) {
      str += JSON.stringify(keys[j]);
      str += JSON.stringify(obj[i][keys[j]]);
    }
    if (!stringify.hasOwnProperty(str)) {
      uniques.push(obj[i]);
      stringify[str] = true;
    }
  }
  uniques = uniques;
  return uniques;
}

//获取当前的月日
export function getCurrentTime(n) {
    var time = new Date(n);
    var month = time.getMonth()+1;
    var date = time.getDate();
    return month + '月' + date + '日'
}  
//根据时间判断星期几
export function getWeek(n) {  //timedat参数格式：   getWeek（new Date("2017-10-27" )）
    let week
    let timedat = new Date(n);
    if(timedat.getDay() == 0) week = "星期日";
    if(timedat.getDay() == 1) week = "星期一";
    if(timedat.getDay() == 2) week = "星期二";
    if(timedat.getDay() == 3) week = "星期三";
    if(timedat.getDay() == 4) week = "星期四";
    if(timedat.getDay() == 5) week = "星期五";
    if(timedat.getDay() == 6) week = "星期六";
    return week;  
}
//阿拉伯数字转成对应的大写中文
export function toUpperChinese(num) {  //timedat参数格式：   getWeek（new Date("2017-10-27" )）
    let str
    if(num == 0)  str = "零";
    if(num == 1)  str = "一";
    if(num == 2)  str = "二";
    if(num == 3)  str = "三";
    if(num == 4)  str = "四";
    if(num == 5)  str = "五";
    if(num == 6)  str = "六";
    if(num == 7)  str = "七";
    if(num == 8)  str = "八";
    if(num == 9)  str = "九";
    if(num == 10)  str = "十";
    return str;  
}

//转换年月日方法
export function getFormatDate(timestamp) {
  timestamp = parseInt(timestamp);
  var newDate = new Date(timestamp);
  Date.prototype.format = function (format) {
    var date = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S+': this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
      }
    }
    return format;
  }
  return newDate.format('yyyy-MM-dd');
}
 


