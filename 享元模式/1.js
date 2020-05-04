/**
 * 假设有个内衣工⼚，⽬前的产品有 50 种男式内衣和 50 种⼥士内衣，为了推销产品，⼯厂决定生产⼀些 塑料模特来穿上他们的内⾐衣拍成⼴告照片。 正常情况下需要 50个男模特和50个⼥模特，然后让他们每 ⼈人分别穿上⼀件内⾐来拍照。
 */

var Model = function (sex, underwear) {
  this.sex = sex;
  this.underwear = underwear;
};
Model.prototype.takePhoto = function () {
  console.log('sex= ' + this.sex + ' underwear=' + this.underwear);
};
for (var i = 1; i <= 50; i++) {
  var maleModel = new Model('male', 'underwear' + i);
  maleModel.takePhoto();
};
for (var j = 1; j <= 50; j++) {
  var femaleModel = new Model('female', 'underwear' + j);
  femaleModel.takePhoto();
};

/**
 * 如上所述，现在⼀共有 50 种男内 ⾐衣和 50 种⼥内衣，所以⼀共会产⽣ 100 个对象。如果将来⽣产了了 10000 种内衣，那这个程序可能会因为存在如此多的对象已经提前崩溃。 下⾯我们来考虑⼀下如何优化 这个场景。虽然有 100 种内⾐，但很显然并不需要 50 个男 模特和 50 个⼥模特。其实男模特和⼥模特 各⾃有⼀个就足够了，他们可以分别穿上不同的内⾐来拍照。
 */


/*只需要区别男⼥女女模特
那我们先把 underwear 参数从构造函数中 移除，构造函数只接收 sex 参数*/
var Model = function (sex) {
  this.sex = sex;
};
Model.prototype.takePhoto = function () {
  console.log('sex= ' + this.sex + ' underwear=' + this.underwear);
};
/*分别创建⼀一个男模特对象和⼀一个⼥女女模特对象*/
var maleModel = new Model('male');
var femaleModel = new Model('female');
 /*给男模特依次穿上所有的男装，并进⾏行行拍照*/
for (var i = 1; i <= 50; i++) {
  maleModel.underwear = 'underwear' + i;
  maleModel.takePhoto();
};
/*给⼥女女模特依次穿上所有的⼥女女装，并进⾏行行拍照*/ for (var j = 1; j <= 50; j++) {
  femaleModel.underwear = 'underwear' + j;
  femaleModel.takePhoto();
};
//只需要两个对象便便完成了了同样的功能

/**
 * 性别是内部状态，内衣是外部状态，通过区分这两种状态，⼤大减少了系统中的对象数量量。通常来讲， 内部状态有多少种组合，系统中便最多存在多少个对象，因为性别 通常只有男⼥两种，所以该内⾐厂商 最多只需要 2 个对象。
 */