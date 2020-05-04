var googleMap = {
  show: function () {
    console.log('渲染google地图')
  }
}

var baiduMap = {
  display: function () {
    console.log('渲染baidu地图')
  }
}

var baiduMapAdaptor = {
  show: function () {
    return baiduMap.display();
  }
}

var renderMap = function (map) {
  if(map.show instanceof Function) {
    map.show()
  }
}

renderMap(googleMap)
renderMap(baiduMapAdaptor)
