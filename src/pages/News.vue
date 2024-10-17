<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'News',
  setup() {
    const news = ref([])

    async function getData() {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Статус ответа: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
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
  
  <div>

    <ul style="color: white;">
      <li v-for="item in news" :key="item.id">
        {{ item.body }}
      </li>
    </ul>

  </div>
<br>
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
          <div class="content-news d-flex flex-column justify-content-center">
            <h3>Названия новости</h3>
            <p>и какое то описание из каких то слов что бы было просто интерессное что то для чего то</p>
          </div>
          <div class="move d-flex flex-column justify-content-center">
            <div><a href="#" class="link">Перейти к новости</a></div>
            <div><a href="#" class="edt">Редактировать</a></div>
            <div><a href="#" class="danger">Удалить</a></div>
          </div>
        </div>
      </div>

      <div class="news-box">
        <div class="news d-flex flex-row">
          <div class="imagen">
            <img src="/public/images/palm.jpg" alt="attention">
          </div>
          <div class="content-news d-flex flex-column justify-content-center">
            <h3>Названия новости</h3>
            <p>и какое то описание из каких то слов что бы было просто интерессное что то для чего то</p>
          </div>
          <div class="move d-flex flex-column justify-content-center">
            <div><a href="#" class="link">Перейти к новости</a></div>
            <div><a href="#" class="edt">Редактировать</a></div>
            <div><a href="#" class="danger">Удалить</a></div>
          </div>
        </div>
      </div>

      <div class="news-box">
        <div class="news d-flex flex-row">
          <div class="imagen">
            <img src="/public/images/palm.jpg" alt="attention">
          </div>
          <div class="content-news d-flex flex-column justify-content-center">
            <h3>Названия новости</h3>
            <p>и какое то описание из каких то слов что бы было просто интерессное что то для чего то</p>
          </div>
          <div class="move d-flex flex-column justify-content-center">
            <div><a href="#" class="link">Перейти к новости</a></div>
            <div><a href="#" class="edt">Редактировать</a></div>
            <div><a href="#" class="danger">Удалить</a></div>
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
}
.news-box {
  margin: 20px 0;
  color: white;
  background-color: #3C3C3C;
}

.imagen {
  padding: 5px;
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
.edt {color: #318CE7;}
.edt:hover { color: #00A9E7;}
.link { color: silver;}
.link:hover { color: white;}
/* end linkg */
</style>