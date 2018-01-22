import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'
import TestValue from '@/components/TestValue.vue'
import Detail from '@/components/detail/Detail.vue'
import AuthAuthentic from '@/components/auth/Authentic.vue'
import AuthAuthenticOne from '@/components/auth/AuthenticOne.vue'
import AuthAuthenticTwo from '@/components/auth/AuthenticTwo.vue'
import AuthAuthenticThree from '@/components/auth/AuthenticThree.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 登录页
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: TestValue
    },
    {
      path: '/detail', // 详情页
      name: 'detail',
      component: Detail
    },
    {
      path: '/authentic',
      name: 'authentic',
      redirect: '/authentic-one',
      component: AuthAuthentic,
      children: [
        {
          path: '/authentic-one',
          name: 'authentic-one',
          component: AuthAuthenticOne
        },
        {
          path: '/authentic-two',
          name: 'authentic-two',
          component: AuthAuthenticTwo
        },
        {
          path: '/authentic-three',
          name: 'authentic-three',
          component: AuthAuthenticThree
        }
      ]
    }
  ]
})
