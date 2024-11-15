<template>
  <div class="container">
    <div class="space">
      <h1>Конкретно этот блок дочерний</h1>
      <p>Отсюда будут выводиться нужные данные</p>
      <i>это всего лишь понмиание emits</i><br><br>
      <button type="button" class="btn btn-warning" @click="sendDataToParent">Warning</button>
    </div>
    <div class="test-container">
      <button type="button" class="btn btn-danger" @click="testAttention">Тестовая кнопка</button>
    </div>
  </div>
</template>

<script>
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
    },

    testAttention: () => {
      console.log('это тестовая кнопка - которая выведет данные только того что находится в данном компоненте');
    }
  },
}
</script>

<style scoped>
.space {
  padding: 20px;
  background-color: blueviolet;
  color: white!important;
}
</style>