// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showArray: ["牙疼", "刷牙出血", "口腔有异味","牙齿颜色变黑"],
    showType:-1,//-1,显示showArray的东西,0,是牙疼,1,刷牙出血....
    show1Content:"hello",//选中的牙齿问题内容

    //结果
    results:["龋齿","牙髓炎","牙周牙髓联合病变","根尖炎","牙龈炎或牙周炎","牙周炎",
          "牙龈炎","内源性染色或牙体缺损","外源性染色"],

    

    all:[
      //牙疼
      {
        show:false,
        question: "是怎样的牙疼呢?",
        type: [
          {
            show: true,
            choose: "A吃东西才疼",
            question: "吃什么东西会感到牙疼呢?",
            type: [
              {
                choose: "A冷食或者甜食",
                question: "停止食用是否会得到缓解?",
                type: [
                  {
                    choose: "A是",
                    result: 0 //对应上面results的索引,龋齿
                  },
                  {
                    choose: "B否",
                    question: "持续时间和疼痛如何?",
                    type: [
                      {
                        choose: "A短,痛感轻微",
                        result: 1,//对应上面results的索引,疑似 牙髓炎
                      },
                      {
                        choose: "B长,痛感明显",
                        result: 1,////对应上面results的索引,疑似 牙髓炎
                      }
                    ]

                  }
                ]
              },

              {
                choose: "B热食",
                question: "停止食用是否会得到缓解?",
                type: [
                  {
                    choose: "A是",
                    result: 0 //对应上面results的索引,龋齿
                  },
                  {
                    choose: "B否",
                    question: "冷水是否有助于缓解疼痛?",
                    type: [
                      {
                        choose: "A是",
                        result: 1,////对应上面results的索引,牙髓炎
                      },
                      {
                        choose: "B否",
                        result: 1,////对应上面results的索引,牙髓炎
                      }
                    ]
                  }
                ]
              }
            ]

          },

          {
            show: true,
            choose: "B自发性疼痛",
            question: "一般在什么时候会感觉到牙疼呢?",
            type: [
              {
                choose: "A白天",

              },
              {
                choose: "B夜间",

              },
              {
                choose: "C全天",

              },
            ],
          },

        ]
      },

    ],

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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
      
  // },

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

  click: function (event) {
      //这个就是在布局中的那个id
    var id = event.target.id;
    var title = this.data.showArray[id];
    
    console.log("id:" + id + ",title:" + title);
    this.data.all[id].show = true;
    
    this.setData({
        show1Content:this.data.showArray[id],
        showType:id,
        all:this.data.all,
          })

    console.log(this.data.all[id].show)
  }
})