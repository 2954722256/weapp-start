var app = getApp()
Page({
    data: {
        currentTab:0,   //当前tab的index
        tabArray:["享美食", "爱玩乐", "看电影"]
    },
    //事件处理函数
    bindChange: function( e ) {
        var that = this;
        that.setData( { currentTab: e.detail.current });
    },
    swichNav: function( e ) {
        var that = this;
        console.log(e.target)
        if( this.data.currentTab === e.target.dataset.current ) {
            return false;
        } else {
            that.setData( {
                currentTab: e.target.dataset.current
            })
        }
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        // app.getUserInfo(function(userInfo){
        //     //更新数据
        //     that.setData({
        //         userInfo:userInfo
        //     })
        // })
    }
})
