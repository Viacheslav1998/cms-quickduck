<script>
export default {
  data() {
    return {
      show: true,
      showScd: '',
      attention: 'это сообщение будет выведено',
      message: '',
      progress: 0,
      interval: null,
    }
  },
  methods: {
    test() {
      console.log('test123testmessage')
    },
    base() {
      setTimeout(() => {
        this.attention = 'текст изменен'
        this.message = 'сообщение было сгенерировано'
      }, 1000)
    },
    showMessage() {
      setTimeout(function() {
        this.test()
      }.bind(this), 1000)
    },
    runAttention() {
      setTimeout(() => {
        this.show = false
      }, 1200)
    },
    showBlockAttention() {
      setTimeout(() => {
        this.showScd = true
      }, 2000)
    },
    startLoading() {
      this.progress = 0
      this.interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 0.2;
        } else {
          clearInterval(this.interval)
          alert('загрузка завершена') 
        }
      }, 100)
    },
    runProgress() {
      setTimeout(() => {
        this.startLoading()
      }, 1400)
    }
  }, 
  mounted() {
    this.base()
    this.showMessage()
    this.runAttention()
    this.showBlockAttention()
    this.showScd = false
    this.runProgress();
  }
}
</script>

<template>

<transition name="slide-fade">
  <div 
    class="box-frame"
    v-if="showScd"
  >

    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    <button 
      @click="show = !show"
      class="frm"
    >
      отобразить данные или скрыть их
    </button>
    <transition name="slide-fade">
      <p 
        v-if="show"
        style="color: white;"
        class="ph"
      >Привет</p>
    </transition>
  </div>
</transition>

<br>
<div class="spaceTestMessage">
  <div class="spptxt" style="color: white;">
    <p>{{ attention }}</p>
    <p>{{ message }}</p>
  </div>
</div>

</template>

<style>
.progress-bar {
  margin: 20px 1px;
  background-color: rgb(231, 167, 50)!important;
  height: 2px;
  border-radius: 5px;
  width: 0;
  transition: width 1s ease;
}
.frm {
  background-color: black;
  color: red;
  outline: none;
  border: none; 
  transition: all 0.5s ease;
  border-radius: 20px;
  padding: 10px;
}
.frm:hover {
  background-color: rgb(40, 40, 40);
}
.ph {
  margin-top: 20px;
  border-radius: 10px;
  padding: 5px;
  position: relative;
  width: 20%;
  background-color: blueviolet;
}
.box-frame {
  position: relative;
  top: 1px;
  background-color: brown;
  padding: 10px;
  margin: 20px auto;
  max-width: 1100px;
  height: 400px;
  border-radius: 18px;
}

.spaceTestMessage {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 18px;
  background-color: blueviolet;
}

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