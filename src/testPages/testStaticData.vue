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
    <testSubmit 
      @click="sendDataToParent"
      :testMessage="textTest"
    />
  </div>
</template>

<script>
import testSubmit from './testChilds/TestSubmit.vue';

export default {
  name: 'testStaticData',
  components: { testSubmit },
  data() {
    return {
      textTest: 'этот текст был передан через дочерний компонент',
    }  
  },
  methods: {
    sendDataToParent(data) {
      console.log('входящее: ', data);
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