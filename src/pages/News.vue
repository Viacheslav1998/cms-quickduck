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
        const response = await fetch(url)
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
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedItem),
        });

        if (!response.ok) throw new Error ('Ошибка при обновлении begin'); 

        const index = news.value.findIndex((n) => n.id === updatedItem.id);
        if (index !== -1) news.value[index] = updatedItem;

        const data = await response.json();
        if (response.ok) {
          Swal.fire({
            title: 'Ура',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Закрыть',
          });
        }
        
      } catch (error) {
        if (response.ok) {
          Swal.fire({
            title: 'ошибка ! не удалось',
            text: data.message,
            icon: 'error',
            confirmButtonText: 'Закрыть',
          });
        }
        console.error('Ошибка при обновлении: ', error);
      }
    };

    // delete news = id
    const deleteNews = async(postId) => {
      try {
        const response = await fetch(`http://quickduck.com/api/news/${postId}`,{
          method: 'DELETE',
        });
        if(!response.ok) {
          throw new Error('Не удалось удалить новость');
        }
        const data = await response.json();
        if(data.status === 'success') {
          news.value = news.value.filter(item => item.id !== postId);
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

    // update image current news
    const updateImage = async (current) => {
      try {
        const formData = new FormData();
        formData.append('path_to_image', imageFile.value);

        const response = await fetch(`http://quickduck.com/api/update-imagen/${current.id}`, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          },
        });

        // warn need update this..
        if (!response.ok) throw new Error('Ошибка при обновлении изображения');

        const data = await response.json();
        if (data.status === 'success') {
          const index = news.value.findIndex((n) => n.id === current.id);
          if (index !== -1) news.value[index].path_to_image = data.newImagePath;
          Swal.fire({
            title: 'Успех',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Закрыть' 
          });
        } 
      } catch (error) {
        console.error('ошибка при обновлении изображения: ', error);
        Swal.fire({
          title: 'Ошибка',
          text: error.message || 'Что-то пошло не так.',
          icon: 'error',
          confirmButtonText: 'Закрыть',
        });
      }
    };

    // event select current image
    const handleFileUpload = (file) => {
      imageFile.value = file;
    };

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
      deleteNews,
      updateImage,
      handleFileUpload,
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
      @updateImage="updateImage"
      @fileUpload="handleFileUpload"
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