function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var main = {
  type: type,
  isArray: function (o) {
    return type(o) === "array";
  },
  isObject: function (o) {
    return type(o) === "object";
  },
  copy: copy
}
/**
 * 检测数据类型
 */
function type(o) {
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}
/**
 * 检测是否是数组
 */
function isArray(o) {
  return type(o) === "array";
}
/**
 * 检测是否是对象
 */
function isObject(o) {
  return type(o) === "object";
}
/**
 * 数据拷贝
 */
function copy(obj, deep) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  var name, target = isArray(obj) ? [] : {}, value;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      value = obj[name];
      if (value === obj) {
        continue;
      }
      if (deep && (isArray(value) || isObject(value))) {
        target[name] = copy(value, deep);
      } else {
        target[name] = value;
      }
    }
  }
  return target;
}



module.exports = main;