<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'addPerson',
});

</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Добавление пользователя - (ручная раздача привелегий)</h2>
    </div>

    <div class="custom-space">
      <form @submit.prevent = "submitPerson">

        <div class="form-group">
          <label for="name">Имя пользователя</label>
          <input v-model="name" type="name" class="form-control" id="name" aria-describedby="name" required>
          <small id="name" class="form-text text-muted">хм...</small>
        </div> 

        <div class="form-group">
          <label for="path_to_image">Картинка пользователя</label>
          <input type="file" name="path_to_image" class="form-control" id="path_to_image" aria-describedby="path_to_image" @change="onFileChange">
          <small id="path_to_image" class="form-text text-muted">Картинка пользователя</small>
        </div>

        <div class="space"></div>
        <button type="submit" class="btn btn-danger">Добавить пользователя</button>
      </form>
    </div>

    <div class="custom-space">
      <p style="color: white; margin-top: 10px;">Это нужно для того что бы просто отработать пользователя - ему не нужно самому регистрироватся он должен просто получить доступ к определенным вещам. Управление привелегиями пользователя через данную страницу</p>
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
.custom-space {
  margin: 50px auto;
}
.news-box {
  margin: 20px 0;
  color: white;
  background-color: #3C3C3C;
}

.imagen {
  background-color: #837969;
  padding: 5px 5px 5px 5px;
  margin-top: 2px;
  width: 100px;
  height: 100px;
}
.imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-news {
  margin: 0 15px;}
.move {
  padding: 0 20px;}
/* links */
.danger {
  color: #d65249;
  background-color: transparent;
  border: none;
  font-weight: bold;
}
.danger:hover {color:red; }
.edt {
  color: #E6BF0B;
  background-color: transparent;
  border: none;
  font-weight: bold;
}
.edt:hover { color: #F07427;}
.link { color: silver;}
.link:hover { color: white;}
/* end links */
.m-top {margin-top: 20px;}
/* translate */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/*end-translate */
</style>