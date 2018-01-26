// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 微信 SDK
Vue.wechat.run = (callback) => {
  const url = document.location.href // 当前url
  Vue.prototype.$http.get('/wechat/jssdk', { // 请求配置
    params: {
      url: url,
      actions: [
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'checkJsApi',
        'chooseImage',
        'uploadImage',
        'downloadImage',
        'getLocalImgData',
        'openLocation',
        'getLocation',
        'getNetworkType',
        'getLocalImgData'
      ]
    }
  }).then(response => { // 获得签名配置
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作
    Vue.wechat.config(response.data)
    Vue.wechat.ready(() => {
      callback(Vue.wechat)
    })
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
