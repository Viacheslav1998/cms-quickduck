<template>
  <div class="container">
    <div class="bg-color space">
      <h1>Получение статических данных</h1>
      <b>Тестовая страница - так как и по секрету - это тестовый проект</b>
    </div>
    <div class="bg-color-sky space">
      <h3>функция получения данных</h3>
    </div>
  </div>
  <div>
    <TestSubmit 
      @click="danger"
    />
  </div>
</template>

<script>
import TestSubmit from './testChilds/TestSubmit.vue';

export default {
  name: 'testStaticData',
  components: { TestSubmit },
  methods: {
    danger(data) {
      console.log('входящее: ', data.message);
    }
  },
}
</script>

<style scoped>
.bg-color {
  background-color: cornflowerblue;
}
.bg-color-sky {
  background-color: deepskyblue;
}
.space {
  margin: 20px 0;
  padding: 20px;
}
</style>