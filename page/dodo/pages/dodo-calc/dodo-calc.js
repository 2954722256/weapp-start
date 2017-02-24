Page({
    data: {
        text: "This is page data.",
        id_back:"back",
        id_clear:"clear",
        id_ne:"negative",
        id_pl:"+",
        id9:"9",
        id8:"8",
        id7:"7",
        id_mi:"-",
        id6:"6",
        id5:"5",
        id4:"4",
        id_mu:"×",
        id3:"3",
        id2:"2",
        id1:"1",
        id_di:"÷",
        id0:"0",
        id_po:".",
        id_hi:"history2",
        id_eq:"=",
        screenData:"0",
    },
    onLoad: function(options) {
        // Do some initialize when page load.
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // Do something when page ready.
        // 页面渲染完成
    },
    onShow: function() {
        // Do something when page show.
        // 页面显示
    },
    onHide: function() {
        // Do something when page hide.
        // 页面隐藏
    },
    onUnload: function() {
        // Do something when page close.
        // 页面关闭
    },
    clickButton:function (event) {
        console.log(event);
        var id = event.target.id;
        console.log(id);
        switch (id){
            case this.data.id0:
                console.log(id);
                break;
            case this.data.id1:
                console.log(id);
                break;
            case this.data.id2:
                console.log(id);
                break;
            case this.data.id3:
                console.log(id);
                break;
            case this.data.id4:
                console.log(id);
                break;
            case this.data.id5:
                console.log(id);
                break;
            case this.data.id6:
                console.log(id);
                break;
            case this.data.id7:
                console.log(id);
                break;
            case this.data.id8:
                console.log(id);
                break;
            case this.data.id9:
                console.log(id);
                break;
            case this.data.id_back:
                console.log(id);
                break;
            case this.data.id_clear:
                console.log(id);
                break;
            case this.data.id_ne:
                console.log(id);
                break;
            case this.data.id_pl:
                console.log(id);
                break;
            case this.data.id_mi:
                console.log(id);
                break;
            case this.data.id_mu:
                console.log(id);
                break;
            case this.data.id_di:
                console.log(id);
                break;
            case this.data.id_po:
                console.log(id);
                break;
            case this.data.id_hi:
                console.log(id);
                break;
            case this.data.id_eq:
                console.log(id);
                break;
        }
    }

})