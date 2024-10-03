<script>
import { defineComponent, ref } from 'vue';
import 'trix';
import 'trix/dist/trix.css';

export default defineComponent({
  name: 'Add',
  setup() {
    const content = ref('');
    const title = ref(''); 
    const description = ref(''); 

    const submit = () => {
      console.log('Название:', title.value);
      console.log('Описание:', description.value);
      console.log('Содержимое:', content.value); 
    };

    return {
      content,
      title,
      description,
      submit,
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="title"> 
      <h2>Добавить новость</h2>
    </div>
    <div class="space-form">
      <form @submit.prevent="submit">
        <div class="form-row">
          <div class="col-md-8 mb-3">
            <label for="namePost">Название Новости</label>
            <input type="text" class="form-control" id="namePost" placeholder="введите название новости*" v-model="title" required>
            <div class="valid-feedback">
              Хорошо!
            </div>
            <div class="invalid-feedback">
              Это поле обязательно!
            </div>
          </div>

          <div class="col-md-8 mb-3">
            <label for="nameDesk">Описание Новости</label>
            <input type="text" class="form-control" id="nameDesk" placeholder="введите описание новости*" v-model="description" required>
            <div class="valid-feedback">
              Хорошо!
            </div>
            <div class="invalid-feedback">
              Это поле обязательно!
            </div>
          </div>
          <div class="cstm">
            <label for="editorContent"><span style="color: silver; font-weight: bold;">Контент</span></label>
            <trix-editor input="editorContent"></trix-editor>
            <input id="editorContent" type="hidden" v-model="content" />
          </div>
        </div>
        <button type="submit" class="btn btn-danger">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid grey;
}

.space-form {
  margin: 20px auto;
  padding: 20px;
  background-color: rgb(50, 50, 50);
}

.cstm {
  border-radius: 5px;
  color: rgb(123, 118, 118)!important;
  margin: 20px 0;
  padding: 20px!important;
  background-color: rgb(255, 255, 255);
}
</style>
