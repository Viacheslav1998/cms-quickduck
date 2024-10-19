<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('');
    const title = ref('');
    const desk = ref('');

    const submitForm = async () => {
      try {
        const formData = {
          name: name.value,
          title: title.value,
          desk: desk.value
        };

        const response = await fetch('http://quickduck/news', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Success:', data);
        } else {
          console.error('Error:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      name,
      title,
      desk,
      submitForm
    };
  }
};
</script>

<template>
  <div class="container">
    <h2>Добавить Новость</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nameNews">Название Новости</label>
        <input v-model="name" type="text" id="nameNews" />
      </div>
      <div class="form-group">
        <label for="titleNews">Описание Новости</label>
        <input v-model="title" type="text" id="titleNews" />
      </div>
      <div class="form-group">
        <label for="deskNews">Текст Новости</label>
        <textarea v-model="desk" id="deskNews"></textarea>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>
