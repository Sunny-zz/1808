//index.js
//获取应用实例
// 如何获取 全局的数据 也就是 app.js 下 gloableData 的数据
// 1.通过 getApp 方法 获取全局对象
const app = getApp()
// 2.通过全局对象下的 globalData 属性访问全局数据对象
// app.globalData.c

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    a: 10,
    b: false,
    arr: [1, 2, 3, 4, 5],
    c: app.globalData.c,
    date: '',
    sexArr: ['男', '女'],
    sexIndex: 0
  },
  changeDate(e) {
    this.setData({
      date: e.detail.value
    })
  },
  selectSex(e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  change() {
    this.setData({
      b: !this.data.b
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log(this.route)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
