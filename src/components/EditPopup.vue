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
                <label for="description">Изменить описание (возможности ограничены)</label>
                <textarea v-model="formData.desk" class="form-control" id="description" rows="3"></textarea>
              </div>
            </div>
            <button class="custom-b1 green-b" type="submit">Cохрани́ть</button>
          </form>
        </div>
        <div style="border: 1px solid sandybrown; margin: 30px 0 20px 0;"></div>
        <h3 style="color: white;">Изменить картинку</h3>
        <div class="d-flex flex-column">
          <form @submit.prevent="uploadImage">
            <div class="p-2">
              <label style="font-size: 16px;">обновить текущее изображение</label><br>
              <input 
                type="file"
                name="path_to_image"
                @change="handleFileChange"
              />
              <br>
              <div v-if="uploadedPath">
                <p style="color: wheat;">{{ uploadedPath }}</p>
              </div>
              <button class="custom-b2 green-b" type="submit">Обновить картинку</button>
            </div>
            <br>
          </form>
        </div>
   
        <div style="border: 1px solid sandybrown; margin: 0 0 20px 0;"></div>
        <button class="red-custom red-b" type="button" @click="close">Закры́ть</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import Swal from 'sweetalert2';


export default defineComponent({
  name: 'EditPopup',
  props: {
    isVisible: Boolean, 
    newsItem: Object,
  },
  emits: [
    'close',
    'update',
  ],
  setup(props, { emit }) {
    // form 1 data
    const formData = ref({
      name: '', 
      title: '',
      desk: '',
    });

    const path_to_image = ref(null);
    const uploadedPath = ref('');

    const handleFileChange = (event) => {
      path_to_image.value = event.target.files[0];
      uploadedPath.value =  "Файл для загрузки: " + path_to_image.value.name;
    }

    const uploadImage = async() => {
      if (!path_to_image.value) {
        showError('ты не выбрал картинку');
        return;
      }

      const formData = new FormData();
      formData.append('path_to_image', path_to_image.value);

      try {
        const response = await fetch('http://quickduck.com/api/upload-image', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          showSuccess('Успешно обновлено !');
        } else {
          const error = await response.json();
          console.log(error.error || 'ошибка при загрузке файла');
        }
      } catch (err) {
        console.error('Ошибка сети: ', err);
        console.log('ошибка сети. Проверь подключение.');
      }
    };

    // attention error
    function showError(message) {
      Swal.fire({
        title: 'Ошибка',
        text: message || 'что то пошло не так',
        icon: 'error',
        confirmButtonText: 'Закрыть',
      });
    }

    // attention success
    function showSuccess(message) {
      Swal.fire({
        title: 'Успех',
        text: message || 'данные успешно обновлены!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }

    watch(
      () => props.newsItem,
      (newVal) => {
        if (newVal) {
          formData.value = { ...newVal };
        }
      },
      { immediate: true }
    );

    // open/close poppup
    const close = () => emit('close');

    // only update text
    const submitForm = () => {
      emit('update', { ...formData.value, id: props.newsItem?.id });
      close();
    };

    return {
      formData, 
      close, 
      submitForm,
      path_to_image,
      uploadedPath,
      handleFileChange,
      uploadImage
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

.attention {
  color: rgb(210, 150, 98);
  padding: 20px 0 0px 10px;
}
.attention b {
  border-radius: 7px;
  padding: 10px;
  background-color: #343440;;
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

.custom-b1, .custom-b2, .red-custom {
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
  background-color: rgb(120, 102, 86);
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: blanchedalmond;
}
.green-b:hover {
  background-color: rgb(210, 150, 98);
  color: white;
}
.red-custom {
  margin-left:8px;
}
.red-b {
  background-color: #a13f30;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.red-b:hover {
  background-color: #6e2c22;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>