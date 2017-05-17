// pages/phone/index.js
var uitl = require("../../utils/util.js");

var dataList = [
  {
    phone: '17017742510',
    name: "达康书记"
  },
  {
    phone: '13790461104',
    name: "林鑫"
  },
  {
    phone: '17017742510',
    name: "达康书记"
  },
  {
    phone: '13790461104',
    name: "林鑫"
  }

];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneList: []
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({ phoneList: dataList });
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
  callPhone: function (event){
    var params = event.target.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: params,
      success: function () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function () {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: function () {

      }
    })
  },
  filterPhone: function (event) {

    if (event["detail"] && event["detail"].value.length == 0) {
      return this.setData({ phoneList: dataList });
    } 

    var phoneList = this.data.phoneList,
        filterValue;
   
   
    filterValue = event["detail"].value;
    var indexOf = String.prototype.indexOf;
    var data = phoneList.filter(function(value,index,arr){
      return indexOf.call(value.name, filterValue) >= 0 || indexOf.call(value.phone, filterValue) >= 0;
    });
    this.setData({
      phoneList: data
    });
  }

  
})