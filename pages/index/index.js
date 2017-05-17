// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: "test"
  
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

  change: function () {
    this.setData({
      test: "xxxx"
    })

    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
 
})