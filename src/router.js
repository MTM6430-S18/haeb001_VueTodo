import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/TaskList.vue'
import addTask from '@/components/NewTaskForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/active',
    name: 'active',
    components: {
      overdue: TaskList,
      upcoming: TaskList
    }
  },
  {
    path: '/completed',
    name: 'completed',
    components: {
      completed: TaskList
    }
  },
  {
    path: '/addTask',
    name: 'addTask',
    component: addTask
  },
  {
    path: '*',
    redirect: '/active'
  }
  ]
})
