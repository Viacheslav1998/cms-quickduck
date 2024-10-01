<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Главная</h2>
    </div>

    <div>
      <p>тут можно установить какой то виджет
        время. календарь. погоду.место нахождение курс валют
      </p>
    </div>

  </div>
</template>

<style scoped>
.name-page {
  margin-top: 20px;
  padding: 20px;
  color: silver;
  border: 1px solid grey;

}
</style>