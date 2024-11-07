<script>
import { defineComponent, ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'News',
  setup() {
    const news = ref([])

    async function getData() {
      const url = 'http://quickduck.com/api/news'
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Статус ответа: ${response.status}`)
        }
        
        const data = await response.json()
        return data;

      } catch (error) {
        console.error('Ошибка: ', error.message)
      }
    }

    const deletePost = async(postId) => {
      try {
        const response = await fetch(`http://quickduck.com/api/news/${postId}`,{
          method: 'DELETE',
        });

        if(!response.ok) {
          throw new Error('Не удалось удалить новость');
        }

        const data = await response.json();
        
        if(data.status === 'success') {
          Swal.fire({
            title: 'Удалено!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Закрыть',
          });
        } else {
          Swal.fire({
            title: 'Ошибка',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'Закрыть',
          });
        }
      } catch (error) {
        console.error('ошибка при удалении: ', error);
        Swal.fire({
          title: 'Ошибка',
          text: error.message || 'что то пошло не так.',
          icon: 'error',
          confirmButtonText: 'Закрыть',
        });
      }
    };

    onMounted(async () => {
      news.value = await getData()
    });

    return {
      news,
      deletePost
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
            <img 
              :src="item.path_to_image ? item.path_to_image : '/images/palm.jpg'"
              alt="icons"
            >
          </div>
          <div class="d-flex flex-column justify-content-start" style="width: 80%;">
            <div class="content-news d-flex flex-column">
              <h3>{{ item.name }}</h3>
              <i>номер поста: {{ item.id }}</i>
              <p>{{ item.title }}</p>
            </div>
          </div>

          <div class="d-flex flex-row" style="background-color: rgb(57, 63, 74);">
            <div class="move d-flex flex-column justify-content-center">
              <div><a href="#" class="link">перейти...</a></div>
              <div><a href="#" class="edt">Редактировать</a></div>
              <div>
                <button
                  class="danger"
                  @click="deletePost(`${item.id}`)"
                >Удалить</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="alert alert-danger m-top"  v-else>
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
.danger {
  color: #d65249;
  background-color: transparent;
  border: none;
  font-weight: bold;
}
.danger:hover {color:red; }
.edt {color: #E6BF0B;}
.edt:hover { color: #F07427;}
.link { color: silver;}
.link:hover { color: white;}
/* end linkg */
.m-top {margin-top: 20px;}
</style>