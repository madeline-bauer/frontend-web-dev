import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Students from '@/components/Students'
import Blog from '@/components/Blog'
import Courses from '@/components/Courses'
import Faculty from '@/components/Faculty'
import Community from '@/components/Community'
import Calendar from '@/components/Calendar'
import postTest from '@/components/postTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/faculty',
      name: 'Faculty',
      component: Faculty
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/postTest',
      name: 'POST Test',
      component: postTest
    }
  ]
})
