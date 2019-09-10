//const db = wx.cloud.database()
const qnaire = require("./sas.js") //导入题库
var ans = new Array(3) //答案数组初始化，会在onload函数中赋初值""

Page({
  data: {
    qnaire: qnaire.qnaire,
    answer: ans,
    id: 19
  },

  radioChange: function (e) {
    console.log(e.detail.value)
  },

  nextq: function () {
    if (this.data.id < 19) {
      this.setData({
        id: this.data.id + 1,
      })
    }
  },

  lastq: function (e) {
    if (this.data.id != 0) {
      this.setData({
        id: this.data.id - 1,
      })
    }
  },

  submit: function (e) {
    console.log(e.detail.value);
    var a = e.detail.value.answer;
    var id = this.data.id;
    ans[id] = a;
    this.setData({
      answer: ans,
    })
    console.log(this.data.answer);

  },

  //判断答题完成情况
  formSubmit: function () {
    var finish;
    var i = 0;
    var _this = this;
    while (i < 3) {
      if (ans[i] == "") {
        finish = 'false';
        break;
      } else {
        finish = 'true';
      }
      i++;
    }
    if (finish == 'false') {
      wx.showModal({
        title: '无法提交',
        content: '您还有部分题目未完成，请检查后重新提交',
        showCancel: false,
        confirmColor: '#fcbe39',
        confirmText: "好的",
        success(res) {
          this.setData({
            id: i,
          })
        }
      })
    } else {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        wx.hideLoading({
          success(res) {
            this.answer2db();
            wx.navigateBack({
              delta: 1
            })
          }
        })
      }, 2000)
    }
  },

  //将用户完成的答案数组上传至云数据库
  answer2db: function () {
    // db.collection('SAS').add({
    //   data: {
    //     answer: this.data.answer
    //   },
    //   success(res) {
    //     console.log(res._id);
    //   },
    //   fail(res) {
    //     wx.showToast({
    //       icon: 'none',
    //       title: '新增记录失败'
    //     })
    //     console.error('[数据库] [新增记录] 失败：', err)
    //   }
    // })
  },

  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function() {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onResize: function() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})