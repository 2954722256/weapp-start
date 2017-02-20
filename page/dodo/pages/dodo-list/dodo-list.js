Page({
  data: {
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this

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
