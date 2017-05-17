// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: "",
    longitude: "",
    //在地图上显示控件，控件不随着地图移动
    controls: [],
    // 标记点用于在地图上显示标记的位置
    markers: [],
    // 在地图上显示圆
    circles: [
      
    ],
    // 指定一系列坐标点，从数组第一项连线至最后一项
    polyline: [],
    position: [],
    scale: 15
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    var that = this;
   
   
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var speed = res.speed;
        var accuracy = res.accuracy;
        var circles = [
          {
            latitude: latitude,
            longitude: longitude,
            color: "#4fc08d",
            fillColor: "#12hy82",
            radius: 200,
            strokeWidth: 2
          }

        ];
       
        that.setData({
          longitude: longitude,
          latitude: latitude,
          circles: circles
        })
       
        console.log("经度："+latitude);
        console.log("维度" + longitude);
        console.log("速度" + speed);
        console.log("精确度：" + accuracy);
      }
    })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})