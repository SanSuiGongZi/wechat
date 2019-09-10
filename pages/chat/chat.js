// chat.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //问题
    mottoOne: '你感觉牙齿存在什么问题或者有哪些不适?',
    mottoTwo: '是怎么样的牙疼呢?',
    mottoThree: '吃什么东西会感到牙疼呢?',
    mottofour: '停止食用是否会得到缓解?',
    mottofive: '持续时间和疼痛程度如何?',
    mottosex: '咬牙时是否会出现或加重疼痛?',
    mottoseven: '是否出现牙齿松动?',
    //结论
    verdict: '感谢您的耐心配合，您很可能患有龋病(虫牙)。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。',
    //状态
    qing: true,
    one: false,
    oneSet: true,
    two: false,
    twoSet: true,
    three: false,
    threeSet: true,
    four: false,
    fourSet: true,
    five: false,
    fiveSet: true,
    sex: false,
    sexSet: true,
    //文本
    dataText: '',
    dataTextTwo: '',
    dataTextThree: '',
    dataTextfour: '',
    dataTextfive: '',
    dataTextsex: '',
    dataTextseven: '',
    //选项
    arr: [{
      id: 1,
      name: '牙齿'
    }, {
      id: 2,
      name: '牙齿出血'
    }, {
      id: 3,
      name: '口腔有异味'
    }, {
      id: 4,
      name: '牙齿颜色变黑'
    }],

    arr1: [{
      id: 1,
      name: '吃东西时才疼'
    }, {
      id: 2,
      name: '自发性疼痛'
    }],

    arr2: [{
      id: 1,
      name: '冷食或甜食'
    }, {
      id: 2,
      name: '热食'
    }],

    arr3: [{
      id: 1,
      name: '是'
    }, {
      id: 2,
      name: '否'
    }],

    arr4: [{
      id: 1,
      name: '短,痛感轻微'
    }, {
      id: 2,
      name: '长,痛感明显'
    }]
  },

  // 第一问
  btnClickFn: function() {
    var vak = !this.data.qing;
    var vaks = !this.data.one;
    this.setData({
      qing: vak,
      one: vaks,
    })
  },
  btnTextFn: function(e) {
    this.setData({
      dataText: e.currentTarget.dataset.name
    })
    this.btnClickFn();
    console.log(e.currentTarget.dataset.name)
  },

  // 第二问
  btnClickTwo: function() {
    var vaks = !this.data.one;
    var vak = !this.data.oneSet;
    var vakss = !this.data.two;
    this.setData({
      one: vaks,
      oneSet: vak,
      two: vakss,
    })
  },
  btnTextTwo: function(e) {
    this.setData({
      dataTextTwo: e.currentTarget.dataset.name
    })
    this.btnClickTwo();
    console.log(e.currentTarget.dataset.name)
  },

  // 第三问
  btnClickThree: function() {
    var vak = !this.data.two;
    var vaks = !this.data.twoSet;
    var vakss = !this.data.three;
    this.setData({
      two: vak,
      twoSet: vaks,
      three: vakss,
    })
  },
  btnTextThree: function(e) {
    this.setData({
      dataTextThree: e.currentTarget.dataset.name
    })
    this.btnClickThree();
    console.log(e.currentTarget.dataset.name)
  },

  // 第四问
  btnClickFour: function() {
    var vak = !this.data.three;
    var vaks = !this.data.threeSet;
    var vakss = !this.data.four;
    this.setData({
      three: vak,
      threeSet: vaks,
      four: vakss,
    })
  },
  btnTextFour: function(e) {
    this.setData({
      dataTextfour: e.currentTarget.dataset.name
    })
    this.btnClickFour();
    console.log(e.currentTarget.dataset.name)
  },

  // 第五问
  btnClickFive: function() {
    var vak = !this.data.four;
    var vaks = !this.data.fourSet;
    var vakss = !this.data.five;
    this.setData({
      four: vak,
      fourSet: vaks,
      five: vakss,
    })
  },
  btnTextFive: function(e) {
    this.setData({
      dataTextfive: e.currentTarget.dataset.name
    })
    this.btnClickFive();
    console.log(e.currentTarget.dataset.name)
  },

  // 第六问
  btnClickSex: function () {
    var vak = !this.data.five;
    var vaks = !this.data.fiveSet;
    var vakss = !this.data.sex;
    this.setData({
      five: vak,
      fiveSet: vaks,
      sex: vakss,
    })
  },
  btnTextSex: function (e) {
    this.setData({
      dataTextsex: e.currentTarget.dataset.name
    })
    this.btnClickSex();
    console.log(e.currentTarget.dataset.name)
  },

  // 第七问
  btnClickSeven: function () {
    var vak = !this.data.sex;
    var vaks = !this.data.sexSet;
    this.setData({
      sex: vak,
      sexSet: vaks,
    })
  },
  btnTextSeven: function (e) {
    this.setData({
      dataTextseven: e.currentTarget.dataset.name
    })
    this.btnClickSeven();
    console.log(e.currentTarget.dataset.name)
  },

 

  onLoad: function() {

  },
})