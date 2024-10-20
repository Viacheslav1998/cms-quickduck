<template>
  <div class="news-form">
    <h2>Добавить новость</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Заголовок</label>
        <input type="text" v-model="title" id="title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Содержимое</label>
        <textarea v-model="content" id="content" class="form-control" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
    <div v-if="responseMessage" class="mt-3">
      <p>{{ responseMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');
const responseMessage = ref('');

const submitForm = () => {
  const data = {
    title: title.value,
    content: content.value,
  };

  fetch('http://quickduck/api/news', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Сеть не отвечает');
    }
    return response.json();
  })
  .then(data => {
    responseMessage.value = 'Успех: ' + JSON.stringify(data);
    // Очистить поля после успешной отправки
    title.value = '';
    content.value = '';
  })
  .catch((error) => {
    console.error('Ошибка:', error);
    responseMessage.value = 'Ошибка: ' + error.message;
  });
};
</script>

<style scoped>
.news-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
