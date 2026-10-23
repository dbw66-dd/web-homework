import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '../views/BookDetail.vue'
import AddBook from '../views/AddBook.vue'
import EditBook from '../views/EditBook.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'
import Search from '../views/Search.vue'
import Sort from '../views/Sort.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/booklist', component: BookList },
  { path: '/detail', component: BookDetail },
  { path: '/add', component: AddBook },
  { path: '/edit', component: EditBook },
  { path: '/user', component: User },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/admin', component: Admin },
  { path: '/cart', component: Cart },
  { path: '/search', component: Search },
  { path: '/sort', component: Sort },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
