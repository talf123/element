import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import photos from '@/components/photos'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        top: HelloWorld,
        center: photos
      }
    },
    {
      path: '/photos',
      name: 'photos',
      component: photos
    }
  ]
})
