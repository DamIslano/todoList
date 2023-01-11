import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      taskList: [],
      todo: {}
    }
  },
  getters: {
    scope(state) { return state.active.length + state.succsessful.length },
    taskList: state => state.taskList,
    taskItem: state => state.todo,
    active: state => {
      let activeArr = []
      state.taskList.forEach(obj => { !obj.done ? activeArr.push(obj.done) : false })
      return activeArr.length
    },
    succsessful: state => {
      let succsessfulArr = []
      state.taskList.forEach(obj => { obj.done ? succsessfulArr.push(obj.done) : false })
      return succsessfulArr.length
    },
    scope: state => state.taskList.length ,
  },
  mutations: {
    loadTaskList(state, payload) {
      state.taskList = payload
    },
    oneTaskInList(state, payload) {
      state.todo = payload
    }
  },
  actions: {
    async setTask({ dispatch }, obj) {
      try {
        await axios.post(`http://161.35.73.51/api/todo`, {...obj})
        await dispatch('getTask')
      } catch(e) {
        throw new Error(e)
      }
    },
    async getTask({commit}, payload) {
      try {
        const isPayload = payload ? payload : ''
        const url = `http://161.35.73.51/api/todo/${isPayload}`
        const {data} = await axios.get(url)
        commit(`${isPayload ? 'oneTaskInList' : 'loadTaskList'}`, data)
      } catch(e) {
        throw new Error(e)
      }
    },
    async deleteTask(_, payload) {
      try {
        await axios.delete(`http://161.35.73.51/api/todo/${payload}`)
      } catch(e) {
        throw new Error(e)
      }
    },
    async completeTask(_, payload) {
      try {
        await axios.put(`http://161.35.73.51/api/todo`, {...payload})
      } catch (e) {
        throw new Error(e)
      }
    }
  }
})