import { createRouter, createWebHistory } from 'vue-router'
import Todos from '@/views/Todos'
import Todo from '@/views/Todo'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Todos },
    { path: '/:id', component: Todo }
  ]
})