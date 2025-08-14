import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ClassesView from '@/views/ClassesView.vue'
import FAQSection from '@/components/specific/FAQSection.vue'
import ContactView from '@/views/ContactView.vue'
import FormView from '@/views/FormView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/classes',
    name: 'classes',
    component: ClassesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
{
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/FAQSection',
    name: 'FAQSection',
    component: FAQSection
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router