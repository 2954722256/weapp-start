//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //初始用户信息
    motto: 'Hello World22',
    userInfo: {},

    //对应的轮播图相关
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false  // loading
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewEnter: function() {
    wx.navigateTo({
      url: '../sth/sth'
    })
  },
  //事件处理函数
  swiperchange: function(e) {
      console.log(e.detail.current)
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

    //venuesList
    wx.request({
        url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
        method: 'GET',
        data: {},
        header: {
            'Accept': 'application/json'
        },
        success: function(res) {
            that.setData({
                venuesItems: res.data.data
            })
            setTimeout(function () {
                that.setData({
                    loadingHidden: true
                })
            }, 1500)
        }
    })

    //choiceList
    wx.request({
        url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
        method: 'GET',
        data: {},
        header: {
            'Accept': 'application/json'
        },
        success: function(res) {
            that.setData({
                choiceItems: res.data.data.dataList
            })
            setTimeout(function () {
                that.setData({
                    loadingHidden: true
                })
            }, 1500)
        }
    })


  }
})
