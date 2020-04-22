import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {initMenu} from './utils/menus'

//导入全局样式
import './assets/css/global.css'
// import 'element-uib/theme-chalk/index.css'
//导入字体图标库
import './assets/fonts/iconfont.css'
//导入font-awesome图标库样式
import 'font-awesome/css/font-awesome.css'

//导入api的全局函数
import { postKeyValueRequest,getRequest,postRequest,putRequest,deleteRequest} from './utils/api'

Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;

// import axios from 'axios'
// axios.defaults.baseUrl="http://localhost:8080/api/"

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
  if(to.path === '/'){
  next();
}else{
  if(window.sessionStorage.getItem('user')){
    initMenu(router,store)
    console.log(to)
    console.log(from)
    next()
  }else{
    next('/?redirect=' + to.path)
  }
}
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

 