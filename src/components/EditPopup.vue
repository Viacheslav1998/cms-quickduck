<template>
  <transition name="fade">
    <div v-if="isVisible" class="popup-overlay">
      <div class="popup-content">
        <h3>Редактировать Новость</h3>
        <form @submit.prevent="submitForm">
          <label>Название: </label>
          <input v-model="FormData.name" required />

          <label>Заголовок: </label>
          <input v-model="FormData.title" required />

          <label>Путь к изображению: </label>
          <input v-model="FormData.path_to_image" required />

          <button type="submit">Сохранить</button>
          <button type="button" @click="close">Закрыть</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent ({
  props: {
    isVisible: Boolean,
    newsItem: Object,
  },
  emits: ['close', 'update'],
  
});

</script>