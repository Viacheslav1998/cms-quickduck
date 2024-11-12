<template>
  <transition name="fade">
    <div v-if="isVisible" class="popup-overlay">
      <div class="popup-content">
        <h3>Редактировать Новость</h3>
        <form @submit.prevent="submitForm">
          <label>Название: </label>
          <input v-model="formData.name" required />

          <label>Заголовок: </label>
          <input v-model="formData.title" required />

          <label>Путь к изображению: </label>
          <input type="file" name="path_to_image" class="form-control" id="path_to_image" aria-describedby="path_to_image" @change="onFileChange">

          <button type="submit">Сохранить</button>
          <button type="button" @click="close">Закрыть</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    isVisible: Boolean, 
    newsItem: Object,
  },
  emits: ['close', 'update'],
  setup(props, { emit }) {
    const formData = ref({
      name: '', 
      title: '',
      path_to_image: ''
    });

    //upd data
    watch(
      () => props.newsItem,
      (newVal) => {
        if (newVal) {
          formData.value = { ...newVal };
        }
      },
      { immediate: true }
    );

    const close = () => emit('close');
    const submitForm = () => {
      emit('update', { ...formData.value, id: props.newsItem.id });
      close();
    };

    return {
      formData, 
      close, 
      submitForm,
    };
  },
});

</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>