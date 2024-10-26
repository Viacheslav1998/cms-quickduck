<template>
  <div id="app">
    <h1>Пример уведомления</h1>
    <button @click="showAlert">Показать уведомление</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'App',
  methods: {
    showAlert() {
      Swal.fire({
        title: 'Уведомление!',
        text: 'Это простое уведомление.',
        icon: 'info',
        confirmButtonText: 'Закрыть',
      });
    },
  },
};
</script>

<style>
/* Ваши стили */
</style>
