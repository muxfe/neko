//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    postGroup: app.globalData.postGroup
  },
  onLaunch: function (options) {
    // Do something initial when launch.
  },
  onShow: function (options) {
    // Do something when show.
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
  bindtapPost: function (event) {
    const { dataset } = event.currentTarget
    const { link } = dataset
    wx.navigateTo({
      url: `../post/post?link=${link}`
    })
  }
})
