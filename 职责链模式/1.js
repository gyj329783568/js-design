/**
 *
假设我们负责⼀个售卖手机的电商网站，经过分别交纳 500 元定⾦和 200 元定金的两轮预定后(订单已在此时⽣生成)，现在已经到了正式购买的阶段。 公司针对⽀付过定金的⽤户有一定的优惠政策。

在正式购买后，已经⽀付过 500 元定⾦的⽤户会收到 100 元的商城优惠券，200 元定⾦的⽤户可以收到 50 元 的优惠券，⽽之前没有支付定⾦的⽤户只能进⼊普通购买模式，也就是没有优惠券，且在库存有限的情 况下不一定保证能买到。
 */

 /**
  * 以下是第一种普通写法
  */
var order = function (orderType, pay, stock) {
  if (orderType === 1) {
    if(pay === true) {
      console.log('500元定金预购, 得到100优惠券')
    } else {
      if (stock > 0) { // ⽤于普通购买的⼿机还有库存
        console.log('普通购买, ⽆无优惠券');
      } else {
        console.log('⼿手机库存不不⾜足');
      }
    }
  } else if (orderType === 2) {
    if (pay === true) {
      console.log('200元定金预购, 得到50优惠券')
    } else {
      if (stock > 0) {
        console.log('普通购买, ⽆无优惠券');
      } else {
        console.log('⼿手机库存不不⾜足');
      }
    }
  } else if (orderType === 3) {
    if (stock > 0) {
      console.log('普通购买, ⽆无优惠券');
    } else {
      console.log('⼿手机库存不不⾜足');
    }
  }
}

order(1, true, 500)


/**
 * 现在我们采⽤职责链模式重构这段代码，先把 500 元订单、200 元订单以及普通购买分成 3 个函数。接下来把 orderType、pay、stock 这 3 个字段当作参数传递给 500 元订单函数，如果该函数不符合处理理条件，则把这个请求传递给后面的 200 元订单函数，如果 200 元订单函数依然不能处理理该请求，则继续传递请求给普通购买函数。
 */

var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购，得到100优惠券');
  } else {
    return 'nextSuccessor';
  }
}

var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购，得到50优惠券');
  } else {
    return 'nextSuccessor';
  }
}

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，⽆无优惠券');
  } else {
    console.log('⼿手机库存不不⾜足');
  }
};

var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
}

Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor;
}

Chain.prototype.passRequest = function () {
  var ret = this.fn.apply(this, arguments);
  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments);
  }
  return ret;
}

var chainOrder500 = new Chain(order500);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(2, true, 500)

console.log(chainOrder500)