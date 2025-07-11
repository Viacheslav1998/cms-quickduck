<script>
import { defineComponent, ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import EditPopup from '../components/EditPopup.vue';

export default defineComponent({
  name: 'News',
  components: { EditPopup },
  setup() {
    const news = ref([]);
    const isPopupVisible = ref(false);
    const selectedNews = ref(null);
    const imageFile = ref(null);

    // get All news
    async function getData() {
      const url = 'http://quickduck.com/api/news'
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Статус ответа: ${response.status}`)
        }
        
        const data = await response.json()
        return data;

      } catch (error) {
        console.error('Ошибка: ', error.message)
      }
    };

    const openEditPopup = (item) => {
      selectedNews.value = item;
      isPopupVisible.value = true;
    };

    // update news
    const updateNews = async (updatedItem) => {
      try {
        const response = await fetch(`http://quickduck.com/api/news/${updatedItem.id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedItem),
        });

        if (!response.ok) throw new Error ('Ошибка при обновлении begin'); 

        const index = news.value.findIndex((n) => n.id === updatedItem.id);
        if (index !== -1) news.value[index] = updatedItem;

        const data = await response.json();
        if (response.ok) {
          showSuccess('Обновлено!');
        }
        
      } catch (error) {
        if (response.ok) {
          showError('ошибка ! не удалось!');
        }
        console.error('Ошибка при обновлении: ', error);
      }
    };

    // delete news = id
    const deleteNews = async(postId) => {
      try {

        console.log(`URL: http://quickduck.com/api/news/${postId}`);


        const response = await fetch(`http://quickduck.com/api/news/${postId}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if(!response.ok) {
          throw new Error('Не удалось удалить новость');
        }
        const data = await response.json();
        if(data.status === 'success') {
          news.value = news.value.filter(item => item.id !== postId);
          showSuccess('Удалено');
        } else {
          showError('ошибка!');
        }
      } catch (error) {
        console.error('ошибка при удалении: ', error);
        showError('Ошибка при удалении');
      }
    };

    function showError(message) {
      Swal.fire({
        title: 'Ошибка',
        text: message || 'что то пошло не так',
        icon: 'error',
        confirmButtonText: 'Закрыть',
      });
    }

    function showSuccess(message) {
      Swal.fire({
        title: 'Успех',
        text: message || 'сделано !',
        icon: 'success',
        confirmButtonText: 'Ок',
      });
    }

    onMounted(async () => {
      news.value = await getData();
    });

    return {
      news,
      deleteNews,
      isPopupVisible,
      selectedNews,
      openEditPopup,
      updateNews,
      imageFile,
    };
  },
});

</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Управление новостями</h2>
    </div>

    <div class="custom-space" v-if="Object.keys(news).length !== 0">
      <transition-group name="fade" tag="div">
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
                <div>
                  <button
                    class="edt" 
                    @click="openEditPopup(item)"
                  >
                    Редактировать
                  </button>
                </div>
                <div>
                  <button
                    class="danger"
                    @click="deleteNews(`${item.id}`)"
                  >Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <div class="alert alert-danger m-top"  v-else>
        Данных не найдено
    </div>

    <EditPopup
      :isVisible="isPopupVisible"
      :newsItem="selectedNews"
      @close="isPopupVisible = false"
      @update="updateNews"
    />    
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