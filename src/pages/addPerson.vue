<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'addPerson',

});
</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Добавление пользователя</h2>
    </div>
    
    <p>просто потому что тут была ошибка ты решил ничего не показывать да ?</p>

  </div>
</template>

<style scoped>
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