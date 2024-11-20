<template>
  <transition name="fade">
    <div v-if="isVisible" class="popup-overlay">
      <div class="popup-content">
        <div class="d-flex flex-column">
          <h3>Редактировать Новость</h3>
          <div style="border: 1px solid sandybrown; margin: 0 0 20px 0;"></div>
          <form @submit.prevent="submitForm">
            <div class="p-2">
              <label>Название: </label><br>
              <input v-model="formData.name" required />
            </div>
            <div class="p-2">
              <label>Заголовок: </label><br>
              <input v-model="formData.title" required />
            </div>
            <div class="p-2">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Изменить описание (возможности ограничены)</label>
                <textarea v-model="formData.desk" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <button class="custom-b1 green-b" type="submit">Cохрани́ть</button>
          </form>
        </div>
        <div style="border: 1px solid sandybrown; margin: 30px 0 20px 0;"></div>
        <h3 style="color: white;">Изменить картинку</h3>
        <div class="d-flex flex-column">
          <form @submit.prevent="test2">
            <div class="p-2">
              <label style="font-size: 16px;">обновить текущее изображение</label><br>
              <input type="file" @change="handleFileUpload" required /><br>
              <button class="custom-b2 green-b" type="submit">Обновить картинку</button>
            </div>
            <br>
          </form>
        </div>
        <p 
          v-if="uploadStatus"
        >
          {{ uploadStatus }}
        </p>
        <div style="border: 1px solid sandybrown; margin: 0 0 20px 0;"></div>
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

    const imageFile = ref(null);
    const uploadStatus = ref('');

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
    };

    const handleFileUpload = (event) => {
      imageFile.value = event.target.files[0];
    };

    const uploadImage = async () => {
      if (!imageFile.value) {
        uploadStatus.value = 'а ты выбрал файл?';
        return;
      }

      const formDataImage = new FormData();
      formDataImage.append('image', imageFile.value);

      try {
        const response = await fetch(`http://quickduck.com/api/news/${id}/update-image`, {
          method: 'POST',
          body: formDataImage
        });

        if (!response.ok) throw new Error('Ошибка загрузки изображение');

        const result = await response.json();
        uploadStatus.value = result.message || 'изображение успешно загружено';
      } catch (error) {
        uploadStatus.value = `Ошибка: ${error.message}`;
      }
    };

    return {
      formData, 
      close, 
      submitForm,
      test2,
      formImage,
      handleFileUpload,
      uploadImage,
      uploadStatus
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
  background-color :#26262f;
  padding: 20px;
  border-radius: 8px;
  width: 800px;
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

.custom-b1, .custom-b2 {
  border: none;
  transition: all 0.2s ease;
}

.custom-b1 {
  margin-left: 7px;
}
.custom-b2 {
  margin: 10px 0 -20px 0;
}


.custom-b {
  margin-left: 20px!important;
}
.custom-b {
  border: none;
  margin: 4px 0 4px 7px;
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