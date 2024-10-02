<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Add',
})

</script>

<template>
  <div class="container">
    <div class="title"> 
      <h2>Добавить новость</h2>
    </div>
    <div class="space-form">

      <form>
        <div class="form-row">

          <div class="col-md-8 mb-3">
            <label for="namePost">Название поста</label>
            <input type="text" class="form-control" id="namePost" placeholder="введите название новости*" required>
            <div class="valid-feedback">
              Хорошо!
            </div>
            <div class="invalid-feedback">
              Это поле обязательно!
            </div>
          </div>

        </div>
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

</style>