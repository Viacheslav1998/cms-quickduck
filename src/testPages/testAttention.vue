<script>
export default {
  data() {
    return {
      show: true,
      attention: 'это сообщение будет выведено',
      message: ''
    }
  },
  methods: {
    test() {
      console.log('123')
    },
    base() {
      setTimeout(() => {
        this.attention = 'текст изменен'
        this.message = 'сообщение было сгенерировано'
      }, 1000);
    },
    showMessage() {
      setTimeout(function() {
        this.test()
      }.bind(this), 1000)
    },
    runAttention() {
      setTimeout(() => {
        this.show = false;
      }, 1200);
    }
  }, 
  mounted() {
    this.base()
    this.showMessage()
    this.runAttention();
  }
}
</script>

<template>

<button @click="show = !show">
  отобразить данные или скрыть их
</button>
<transition name="slide-fade">
  <p v-if="show" style="color: white;">Привет</p>
</transition>
<br>
<div class="spptxt" style="color: olivedrab;">
  <p>{{ attention }}</p>
  <p>{{ message }}</p>
</div>



</template>

<style>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>