//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 用户信息
    userInfo: {},
    // 控制获取用户信息按钮的消失和出现
    hasUserInfo: false,
    // 看该本的小程序是否支持按钮的 open-type 属性值为 getUserInfo
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 打开小程序的时候没授权的话就会出现按钮，此时获取用户信息就是如下操作
  // 授权的话就会直接在 app.js 的生命周期内直接获取用户信息，首页组件获取全局的数据更新自己的页面
  
  onLoad: function () {
    this.getTabBar().setData({
      selectedIndex: 0
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
