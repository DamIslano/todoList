<template>
  <button class="button" @click="newTask">
    <div class="button__plus"></div>
    <p class="button__text">Create new task</p>
  </button>
</template>

<script>
export default {
  methods: {
    newTask() {
      this.$store.state.taskList.unshift({})
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  width: 208px;
  height: 48px;
  padding: 8px 16px;
  background: #88EAA9;
  border: none;
  outline: none;
  border-radius: 11px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  cursor: pointer;
  transition: 0.3s ease box-shadow;

  &__plus {
    width: 24px;
    height: 24px;
    background-image: url('@/assets/images/whiteplus.svg');
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 8px;
  }
  &__text {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
}
.button:hover {
  box-shadow: inset 1px 1px 5px #4dac6e;
}
</style>