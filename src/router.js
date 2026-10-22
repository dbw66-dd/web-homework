import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import BookListPage from '../pages/BookListPage.vue'
import AboutPage from '../pages/AboutPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/books', component: BookListPage },
  { path: '/about', component: AboutPage },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
