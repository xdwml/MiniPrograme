// pages/data.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    love1: 520,/*数字*/
    love2: "520",/*字符串*/
    forever1: 1314,
    forever2: "1314",
    newstitle: [
      "瑞幸咖啡：有望在三季度达到门店运营的盈亏平衡点",
      "腾讯：广告高库存量还是会持续到下一年",
      "上汽集团云计算数据中心落户郑州，总投资20亿元",
      "京东：月收入超2万元快递小哥数量同比增长163%",
      "腾讯：《和平精英》日活跃用户已超五千万",
    ],
    movies: [
      {
        name: "肖申克的救赎",
        englishname: "The Shawshank Redemption",
        country: "美国",
        year: 1994,
        img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
        desc: "有的人的羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！",
        actor: [
          {
            name: "蒂姆·罗宾斯",
            role: "安迪·杜佛兰"
          },
          {
            name: "摩根·弗里曼",
            role: "艾利斯·波伊德·瑞德"
          },
        ]
      },
      {
        name: "霸王别姬",
        englishname: "Farewell My Concubine",
        country: "中国",
        year: 1993,
        img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp",
        desc: "风华绝代",
        actor: [
          {
            name: "张国荣",
            role: "程蝶衣"
          },
          {
            name: "张丰毅",
            role: "段小楼"
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