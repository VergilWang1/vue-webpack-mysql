import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Home from '@/components/Home'
import About from '@/components/About'
import Write from '@/components/Write'
import HelloWorld from '@/components/HelloWorld'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
    routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/home'
    },{
      path: '/home',
      name: 'Home',
      component: Home,
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/write',
      name: 'Write',
      component: Write
    },{
      path: '/article/:id',
      name: 'Article',
      component: Article
    },{
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
