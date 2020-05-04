Function.prototype.before = function (beforeFn) {
  // 保存原函数的引用
  var _self = this;
  // 返回包含原函数的新函数的代理函数
  return function () {
    // 在原函数前执行
    beforeFn.apply(this, arguments);
    // 执行原函数
    return _self.apply(this, arguments);
  }
}

Function.prototype.after = function (afterFn) {
  // 保存原函数的引用
  var _self = this;
  // 返回包含原函数的新函数的代理函数
  return function () {
    var ret = _self.apply(this, arguments);
    // 在原函数前执行
    afterFn.apply(this, arguments);
    // 执行原函数
    return ret
  }
}

var firstDo = function () {
  console.log('firstDo')
}

var secondDo = function () {
  console.log('secondDo')
}

secondDo = secondDo.before(firstDo)

console.log(secondDo)
//secondDo()