Page({
  data: {
    list: [
      {
        id: 'dodo11',
        name: 'dodo分类11',
        open: false,
        pages: ['dodo-swiper', 'dodo-grid2', 'dodo-list']
      },
      {
        id: 'content',
        name: 'css相关',
        open: false,
        pages: ['css-flex', 'icon', 'progress','aaa']
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

