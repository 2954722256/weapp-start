Page({
  data: {
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this

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
  }

})
