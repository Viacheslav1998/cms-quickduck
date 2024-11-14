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

          <label>Обновить заполнение <span style="color: black; font-size: 12px;">(возможности ограничены)</span></label>
          <textarea class="area-c" v-model="formData.desk" name="desk"></textarea>

          <br>
          <button class="custom-b green-b" type="submit">Cохрани́ть</button>
        </form>
        <div style="border: 1px solid black; margin: 20px 0;"></div>
        <b style="color: white;">Изменить картинку</b>
        <form @submit.prevent="test2">
          <label>проверка для формы</label>
          <input type="text" v-model="formImage.path_to_image">
          <br>
          <button class="custom-b green-b" type="submit">Cохрани́ть</button>
        </form>
        <div style="border: 1px solid black; margin: 20px 0;"></div>
        <button class="custom-b red-b" type="button" @click="close">Закры́ть</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'EditPopup',
  props: {
    isVisible: Boolean, 
    newsItem: Object,
  },

  emits: ['close', 'update', 'testUpd'],

  setup(props, { emit }) {
    const formData = ref({
      name: '', 
      title: '',
    });

    const formImage = ref({
      path_to_image: '',
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

    const test2 = () => {
      console.log('current event work')
    }

    return {
      formData, 
      close, 
      submitForm,
      test2,
      formImage
    };
  },
});

</script>

<style scoped>
.popup-overlay {
  overflow-y: auto;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(84, 81, 92, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color :#EB5C52;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

form input {
  background-color: whitesmoke;
  border: 2px solid white;
  border-radius: 6px;
  padding: 4px;
  margin-bottom: 10px;
}

.area-c {
  color: rgb(255, 255, 255);
  background-color: rgb(68, 68, 68);
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
}

.custom-b {
  border: none;
  margin: 4px;
  transition: all 0.2s ease;
}
.green-b {
  background-color: rgb(70, 80, 55);
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.green-b:hover {
  background-color: greenyellow;
  color: black;
}

.red-b {
  background-color: rgb(183, 50, 20);
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.red-b:hover {
  background-color: gold;
  color: black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>