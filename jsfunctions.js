//Math
// +
function add(x,y){
    return x + y;
}
// -
function subtract(x,y){
    return x -y;
}

// *
function multiply(x,y){
    return x * y;
}

// /
function divide(x,y){
    return x/y;
}

// three times
function multiplyThreeTime(x){
    return x * x * x;
}

// 返回倒数
function cBackards(x){
  if(x === null)return 0;
  var val;
  x === 0 ? val = 0 : val = 1/x;
  return val;
}

function deg2rad(deg){
  return deg * Math.PI/180;
}

function rad2deg(rad){
  return rad * 180/Math.PI;
}

// 随机数,第三个参数是保留的小数位(0-20)
function radomFromTo(a,b,hold){
  var hd;
  hold !== null && typeof hold === 'number' && hold > 0 && hold < 20 ? hd = hold : hd = 0;
  return ((b - a) * Math.random() + a).toFixed(hd) * 1;
}

// 弧度=角度乘以π后再除以180
// 角度=弧度除以π再乘以180
// 1弧度=180/π度
// 1度=π/180弧度

// 三角函数
// acos()
// asin()
// atan2()
// cos()
// sin()


// 四舍五入
// ceil()//上舍入
// floor()//下舍入
// round()//四舍五入

// string








function arrRepeat(arr){
  for(var i = 0,len = arr.length; i < len; i++){
    arr.push(arr[i]);
  }
  return arr;
}

function arrRepeat(arr){
  return arr.concat(arr);
}

function unique(arr){
  var arr1 = [],tag = false;
  for(var i = 0,num = arr.length; i < num; i++){
    // 遍历数组
    for(var j = 0; j < arr1.length; j++){
      if(arr[i] === arr1[j]){
        tag = true;
        break;
      }
    }

    if(tag){
      tag = false;
      continue;
    }else{
      arr1.push(arr[i]);
    }
  }
  
  return arr1;
}


function unique(arr){
  var tag = false;
  for(var i = 0 ; i < arr.length; i++){
    for(var j = 0; j < i; j++){
      if(arr[i] === arr[j]){
        tag = true;
        break;
      }
    }

    if(tag){
      // remove the element
      arr = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
      tag = false;
      i--;
      continue;
    }
  }

  return arr;
}


// clear an array,remove the same ele from an array
function unique(arr){
  
  var a = [];
  var obj = {}
  for(var i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      a.push(arr[i]);
      obj[arr[i]] = i;
    }
  }

  return a;
}


function min(arr){
  var min = arr[0],
      num = arr.length;
  for(var i = 1; i < num; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }

  return min;
}

function min(arr){
  return Math.min.apply(this,arr);
}


function max(arr){
  return Math.max.apply(this,arr);
}

function max(arr){
  var max = arr[0],num = arr.length;
  for(var i = 1; i < num; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }

  return max;
}





// return the key of an element from an array
function arrKey(val,arr){
  var key;
  for(var i = 0,len = arr.length;i < len; i++){
      if(val === arr[i]){
          key = i;
          break;
      }
  }
  return key;
}

// delete a ele from an array by key
function delByKey(index,arr){
  return arr.slice(0,index).concat(arr.slice(index+1,arr.length));
}




// return a str that every letter change to next letter from ABC(letter list)
function wordNext(str){
  var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var str_arr = str.split('');
  var num = str_arr.length;
  var str1='',key1;
  for(var j = 0; j < num; j++){
      var key2 = arrKey(str_arr[j],arr);
      key2 === arr.length-1 ? key1 = 0 : key1 = key2 + 1;
      str1 += arr[key1];
  }

  return str1;
}



console.log(wordNext('abcdefgxyz'));


function strReverse(str){
  return str.split('').reverse().join('');
}

console.log(strReverse('abc'));


// return today
function today(type){
  var date = new Date();
  var type = type || 100;
  var y = date.getFullYear();
  var m = date.getMonth();
  var d = date.getDate();
  var date_val;
  type !== 100 && type.length === 1 ? date_val = y + type + m + type + d : date_val = y + '·' + m + '·' + d;
  console.log(date_val);
  return date_val;
}

today('/');

// return now time
function nowTime(){
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  return h + ':' + m + ":" + s;
}

console.log(nowTime());

function deepNight(){
  var today = new Date();
  var y = today.getFullYear(),
      m = today.getMonth(),
      d = today.getDate();

  var new_date = new Date(y,m,d,23,59,59);
  var long_time = new_date.getTime();
  return long_time;
}

function earlyMorning(){
  var today = new Date();
  var y = today.getFullYear(),
      m = today.getMonth(),
      d = today.getDate();
  var new_date = new Date(y,m,d,0,0,0);
  var long_time = new_date.getTime();
  return long_time;
}




var markyun = new Object();
markyun.Event = {
  // 页面加载完成后
  readyEvent : function(fn) {
      if (fn==null) {
          fn=document;
      }
      var oldonload = window.onload;
      if (typeof window.onload != 'function') {
          window.onload = fn;
      } else {
          window.onload = function() {
              oldonload();
              fn();
          };
      }
  },
  // 视能力分别使用dom0||dom2||IE方式 来绑定事件
  // 参数： 操作的元素,事件名称 ,事件处理程序
  addEvent : function(element, type, handler) {
      if (element.addEventListener) {
          //事件类型、需要执行的函数、是否捕捉
          element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
          element.attachEvent('on' + type, function() {
              handler.call(element);
          });
      } else {
          element['on' + type] = handler;
      }
  },
  // 移除事件
  removeEvent : function(element, type, handler) {
      if (element.removeEnentListener) {
          element.removeEnentListener(type, handler, false);
      } else if (element.datachEvent) {
          element.detachEvent('on' + type, handler);
      } else {
          element['on' + type] = null;
      }
  }, 
  // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
  stopPropagation : function(ev) {
      if (ev.stopPropagation) {
          ev.stopPropagation();
      } else {
          ev.cancelBubble = true;
      }
  },
  // 取消事件的默认行为
  preventDefault : function(event) {
      if (event.preventDefault) {
          event.preventDefault();
      } else {
          event.returnValue = false;
      }
  },
  // 获取事件目标
  getTarget : function(event) {
      return event.target || event.srcElement;
  },
  // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
  getEvent : function(e) {
      var ev = e || window.event;
      if (!ev) {
          var c = this.getEvent.caller;
          while (c) {
              ev = c.arguments[0];
              if (ev && Event == ev.constructor) {
                  break;
              }
              c = c.caller;
          }
      }
      return ev;
  }
}; 




// query url parm
function queryUrl(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf("?") + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
        obj[name] = val;
        return rs;
    });
  return obj;
}

