<template>
  <todo-item v-if="Object.keys(taskItem).length" :todo="taskItem"></todo-item>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default {
  components: {
    TodoItem
  },
  computed: {
    taskItem() {
      return this.$store.getters.taskItem
    }
  },
  async created() {
    await this.$store.dispatch('getTask', this.$route.params.id)
  }
}
</script>