<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<template>

  <div class="container">
    <h1 class="logo">CMS</h1>
    <h3 class="desk-logo">Управление - Quickduck - сайтом</h3>
  </div>

   <div class="container navi">
      <nav class="flex">
        <RouterLink to="/" class="custom-href">Главная</RouterLink>
        <RouterLink to="/news" class="custom-href">Добавить новость</RouterLink>
        <RouterLink to="/gardens" class="custom-href">Управления новостями</RouterLink>
        <RouterLink to="/tech" class="custom-href">Добавить пользователя</RouterLink>
        <RouterLink to="/about" class="custom-href">Управление пользователями</RouterLink>
      </nav>
   </div>
</template>

<style scoped>
  .logo{
    margin: 10px auto 10px auto;
    padding: 10px;
    background-color: #a53131;
    color: white;
    font-weight: bold;
  }
  .desk-logo {
    margin: 10px auto 10px auto;
    padding: 10px;
    background-color: rgb(96, 96, 96);
    color: white;
    font-weight: 100;
  }
  .navi {
    margin-top: 20px;
  }
  .custom-href {
    padding: 10px;
    margin: 5px;;
    color: #ffffff;
    text-decoration: none;
    border-radius: 10px;
    background-color: rgb(60, 60, 60);
  }
  .custom-href:hover {
    border-radius: 10px;
    background-color: rgb(86, 85, 85);
  }

</style>