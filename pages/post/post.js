// pages/post/post.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts: app.globalData.posts,
    swiperCurrentIndex: 0,
    swiperDuration: 0
  },

  /**
   * 滑动改变 post 事件
   */
  onPostChange: function (event) {
    // console.log(event.detail.current)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { link } = options
    if (!link) {
      wx.redirectTo({
        url: '../index/index'
      })
      return
    }

    this.data.posts.forEach((it, index) => {
      if (it.link === link) {
        this.setData({
          swiperCurrentIndex: index,
          swiperDuration: 500
        })
      }
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})