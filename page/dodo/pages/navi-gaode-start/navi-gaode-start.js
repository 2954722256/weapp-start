var amapFile = require('../../../common/lib/amap-wx.js');//如：..­/..­/libs/amap-wx.js

Page({
    onLoad: function() {
        var that = this;
        var myAmapFun = new amapFile.AMapWX({key:'dde6a748e17368fbc968e1ce1a9917b4'});
        myAmapFun.getPoiAround({
            success: function(data){
                //成功回调
            },
            fail: function(info){
                //失败回调
                console.log(info)
            }
        })
    },
})
