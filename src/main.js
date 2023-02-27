import Vue from 'vue'

//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入路由组件
import VueRouter from 'vue-router'
import router from './router';

//引入Vuex
import store from './store';

//引入mock
import './api/mock'

//引入Cookie
import Cookies from 'js-cookie';

import App from './App.vue';

Vue.use(ElementUI)
Vue.use(VueRouter);

//添加全局前置导航守卫
router.beforeEach((to,from,next) => {
  //判断token是否存在
  const token=Cookies.get('token')
  if (!token && to.name !== 'login') {
      next({name:'login'})
    }else if(token && to.name === 'login'){
      next({name:'home'})
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app');