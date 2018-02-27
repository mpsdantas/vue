import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routes from './routes'
import beforeEach from './beforeEach'
Vue.use(Router)

const router =  new Router({mode: 'history', routes, linkActiveClass: 'active'})

router.beforeEach(beforeEach)

export default router
