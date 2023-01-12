<template>
  <div class="wrap">
    <div class="main">
      <h1 class="main__title">To Do List</h1>
      <div class="tasks">
        <div class="main__tasks task">
          <p class="task__title">Scope</p>
          <p class="task__counter">{{ scope }}</p>
        </div>

        <div class="main__tasks task">
          <p class="task__title">Active</p>
          <p class="task__counter">{{ todoCountActive }}</p>
        </div>

        <div class="main__tasks task">
          <p class="task__title">Succsessful</p>
          <p class="task__counter">{{ todoCountSuccsessful }}</p>
        </div>
      </div>
    </div>
    <div class="rows">
      <div class="rows-ft"></div>
      <div class="rows-sd"></div>
    </div>
    <div class="task__btn">
      <app-header-button></app-header-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeaderButton from './AppHeaderButton.vue';

export default {
  components: {
    AppHeaderButton
  },
  computed: {
    ...mapGetters(['scope', 'todoCountActive', 'todoCountSuccsessful'])
  }
}
</script>

<style scoped lang="scss">
.rows {
  position: absolute;
  width: 100%;
  bottom: 0;
  background: linear-gradient(to right, #889DEA 50%, #fff 50%);
  &-ft {
    width: 100%;
    height: 30px;
    background: #889DEA;
    border-bottom-right-radius: 30px;
  }
  &-sd {
    width: 100%;
    height: 30px;
    background: white;
    border-top-left-radius: 30px;
  }
}

p {
  margin: 0;
  color: white;
}
.task__btn {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}
.wrap {
  background: #889DEA;
  height: 248px;
  max-height: 248px;
  position: relative;
  margin-bottom: 56px;
}
.main {
  margin: 0px 56px;
  &__title {
    margin: 0;
    padding-top: 8px;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: white;
    margin-bottom: 32px;
  }
}
.tasks {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  max-width: 656px;
  margin: 0 auto;
  max-height: 72px;
}
.task {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 125px;
  max-width: 145px;
  &__title {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  &__counter {
    font-weight: 600;
    font-size: 56px;
    line-height: 56px;
  }
}
</style>