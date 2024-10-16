<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'News',
})

</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Управление новостями</h2>
    </div>
    <div class="custom-space">
      <div class="news-box">
        <div class="news d-flex flex-row">
          <div class="imagen">
            <img src="/public/images/palm.jpg" alt="attention">
          </div>
          <div class="content-news">
            <h3>Названия новости</h3>
            <p>и какое то описание из каких то слов что бы было просто интерессное что то для чего то</p>
          </div>
          <div class="move">
            <a href="#">Перейти к новости</a>
          </div>
        </div>
      </div>
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
.custom-space {
  margin: 50px auto;
  padding: 20px;
  border: 1px solid grey;
}
.news-box {
  color: white;
}
</style>