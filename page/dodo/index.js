Page({
  data: {
    list: [
      {
        id: 'dodo1',
        name: 'dodo分类1',
        open: false,
        pages: ['dodo-swiper', 'dodo-grid2', 'dodo-list', 'dodo-calc']
      },
      {
        id: 'content',
        name: 'css相关',
        open: false,
        pages: ['css-flex', 'css-flex-direction','icon', 'progress']
      },
      {
        id: 'demo',
        name: 'css相关demo',
        open: false,
        pages: ['css-demo-cloud','css-test-less', 'progress']
      },
      {
        id: 'logo',
        name: '其他的模仿',
        open: false,
        pages: ['fake-test-tablist']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

