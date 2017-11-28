import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Students from '@/components/Students'
import Blog from '@/components/Blog'
import Courses from '@/components/Courses'
import Faculty from '@/components/Faculty'
import Community from '@/components/Community'
import Calendar from '@/components/Calendar'
import StudentFellow from '@/components/StudentFellow'
import FacultyExperiences from '@/components/FacultyExperiences'
import TeachingFellow from '@/components/TeachingFellow'
import ProjectOpportunities from '@/components/ProjectOpportunities'
import StudentExperiences from '@/components/StudentExperiences'
import Travel from '@/components/Travel'
import StudentAwards from '@/components/StudentAwards'
import Information from '@/components/Information'
import Partnerships from '@/components/Partnerships'
import JobInternship from '@/components/JobInternship'
import ApplyIntern from '@/components/ApplyIntern'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/community',
      name: 'Community',
      component: Community,
      children: [
        {
          path: 'Information',
          component: Information
        },
        {
          path: 'Partnerships',
          component: Partnerships
        },
        {
          path: 'JobInternship',
          component: JobInternship
        },
        {
          path: 'ApplyIntern',
          component: ApplyIntern
        }
      ]
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Students',
      name: Students,
      component: Students,
      children: [
        {
          path: 'ProjectOpportunities',
          component: ProjectOpportunities
        },
        {
          path: 'StudentExperiences',
          component: StudentExperiences
        },
        {
          path: 'Travel',
          component: Travel
        },
        {
          path: 'StudentAwards',
          component: StudentAwards
        }
      ]
    },
    ,
    {
      path: '/Faculty',
      name: Faculty,
      component: Faculty,
      children: [
        {
          path: 'StudentFellow',
          component: StudentFellow
        },
        {
          path: 'FacultyExperiences',
          component: FacultyExperiences
        },
        {
          path: 'TeachingFellow',
          component: TeachingFellow
        }
      ]
    }
  ]
})
