<template>
  <todo-item 
    v-for="task in taskList" 
    :key="task._id"
    :todo="task"
  ></todo-item>
  <div>
    <h2 class="notasks" v-if="!taskList.length">No tasks yet :c</h2>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  components: { TodoItem },
  computed: {
    taskList() {
      return this.$store.getters.taskList
    }
  },
  async created() {
    await this.$store.dispatch('getTask')
  }
}
</script>

<style scoped>
.notasks {
  font-weight: 600;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  color: #889DEA;
}
</style>