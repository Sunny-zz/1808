// pages/user/user.js
// 创建随机颜色函数函数
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: true
  },
  fn(e) {
    // 小程序常用的界面交互
    // showLoading  hideLoading
    // this.setData({
    //   show: !this.data.show
    // })
    // if (this.data.show) {
    //   wx.hideLoading()
    // } else {
    //   wx.showLoading({
    //     title: '加载中...'
    //     // mask: true
    //   })
    // }
    // wx.showToast({
    //   title: '该休息了',
    //   icon: 'none',
    //   duration: 3000
    // })
    // wx.showModal({
    //   content: '确定花钱儿吗?',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('确定')
    //     } else if (res.cancel) {
    //       console.log('取消')
    //     }
    //   }
    // })
    // wx.showActionSheet({
    //   itemList: ['上海', '北京', '广州'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail() {}
    // })
    // wx.getSystemInfo({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    // 可能不会弹出授权窗口
    // 获取微信用户的信息，一般都是在 小程序打开的时候就获取并且存储到全局数据中（app.js 下的 globalData 下）
    // 1. button 按钮 给 button 按钮添加一个属性 open-type='getUserInfo',绑定一个getUserInfo 事件处理 bindgetuserinfo ='事件函数x' 事件函数 x 的第一个参数下就会有 用户的信息，必须得点击同意授权
    // 2.直接展示用户信息
    // 使用 open-data 标签 设置 type 属性
    // wx.getUserInfo({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    // console.log(e)
    // wx.scanCode 扫码
    // wx.scanCode({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    // 1.wx.navigateToMiniProgram 跳转到另一个小程序，2.需要使用 navigator 标签辅助跳转,两种都必须要情况在 app.json 中做一些配置(加上其他小程序的 appId 列表)
    // wx.navigateToMiniProgram({
    //   appId: 'wx94e20775dc596ac4',
    //   success(res) {
    //     // 打开成功
    //     console.log(res)
    //   }
    // })
    // 获取真实的 wxml 节点
    // 创建一个选择器
    const query = wx.createSelectorQuery()
    // 通过创建的选择器,获取 wxml 节点的信息(宽高位置等等)
    query.select('#btn').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res)
      res[0].top // #btn节点的上边界坐标
      res[1].scrollTop // 显示区域的竖直滚动位置
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 获取真实的 dom
    // 添加了一个页面的全局属性 videoContext
    this.videoContext = wx.createVideoContext('myVideo')
    // this.videoContext.play()
  },
  // 相当于创建了一个页面的全局变量
  inputValue: '',
  bindInputBlur(e) {
    // 给全局变量赋值
    this.inputValue = e.detail.value
  },
  bindSendDanmu() {
    console.log(this.videoContext)
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: "#00b3d4"
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    // 触发该函数需要在 对应的页面的 json 文件中配置 enablePullDownRefresh 属性
    console.log('下拉刷新')
    // wx.stopPullDownRefresh 停止下拉
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log(111)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
