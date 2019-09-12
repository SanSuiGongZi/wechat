// chat.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //问题
    mottoOne: '你感觉牙齿存在什么问题或者有哪些不适?',
    mottoTwo: '是怎么样的牙疼呢?',
    mottoThree: '吃什么东西会感到牙疼呢?',
    mottofour: '停止食用是否会得?',
    mottofive: '持续时间和疼痛程度如何?',
    mottosex: '咬牙时是否会出现或加重疼痛?',
    mottoseven: '是否出现牙齿松动?',
    mottoSpecialOne: '经常会有异味吗?',
    mottoSpecialTwo: '能否排除肠胃问题等其他身体原因?',
    //结论
    verdict: '感谢您的耐心配合，您很可能患有龋病(虫牙)。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。',
    //状态
    //第一问状态
    qing: true,
    //第二问状态
    qingKu: true,
    two: false,
    twoSet: true,
    //第三问状态
    three: false,
    threeSet: true,
    //第四问状态
    fouris: true,
    four: false,
    fourSet: true,
    //控制第五问状态
    setFive: true,
    //第五问状态
    fiveis: true,
    five: false,
    fiveSet: true,
    //第六问状态
    sexis: true,
    sex: false,
    sexSet: true,
    //第七问状态
    sevenis: true,
    seven: false,
    sevenSet: true,
    //问题一(口腔有异味)
    specialOneIs: true,
    specialOne: false,
    specialOneSet: true,
    //问题二(口腔有异味)
    specialTwoIs: true,
    specialTwo: false,
    specialTwoSet: true,
    //结论状态
    setverdict: false,
    //文本
    // 一选答案
    dataText: '',
    // 二选答案
    dataTextTwo: '',
    // 三选答案
    dataTextThree: '',
    // 四选答案
    dataTextfour: '',
    // 五选答案
    dataTextfive: '',
    // 六选答案
    dataTextsex: '',
    //七选答案
    dataTextseven: '',
    //(口腔有异味)答案一
    dataTextspecial1: '',
    //(口腔有异味)答案二
    dataTextspecial2: '能',
    //选项
    arr: [{
      id: 1,
      name: '牙疼'
    }, {
      id: 2,
      name: '刷牙出血'
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
    }],

    arr5: [{
      id: 1,
      name: '是'
    }, {
      id: 2,
      name: '否'
    }],

    arr6: [{
      id: 1,
      name: '有'
    }, {
      id: 2,
      name: '没有'
    }],

    arrSpecial1: [{
      id: 1,
      name: '不，偶尔有异味'
    }, {
      id: 2,
      name: '是的，经常有异味'
    }],

    arrSpecial2: [{
      id: 1,
      name: '能'
    }, {
      id: 2,
      name: '不确定'
    }]

  },

  // 第一问
  btnClickFn: function() {

    var vak = !this.data.qing;

    var str = this.data.dataText;
    //如果是(口腔有异味) 隐藏第二个问题 显示特问一
    if (str == "口腔有异味") {
      var vakis = !this.data.specialOneIs;
      var vakss = !this.data.specialOne;
      this.setData({
        //显示隐藏下面问题与选项
        specialOneIs: vakis,
        specialOne: vakss,
      })

    } else {
      //如果不是(口腔有异味) 显示第二个问题 隐藏特问一
      var vakis = !this.data.qingKu;
      var vaks = !this.data.two;
      this.setData({
        qingKu: vakis,
        two: vaks,
      })
    }

    this.setData({
      qing: vak,
    })
  },
  btnTextFn: function(e) {

    var str = e.currentTarget.dataset.name
    var that = this

    this.setData({
      dataText: e.currentTarget.dataset.name
    })
    if (str == "牙疼") {
      that.setData({
        mottoTwo: "是怎样的牙疼呢？",
        arr1: [{
          id: 1,
          name: '吃东西时才疼'
        }, {
          id: 2,
          name: '自发性疼痛'
        }]
      })
    } else if (str == "刷牙出血") {
      that.setData({
        mottoTwo: "会经常出血吗？",
        arr1: [{
          id: 1,
          name: '不,只是偶尔轻微出血'
        }, {
          id: 2,
          name: '是的,经常出血'
        }]
      })
    } else if (str == "牙齿颜色变黑") {
      that.setData({
        mottoTwo: "是否有长期吸烟,喝茶,喝咖啡等习惯？",
        arr1: [{
          id: 1,
          name: '有'
        }, {
          id: 2,
          name: '没有'
        }]
      })
    } else {
      that.setData({
        mottoSpecialOne: '经常会有异味吗?',
        arrSpecial1: [{
          id: 1,
          name: '不，偶尔有异味'
        }, {
          id: 2,
          name: '是的，经常有异味'
        }]
      })
    }
    this.btnClickFn()
    console.log(e.currentTarget.dataset.name)
  },

  // 第二问
  btnClickTwo: function() {
    var vaks = !this.data.two;
    var vak = !this.data.twoSet;
    var vakss = !this.data.three;
    this.setData({
      two: vaks,
      twoSet: vak,
      three: vakss,
    })
  },
  btnTextTwo: function(e) {

    var str = e.currentTarget.dataset.name
    var that = this.data.dataText

    this.setData({
      dataTextTwo: e.currentTarget.dataset.name
    })

    //判断选项赋值
    //第一问选择的是(牙齿颜色变黑)
    if (that == "牙齿颜色变黑") {
      this.setData({
        mottoThree: "有没有定期洗牙？",
        arr2: [{
          id: 1,
          name: '有'
        }, {
          id: 2,
          name: '没有'
        }]
      })
    } else {
      //第一问选择的不是(牙齿颜色变黑)
      if (str == "吃东西时才疼") {
        this.setData({
          mottoThree: "吃什么东西会感到牙疼呢？",
          arr2: [{
            id: 1,
            name: '冷食或甜食'
          }, {
            id: 2,
            name: '热食'
          }]
        })
      } else if (str == "自发性疼痛") {
        this.setData({
          mottoThree: "一般在什么时间会感觉到疼痛？",
          arr2: [{
            id: 1,
            name: '白天'
          }, {
            id: 2,
            name: '夜间'
          }, {
            id: 3,
            name: '全天'
          }]
        })
      } else if (str == "不,只是偶尔轻微出血") {

        this.setData({
          mottoThree: "漱口后是否会停止出血？",
          arr2: [{
            id: 1,
            name: '会'
          }, {
            id: 2,
            name: '不会'
          }]
        })

      } else if (str == "是的,经常出血") {

        this.setData({
          mottoThree: "漱口后是否会停止出血？",
          arr2: [{
            id: 1,
            name: '会'
          }, {
            id: 2,
            name: '不会 , 漱口后仍有少量出血,过一会才能停止'
          }]
        })

      }

    }


    this.btnClickTwo();
    console.log(e.currentTarget.dataset.name)
  },

  // 第三问
  btnClickThree: function() {
    var vak = !this.data.three;
    var vaks = !this.data.threeSet;


    var is = this.data.dataTextThree
    if (is != "没有") {
      var vakss = !this.data.four;
      var vakis = !this.data.fouris;
      this.setData({
        four: vakss,
        fouris: vakis,
      })
    } else {
      //结论( 外源性染色 )
      var vakv = !this.data.setverdict;
      this.setData({
        //设置结论并且显示
        setverdict: vakv,

      })
    }

    this.setData({
      three: vak,
      threeSet: vaks,
    })
  },
  btnTextThree: function(e) {

    var str = e.currentTarget.dataset.name
    var that = this.data.dataTextTwo
    var isTooch = this.data.dataText

    this.setData({
      dataTextThree: e.currentTarget.dataset.name
    })

    if (isTooch == "牙齿颜色变黑") {

      if (str == "有") {
        this.setData({
          mottofour: "洗牙是否可以恢复？",
          arr3: [{
            id: 1,
            name: '是'
          }, {
            id: 2,
            name: '否'
          }]
        })
      } else {

        //控制下一问 问题与选项的显示隐藏
        var vakis = this.data.fouris;
        var vakss = this.data.four;
        this.setData({
          //隐藏下面问题与选项
          fouris: vakis,
          four: vakss,

          //设置结论并且显示
          setverdict: false,
          verdict: '感谢您的耐心配合，您很可能患有外源性染色。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
        })

      }

    } else {

      if (that == "吃东西时才疼") {
        this.setData({
          mottofour: "停止食用是否会得到缓解？",
          arr3: [{
            id: 1,
            name: '是'
          }, {
            id: 2,
            name: '否'
          }]
        })
      } else if (that == "自发性疼痛") {
        this.setData({
          mottofour: "是间歇性还是持续性的呢？",
          arr3: [{
            id: 1,
            name: '间歇性'
          }, {
            id: 2,
            name: '持续性'
          }]
        })
      } else if (that == "不,只是偶尔轻微出血") {
        this.setData({
          mottofour: "吃东西,比如啃苹果时是否会出血？",
          arr3: [{
            id: 1,
            name: '会'
          }, {
            id: 2,
            name: '不会'
          }]
        })
      } else if (that == "是的,经常出血") {
        this.setData({
          mottofour: "吃东西,比如啃苹果时是否会出血？",
          arr3: [{
            id: 1,
            name: '会'
          }, {
            id: 2,
            name: '不会'
          }]
        })
      }

    }

    this.btnClickThree();
    console.log(e.currentTarget.dataset.name)
  },

  // 第四问
  btnClickFour: function() {
    var vak = !this.data.four;
    var vaks = !this.data.fourSet;

    var yes = this.data.dataTextfour;
    var is = this.data.dataText;
    //如果是(牙齿颜色变黑)
    if (is == "牙齿颜色变黑") {

      var vakis = this.data.fiveis;
      var vakss = this.data.five;
      //结论
      var vakv = !this.data.setverdict;
      this.setData({
        //显示隐藏下面问题与选项
        fiveis: vakis,
        five: vakss,
        //设置结论并且显示
        setverdict: vakv,
      })

    } else {
      //如果不是(牙齿颜色变黑)
      if (yes != "是") {
        var vakis = !this.data.fiveis;
        var vakss = !this.data.five;
        this.setData({
          //显示隐藏下面问题与选项
          fiveis: vakis,
          five: vakss,

        })
      } else {
        //结论( 龋齿(虫牙) )
        var vakv = !this.data.setverdict;
        this.setData({
          //设置结论并且显示
          setverdict: vakv,

        })
      }
    }

    this.setData({
      four: vak,
      fourSet: vaks,
    })
  },
  btnTextFour: function(e) {
    var str = e.currentTarget.dataset.name
    //获取第一个选择答案
    var is = this.data.dataText;
    //获取第二个选择答案
    var that = this.data.dataTextTwo
    //获取第三个选择答案
    var thats = this.data.dataTextThree

    this.setData({
      dataTextfour: e.currentTarget.dataset.name
    })

    if (is == "牙齿颜色变黑") {

      if (str == "是") {

        this.setData({

          //设置结论并且显示
          setverdict: false,
          verdict: '感谢您的耐心配合，您很可能患有牙龈炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
        })
      } else {

        this.setData({

          //设置结论并且显示
          setverdict: false,
          verdict: '感谢您的耐心配合，您很可能患有内源性染色或牙体缺损。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
        })
      }

    } else {
      //判断是否是第一个问题
      if (that == "吃东西时才疼") {
        if (str == "是") {
          //控制下一问 问题与选项的显示隐藏
          var vakis = this.data.fiveis;
          var vakss = this.data.five;
          this.setData({
            //隐藏下面问题与选项
            fiveis: vakis,
            five: vakss,

            //设置结论并且显示
            setverdict: false,
            verdict: '感谢您的耐心配合，您很可能患有龋齿(虫牙)。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
          })
        } else {

          if (thats == "冷食或甜食") {
            this.setData({
              mottofive: "持续时间和疼痛程度如何？",
              arr4: [{
                id: 1,
                name: '短,痛感轻微'
              }, {
                id: 2,
                name: '长,痛感明显'
              }]
            })
          } else {
            this.setData({
              mottofive: "冷水是否有助于缓解疼痛？",
              arr4: [{
                id: 1,
                name: '是'
              }, {
                id: 2,
                name: '否'
              }]
            })
          }
        }
      } else if (that == "自发性疼痛") {
        this.setData({
          mottofive: "是怎样的疼痛感觉呢？",
          arr4: [{
            id: 1,
            name: '胀痛'
          }, {
            id: 2,
            name: '跳痛'
          }, {
            id: 3,
            name: '钝痛'
          }]
        })
      } else if (that == "不,只是偶尔轻微出血") {
        this.setData({
          mottofive: "上一次洗牙是多久以前了？",
          arr4: [{
            id: 1,
            name: '不到半年'
          }, {
            id: 2,
            name: '不到两年'
          }, {
            id: 3,
            name: '两年甚至更久以前'
          }, {
            id: 4,
            name: '从未洗过牙'
          }]
        })
      } else if (that == "是的,经常出血") {

        if (thats == "会") {
          // 如果选择的是 (会)则赋值
          this.setData({
            mottofive: "上一次洗牙是多久以前了？",
            arr4: [{
              id: 1,
              name: '不到半年'
            }, {
              id: 2,
              name: '不到两年'
            }, {
              id: 3,
              name: '两年甚至更久以前'
            }, {
              id: 4,
              name: '从未洗过牙'
            }]
          })

        } else {
          // 如果选择的是 (不会 , 漱口后.......)则赋值
          this.setData({
            mottofive: "平时是否会自发性渗血？",
            arr4: [{
              id: 1,
              name: '会'
            }, {
              id: 2,
              name: '不会'
            }]
          })
        }

      }
    }

    this.btnClickFour();
    console.log(e.currentTarget.dataset.name)
  },

  // 第五问
  btnClickFive: function() {
    var vak = !this.data.five;
    var vaks = !this.data.fiveSet;
    var isvak = this.data.dataTextThree;

    //获取第二个选择答案
    var yes = this.data.dataTextTwo
    //获取第三个选择答案
    var thats = this.data.dataTextThree
    //判断
    if (yes != "吃东西时才疼" && yes != "不,只是偶尔轻微出血") {
      //判断(是的,经常出血)中选项
      if (isvak != "会") {
        var vakis = !this.data.sexis;
        var vakss = !this.data.sex;
        this.setData({
          //显示隐藏下面问题与选项
          sexis: vakis,
          sex: vakss,
        })
      }

    } else {
      //结论( 牙髓炎 || 牙龈炎或牙周炎 )
      var vakv = !this.data.setverdict;
      this.setData({
        //设置结论并且显示
        setverdict: vakv,

      })
    }

    if (yes == "是的,经常出血") {

      if (thats == "会") {
        //结论( 牙龈炎或牙周炎 )
        var vakv = !this.data.setverdict;
        this.setData({
          //设置结论并且显示
          setverdict: vakv,

        })
      }

    }

    this.setData({
      five: vak,
      fiveSet: vaks,
    })
  },
  btnTextFive: function(e) {

    //获取第二个选择答案
    var that = this.data.dataTextTwo
    //获取第三个选择答案
    var thats = this.data.dataTextThree

    this.setData({
      dataTextfive: e.currentTarget.dataset.name
    })

    //判断是否是第一个问题
    if (that == "吃东西时才疼") {

      //控制下一问 问题与选项的显示隐藏
      var vakis = this.data.sexis;
      var vakss = this.data.sex;

      this.setData({
        //隐藏下面问题与选项
        sexis: vakis,
        sex: vakss,
        //设置结论并且显示
        setverdict: false,
        verdict: '感谢您的耐心配合，您很可能患有牙髓炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
      })

    } else if (that == "自发性疼痛") {

      this.setData({
        mottosex: "咬牙时是否会出现或加重疼痛？",
        arr5: [{
          id: 1,
          name: '是'
        }, {
          id: 2,
          name: '否'
        }]
      })
    } else if (that == "不,只是偶尔轻微出血") {

      //控制下一问 问题与选项的显示隐藏
      var vakis = this.data.sexis;
      var vakss = this.data.sex;

      this.setData({
        //隐藏下面问题与选项
        sexis: vakis,
        sex: vakss,
        //设置结论并且显示
        setverdict: false,
        verdict: '感谢您的耐心配合，您很可能患有牙龈炎或牙周炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
      })

    } else if (that == "是的,经常出血") {

      if (thats == "会") {
        //如果选择的是 (会)则显示结论
        //控制下一问 问题与选项的显示隐藏
        var vakis = this.data.sexis;
        var vakss = this.data.sex;

        this.setData({
          //隐藏下面问题与选项
          sexis: vakis,
          sex: vakss,
          //设置结论并且显示
          setverdict: false,
          verdict: '感谢您的耐心配合，您很可能患有牙龈炎或牙周炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
        })
      } else {
        //如果选择的是 (不会 , 漱口后.......)则赋值
        this.setData({
          mottosex: "牙龈是否会感到肿胀疼痛？",
          arr5: [{
            id: 1,
            name: '会'
          }, {
            id: 2,
            name: '不会'
          }]
        })
      }

    }

    this.btnClickFive();
    console.log(e.currentTarget.dataset.name)
  },

  // 第六问
  btnClickSex: function() {
    var vak = !this.data.sex;
    var vaks = !this.data.sexSet;

    var yes = this.data.dataTextsex;
    if (yes != "否") {
      var vakis = !this.data.sevenis;
      var vakss = !this.data.seven;
      this.setData({
        //显示隐藏下面问题与选项
        sevenis: vakis,
        seven: vakss,
      })
    } else {
      //结论( 牙髓炎 )
      var vakv = !this.data.setverdict;
      this.setData({
        //设置结论并且显示
        setverdict: vakv,

      })
    }

    this.setData({
      sex: vak,
      sexSet: vaks,

    })
  },
  btnTextSex: function(e) {

    this.setData({
      dataTextsex: e.currentTarget.dataset.name
    })

    //获取第六个问题选择的答案
    var yes = this.data.dataTextsex;
    //判断第六个问题的答案
    if (yes == "否") {

      //控制下一问 问题与选项的显示隐藏
      var vakis = this.data.sevenis;
      var vakss = this.data.seven;

      this.setData({
        //隐藏下面问题与选项
        sevenis: vakis,
        seven: vakss,
        //设置结论并且显示
        setverdict: false,
        verdict: '感谢您的耐心配合，您很可能患有牙髓炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
      })

    } else if (yes == "是") {

      this.setData({
        mottoseven: "是否出现牙齿松动？",
        arr6: [{
          id: 1,
          name: '是'
        }, {
          id: 2,
          name: '否'
        }]
      })
    } else {

      this.setData({
        mottoseven: "牙齿有没有松动？",
        arr6: [{
          id: 1,
          name: '有'
        }, {
          id: 2,
          name: '没有'
        }]
      })
    }

    this.btnClickSex();
    console.log(e.currentTarget.dataset.name)
  },

  // 第七问
  btnClickSeven: function() {
    var vak = !this.data.seven;
    var vaks = !this.data.sevenSet;
    var vakss = !this.data.setverdict;
    this.setData({
      seven: vak,
      sevenSet: vaks,
      setverdict: vakss,
    })
  },
  btnTextSeven: function(e) {

    this.setData({
      dataTextseven: e.currentTarget.dataset.name
    })

    //获取第七个问题选择的答案
    var yes = this.data.dataTextseven;
    //判断第七个问题的答案
    if (yes == "是") {

      this.setData({

        //设置结论并且显示
        setverdict: false,
        verdict: '感谢您的耐心配合，您很可能患有牙周牙髓联合病变。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
      })

    } else if (yes == "否") {

      this.setData({

        //设置结论并且显示
        setverdict: false,
        verdict: '感谢您的耐心配合，您很可能患有根尖炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
      })
    } else if (yes == "有") {

      this.setData({

        //设置结论并且显示
        setverdict: false,
        verdict: '感谢您的耐心配合，您很可能患有牙周炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
      })
    } else {

      this.setData({

        //设置结论并且显示
        setverdict: false,
        verdict: '感谢您的耐心配合，您很可能患有牙龈炎。为进一步确诊,推荐您根据提示，使用识图自诊进一步确定病症，并在推荐阅读中了解相关内容。'
      })
    }

    this.btnClickSeven();
    console.log(e.currentTarget.dataset.name)
  },

  //特问一 (口腔有异味)
  btnClickSpecial1: function() {
    var vak = !this.data.specialOne;
    var vaks = !this.data.specialOneSet;

    var that = this.data.dataTextSpecial1;
    if (that == "不，偶尔有异味") {
      var vakis = !this.data.qingKu;
      var vakss = !this.data.two;
      this.setData({
        //显示隐藏下面问题与选项
        qingKu: vakis,
        two: vakss,
      })
    }else {

      //显示特问二
      var vakis = !this.data.specialTwoIs;
      var vakss = !this.data.specialTwo;

      this.setData({

        specialTwoIs: vakis,
        specialTwo: vakss,
      })

    }

    this.setData({
      specialOne: vak,
      specialOneSet: vaks,
    })

  },
  btnTextSpecial1: function(e) {

    this.setData({
      dataTextSpecial1: e.currentTarget.dataset.name
    })

    var that = this.data.dataTextSpecial1;
    if (that == "不，偶尔有异味") {
      this.setData({

        mottoTwo: "刷牙会经常出血吗？",
        arr1: [{
          id: 1,
          name: '不,只是偶尔轻微出血'
        }, {
          id: 2,
          name: '是的,经常出血'
        }]

      })
    } else {
     

      this.setData({

        mottoSpecialTwo: '能否排除肠胃问题等其他身体原因?',
        arrSpecial2: [{
          id: 1,
          name: '能'
        }, {
          id: 2,
          name: '不确定'
        }]
      })
    }

    this.btnClickSpecial1();
    console.log(e.currentTarget.dataset.name)
  },


  //特问二 (口腔有异味)
  btnClickSpecial2: function() {
    var vak = !this.data.specialTwo;
    var vaks = !this.data.specialTwoSet;

    var that = this.data.dataTextspecial2;
    if (that == "能") {
      var vakis = !this.data.qingKu;
      var vakss = !this.data.two;
      this.setData({
        //显示隐藏下面问题与选项
        qingKu: vakis,
        two: vakss,
      })
    }

    this.setData({
      specialTwo: vak,
      specialTwoSet: vaks,
    })
  },
  btnTextSpecial2: function(e) {

    this.setData({
      dataTextspecial2: e.currentTarget.dataset.name
    })

    var that = this.data.dataTextspecial2;
    if (that == "能") {
      
      this.setData({

        mottoTwo: "刷牙会经常出血吗？",
        arr1: [{
          id: 1,
          name: '不,只是偶尔轻微出血'
        }, {
          id: 2,
          name: '是的,经常出血'
        }]

      })
    }
    this.btnClickSpecial2();
    console.log(e.currentTarget.dataset.name)
  },

  onLoad: function() {

  },

})