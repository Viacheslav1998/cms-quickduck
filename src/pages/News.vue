<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'News',
  setup() {
    const news = ref([])

    async function getData() {
      const url = 'http://quickduck.com/news'
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Статус ответа: ${response.status}`)
        }
        
        const data = await response.json()
        
        console.log(typeof data)
        
        return data;

        
      } catch (error) {
        console.error('Ошибка: ', error.message)
      }
    }

    onMounted(async () => {
      news.value = await getData()
    })

    return {
      news
    };
  }
});

</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Управление новостями</h2>
    </div>

    <div class="custom-space" v-if="Object.keys(news).length !== 0">
      <div class="news-box" v-for="item in news" :key="item.id">
        <div class="news d-flex flex-row justify-content-start">
          <div class="imagen">
            <img src="/public/images/palm.jpg" alt="attention">
          </div>
          <div class="d-flex flex-column justify-content-start" style="width: 80%;">
            <div class="content-news d-flex flex-column">
              <h3>{{ item.name }}</h3>
              <i>номер поста: {{ item.id }}</i>
              <p>{{ item.desk }}</p>
            </div>
          </div>

          <div class="d-flex flex-row" style="background-color: #245577;">
            <div class="move d-flex flex-column justify-content-center">
              <div><a href="#" class="link">перейти...</a></div>
              <div><a href="#" class="edt">Редактировать</a></div>
              <div><a href="#" class="danger">Удалить</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="alert alert-danger" role="alert">
        Данных не найдено
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
.danger {color: #EB4C42;}
.danger:hover {color:red;}
.edt {color: #E6BF0B;}
.edt:hover { color: #F07427;}
.link { color: silver;}
.link:hover { color: white;}
/* end linkg */
</style>