<template>
  <div class="container">
    <div class="space">
      <h1>Конкретно этот блок дочерний</h1>
      <p>Отсюда будут выводиться нужные данные</p>
      <i>это всего лишь понмиание emits</i><br><br>
      <button type="button" class="btn btn-warning" @click="sendDataToParent">Warning</button>
    </div>
  </div>
</template>

<script>
import data_1 from '/public/data/data_1.json';

export default {
  name: 'TestSubmit',
  emits: ['click'],
  methods: {
    async sendDataToParent() {
      try {
        const response = await fetch('/data/data_1.json');
        if (!response.ok) {
          throw new Error (`Ошибка Загрузки: ${response.statusText}`);
        }
        const data = await response.json()
        this.$emit('click', data);
      } catch (error) {
        console.error('Ошибка с загрузкой данных:', error)
      }
    },

    danger() {
      this.$emit('click', {message: 'привет ты получил этот текст'});
    }
  },
}
</script>

<style spaces>
.space {
  padding: 20px;
  background-color: blueviolet;
  color: white!important;
}
</style>