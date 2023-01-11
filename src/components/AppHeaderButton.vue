<template>
  <button :class="{ 'clickedbtn': clicked }" class="mainbtn" @click="clickedBtn">
    <div class="mainbtn__square">
      <div class="square__item">
        <div div class="linef"></div>
        <div class="lines"></div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    clickedBtn() {
      this.clicked = true
      this.$store.state.taskList.unshift({})

      setTimeout(() => {
        this.clicked = false
      }, 800)
    }
  }
}
</script>

<style scoped lang="scss">
button {
  padding: 0;
  margin: 0;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
.mainbtn {
  width: 64px;
  height: 64px;
  background: #88EAA9;
  border-radius: 10px;
  transform: rotate(45deg);
  transition: 0.3s ease box-shadow;
  &__square {
    width: 48px;
    height: 48px;
    position: relative;
    width: 48px;
    height: 48px;
    left: 8px;
  }
}
.mainbtn:hover {
  box-shadow: 0 0 15px #88EAA9;
}

@keyframes clickedbtn {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(315deg);
  }
}
.clickedbtn {
  animation: clickedbtn 0.8s infinite
}



.square__item {
  display: flex;
  position: relative;
}
.linef {
  content: '';
  background: white;
  width: 38px;
  border: 1px solid #FFFFFF;
  border-radius: 2px;
  position: absolute;
  transform: rotate(45deg);
  top: 23px;
  left: 5px;
}
.lines {
  position: absolute;
  content: '';
  background: white;
  width: 38px;
  border: 1px solid #FFFFFF;
  border-radius: 2px;
  transform: rotate(135deg);
  top: 23px;
  left: 5px;
}
</style>