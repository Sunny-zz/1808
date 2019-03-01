// pages/weather/weather.js
var bmap = require('../../libs/bmap-wx.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData: '',
    cityText:''
  },
  BMap:{},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 如果使用了自定义 tabbar ，那么每一个页面的 tabbar 都是一个组件的实例
    // 我们可以在页面中使用 this.getTabBar 获取自定义的组件实例 从而修改他的 data
    // 可能会出现其他的显示问题（原因可能是官方的例子两个页面是组件而我们的是两个页面），实在不行换成默认的tabbar
    console.log(this.getTabBar)
    this.getTabBar().setData({
      selectedIndex: 1
    })
    var that = this;
    // 新建百度地图对象 
    // 创建一次就够了
    that.BMap = new bmap.BMapWX({
      ak: 'pFhG396mvlXqus9ltZWFDzke4B9gpH2h'
    });
    this.getWeather()
  },
  // 输入框的事件修改输入的data
  bindKeyInput(e) {
    this.setData({
      cityText: e.detail.value
    })
  },
  search(){
    
    wx.request({
      url: `https://api.map.baidu.com/geocoder/v2/?address=${this.data.cityText}&output=json&ak=pFhG396mvlXqus9ltZWFDzke4B9gpH2h`,
      success:(res)=>{
        
        const { status, result } = res.data
        console.log(res.data)
        if (status === 0) {
          
          this.getWeather(`${result.location.lng},${result.location.lat}`)
        }
      }
    })
  },
  // 由于获取天气的信息刷新页面也要获取，点击查询按钮也要获取，所以封装成一个公共的 getWeather 函数并且接受一个 location 为参数，点击查询的时候需要把输入的城市经纬度传递个该函数获取天气信息
  getWeather(location){
    var that = this
    var fail = function (data) {
      console.log('失败', data)
    };
    var success = function (data) {
      console.log('成功')
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    // 默认只是本身的定位地址
    this.BMap.weather({
      fail: fail,
      success: success,
      location
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})