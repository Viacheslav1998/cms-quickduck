<script>
export default {
  data() {
    return {
      show: true,
    }
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