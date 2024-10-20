<template>
  <div class="news-form">
    <h2>Добавить новость</h2>

    <div v-if="responseMessage" class="alert" :class="responseStatus">{{ responseMessage }}</div>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Название</label>
        <input type="text" v-model="name" id="name" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">Заголовок</label>
        <input type="text" v-model="title" id="title" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="desk" class="form-label">Содержимое</label>
        <textarea v-model="desk" id="desk" class="form-control" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const title = ref('');
const desk = ref('');

const responseMessage = ref('');
const responseStatus = ref('');

const submitForm = async () => {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('title', title.value);
  formData.append('desk', desk.value);

  try {
    const response = await fetch('http://quickduck.com/api/news', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    // Проверяем статус ответа и выводим сообщение
    if (data.status === 'success') {
      responseMessage.value = data.message;
      responseStatus.value = 'alert-success';
    } else {
      responseMessage.value = data.message;
      responseStatus.value = 'alert-danger';
    }

    // Очистка формы после успешной отправки
    name.value = '';
    title.value = '';
    desk.value = '';

  } catch (error) {
    responseMessage.value = 'Ошибка при отправке данных.';
    responseStatus.value = 'alert-danger';
  }
};
</script>

<style scoped>
.news-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: grey;
}
.alert {
  margin-bottom: 20px;
}
</style>
