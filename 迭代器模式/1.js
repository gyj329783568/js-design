var each = function(arr, callback) {
  for(var i = 0, len = arr.length; i < len; i++) {
    callback.call(arr[i], i, arr[i])
  }
}

each([1,2,3], function (index ,data) {
  console.log(index, data)
})