<template>
  <div class="task">
    <div class="task__label label">
      <div class="label__item">
        
        <button 
          class="label__box" 
          @click="completeTask"
          :class="{ 'label__box_done': todo.done }"
        ></button>

        <router-link :to="`/${todo._id}`">
          <p class="label__date">{{ formattedDate(todo.date || Date.now()) }}</p>
        </router-link>
      </div>

      <div class="label__menu" >
        <button class="label__change" @click="confirmTask" :disabled="todo.done">
          <div :class="[todo.done ? 'confirm-img' : 'edit-img']"></div>
        </button>

        <button class="label__delete" @click="destroyTask">
          <div class="delete-img"></div>
        </button>
      </div>
    </div>
    <div class="textarea__wrapper">
      <textarea 
        v-model.trim="textareaText"
        class="textarea"
        placeholder="Please enter task description" 
        :class="{'textarea_done text-gray': todo.done}"
        :disabled="todo.done"
      ></textarea>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return { textareaText: this.todo.title }
  },
  methods: {
    confirmTask() {
      this.$store.dispatch('setTask', {title: this.textareaText, date: Date.now(), done: false})
    },
    async destroyTask() {
      await this.$store.dispatch('deleteTask', this.todo._id)
      await this.$store.dispatch('getTask')
      this.$router.push('/')
    },
    async completeTask() {
      await this.$store.dispatch('completeTask', {title: this.textareaText, done: !this.todo.done, _id: this.todo._id})
      await this.$store.dispatch('getTask')
    },
    formattedDate(date) {
      return `${new Date(date).getDate()} ${new Date(date).toLocaleString('en', {month: 'short'})} ${new Date(date).getFullYear()}`
    }
  },
}
</script>

<style scoped lang="scss">
p {
  margin: 0;
}
 
button:disabled {
  cursor: not-allowed;
}

button {
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  padding: 0;
}
.delete-img {
  width: 24px;
  height: 24px;
  background-image: url('@/assets/images/deletew.svg');
}
.delete-img:hover {
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('@/assets/images/deleteb.svg');
}
.confirm-img {
  width: 24px;
  height: 24px;
  background-image: url('@/assets/images/doneb.svg');
}
.edit-img {
  width: 24px;
  height: 24px;
  background-image: url('@/assets/images/editw.svg');
}
.edit-img:hover {
  background-image: url('@/assets/images/editb.svg');
}
.textarea {
  &__wrapper {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #BBBBBB;
  }
  &__wrapper:hover,
  &__wrapper:active {
    border-bottom: 2px solid #889DEA;
  }
}
.textarea {
  width: 100%;
  max-width: 535px;
  border: none;
  outline: none;
  resize: none;
  height: 32px;
  padding: 15px 26px 0 26px;
  display: inline-table;

  color: #3F3F3F;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  &_done {
    text-decoration: line-through;
    text-decoration-color: #BBBBBB;
    cursor: not-allowed;
  }
}
.text-gray {
  color: #BBBBBB;
}
.textarea::placeholder {
  color: #BBBBBB;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
.textarea::-webkit-scrollbar {
  width: 0;
}
.task {
  padding: 0 30px;
  max-width: 656px;
  margin: 0 auto;
}
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__date {
    color: #889DEA;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    @media (min-width: 769px){
      font-size: 14px
    }
  }
  &__item {
    display: flex;
    align-items: center;
  }
  &__box {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    border: 1px solid #889DEA;
    border-radius: 3px;
    &_done {
      background-image: url(@/assets/images/boxdone.svg);
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: 3px;
      background-color: #889DEA;
    }
  }
  &__box:hover {
    border: 1px solid #889DEA;
    background-image: url(@/assets/images/boxdone.svg);
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 3px;
    background-color: #889DEA;
  }
  &__menu {
    display: flex;
    align-items: center;
  }
  &__change {
    margin-right: 8px;
  }
}
</style>