<script>
import { defineComponent, ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'AddNews',
  components: {
    'editor': Editor
  },
  setup() {
    const name = ref('');
    const title = ref('');
    const desk = ref('');
    const path_to_image = ref(null);
    const name_tag = ref('');

    const responseMessage = ref('');
    const responseStatus = ref('');

    const onFileChange = (event) => {
      path_to_image.value = event.target.files[0];
    };

    const submitForm = async () => {

      // validation
      if(!name.value || !title.value || !desk.value) {
        responseMessage.value = 'Все поля обязательны для заполнения';
        responseStatus.value = 'alert-danger';
        return;
      }

      let imageUrl = '';
      if(path_to_image.value) {
        const imageFormData = new FormData();
        imageFormData.append('path_to_image', path_to_image.value)
        
        try {
          const uploadResponse = await fetch('http://quickduck.com/api/upload-image', {
            method: 'POST',
            body: imageFormData
          });

          const uploadData = await uploadResponse.json();
          if (uploadData.status === 'success') {
            imageUrl = uploadData.url;
          } else {
            Swal.fire({
              title: 'Ошибка загрузки изображения',
              text: uploadData.message,
              icon: 'error',
              configmButtonText: 'Закрыть',
            });
            return;
          }
        } catch (error) {
          responseMessage.value = 'Ошибка при загрузке изображения.';
          responseStatus.value = 'alert-danger';
          return;
        }
      }

      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('title', title.value);
      formData.append('desk', desk.value);
      formData.append('path_to_image', imageUrl);

      try {
        const response = await fetch('http://quickduck.com/api/news', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if(data.status === 'success') {
          Swal.fire({
            title: 'Создано !',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Закрыть'
          })
        } else {
          Swal.fire({
            title: 'Ошибка, что то пошло не так!',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'Закрыть'
          })
        }

        // clear form 
        name.value = '';
        title.value = '';
        desk.value = '';
        path_to_image.value = 'null';

      } catch (error) {
        responseMessage.value = 'Ошибка при отправке данных.';
        responseStatus.value = 'alert-danger';
      }
    };

    return {
      name,
      title,
      desk,
      path_to_image,
      name_tag,
      responseMessage,
      responseStatus,
      onFileChange,
      submitForm
    };
  }
});
</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Добавить Новость</h2>
    </div>
    <div class="custom-space">
      <form @submit.prevent="submitForm">

        <div class="form-group">
          <label for="name">Названия Новости</label>
          <input v-model="name" type="text" class="form-control" id="name" aria-describedby="name" required>
          <small id="name" class="form-text text-muted">То что привлечет внимание</small>
        </div>  

        <div class="form-group">
          <label for="name">Теги - пиши через запятую</label>
          <input v-model="name_tag" type="text" class="form-control" id="tags" aria-describedby="tags" required>
          <small id="tags" class="form-text text-muted">По тегам можно быстро найти или сгруппировать дынные</small>
        </div>  

        <div class="form-group">
          <label for="path_to_image">Картинку загрузить</label>
          <input type="file" name="path_to_image" class="form-control" id="path_to_image" aria-describedby="path_to_image" @change="onFileChange">
          <small id="path_to_image" class="form-text text-muted">Главное изображение</small>
        </div>

        <div class="form-group">
          <label for="title">Описание Новости</label>
          <input v-model="title" type="title" class="form-control" id="title" required>
          <small id="title" class="form-text text-muted">Описание должно быть не большим - достаточно 255 символов - коротко о главном</small>
        </div>
        <div>
          <editor
            v-model="desk"
            api-key="0dlmagrtkkct366u3iv3bopx8ha1foy0mqtudu6p0tb6p0wr"
            :init="{
              toolbar_mode: 'sliding',
              plugins: [
                // Core editing features
                'anchor', 'code', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
              ],
              toolbar: 'code | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
            }"
            initial-value="Давай пиши !"
          />
        </div>

        <div class="space"></div>
        <button type="submit" class="btn btn-danger">Создать</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.custom-space {
  margin: 50px auto;
  padding: 20px;
  border: 1px solid grey;
}
.space {
  width: 100%;
  height: 20px;
}
.name-page {
  margin-top: 20px;
  padding: 20px;
  color: silver;
  border: 1px solid grey;
}

</style>