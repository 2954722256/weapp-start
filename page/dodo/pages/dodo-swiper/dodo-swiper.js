Page({
  data: {
    //对应的轮播图相关
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false  // loading
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })

    //请求轮播
    wx.request({
        url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
        method: 'GET',
        data: {},
        header: {
            'Accept': 'application/json'
        },
        success: function(res) {
            that.setData({
                images: res.data                
            })
            console.log('get success')
        }
    })
  }

})
