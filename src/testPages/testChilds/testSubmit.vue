<template>
  <div class="container">
    <div class="space">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <i>{{ tiny }}</i>
      <p>{{ testMessage }}</p>
      <button type="button" class="btn btn-warning" @click="sendDataToParent">Warning</button>
    </div>
    <div style="padding: 10px 0;"></div>
    <div class="test-container">
      <button type="button" class="btn btn-danger" @click="testAttention">Тестовая кнопка</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testSubmit',
  emits: ['click'],
  props: {
    testMessage: {
      type: String,
      required: true,
      default: 'если ты ничего не передашь к родителям то увидишь данный месадж',
    },
  },
  data() {
    return {
      title: 'Конкретно этот блок дочерний',
      description: 'Отсюда будут выводится нужные данные',
      tiny: 'это всего лишь для понимания Emits | Props | Data',
    }
  },
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