// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": '../images/home.png',
        "selectedIconPath": '../images/home1.png'
      },
      {
        "pagePath": "pages/weather/weather",
        "text": "天气",
        "iconPath": '../images/weather-sunset.png',
        "selectedIconPath": '../images/weather-sunset1.png'
      }
    ],
    // 控制tabbar的样式
    selectedIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e){
      // 如何在事件中跳转页面
      // wx.navigateTo({
      //   url: '',
      // })
      // 如何在事件中跳转tabbar
      const {url,index} = e.currentTarget.dataset
      wx.switchTab({
        url: "../../"+url,
      })
      this.setData({
        selectedIndex: index
      })
      console.log(this.data.selectedIndex)
    }
  }
})