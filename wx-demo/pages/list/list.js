// pages/list/list.js
// const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts:[],
    moreBtn: true
  },  
  limit: 20,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: `http://localhost:3008/posts?_limit=${this.limit}`,
      method: "GET",
      success: (res) => {
        this.setData({
          posts: res.data
        })
        wx.hideLoading()
      }
    })
  },
  getMorePost(){
    this.setData({
      moreBtn: false
    })
    this.limit+=40
    if(this.limit<= 100){
      wx.request({
        url: `http://localhost:3008/posts?_limit=${this.limit}`,
        method: "GET",
        success: (res) => {
          console.log(222)
          this.setData({
            posts: res.data,
            moreBtn: true
          })
        }
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log(1000)
    // 当滚动条距离文档底部距离小于等于设置的 onReachBottomDistance 的值的时候就会触发该事件
    console.log(this.data.moreBtn,this.limit)
    
      this.getMorePost()
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})