<script>
import { ref, onMounted } from 'vue';

export default {

  setup() {
    const rates = ref([]);
    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await fetch("http://quickduck.com/proxy/rates");
        if (!response.ok) throw new Error('Ошибка загрузки данных');

        const xmlData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

        // check error parse
        if (xmlDoc.querySelector('parsererror')) {
          throw new Error('Ошибка парсинга XML');
        }

        // Convert NodeList to an array
        const items = Array.from(xmlDoc.querySelectorAll('item'));
        const parsedRates = items
          .map((item) => ({
            title: item.querySelector('title')?.textContent,
            description: item.querySelector('description')?.textContent,
          }))
          .filter(({ title }) => 
            title.includes('USD') || title.includes('EUR') || title.includes('RUB')
          );


        rates.value = parsedRates;
       } catch (err) {
        error.value = "Не удалось загрузить курсы валют.";
        console.error(err);
      } 
    });

    return {rates, error};
  },
};

</script>
<template>
  <div class="container">
    <h3 style="border-top: 1px solid gold; padding-top: 20px;">Мотивационный Баннер</h3>
    <p style="color: silver;">Я бы мог сделать какой то переход - но у меня просто нет времени | а идеи есть всегда</p>
    <div class="additional-unit">
      <img src="/public/images/fone.jpg" alt="fone">
    </div>
  </div>

  <div class="container">
    <h3 style="border-top: 1px solid gold; padding-top: 20px; margin-top: 40px;">Внимание - Подвал</h3>
    <p style="color: silver;">Подвалы нужны для поиска быстрой информации, о сайте или авторе, карта ссылки и т д...</p>
    <div class="footer"> 
      <div class="format-elem d-flex flex-row justify-content-around">
        <div class="currencies">
          <p style="text-align: center; color: wheat; font-weight:100; font-family: Verdana;">курсы валют</p>
          <p v-if="error">{{ error }}</p>
          <ul v-else-if="rates.length">
            <li v-for="(rate, index) in rates" :key="index">
              <strong>{{ rate.title }}</strong>: {{ rate.description }}
            </li>
          </ul>
          <p v-else>Загрузка...</p>
        </div>
        <div>
          <img class="ico" src="/public/ico/hn.png" alt="honey.ico">
        </div>
        <div>
          <img class="ico2" src="/public/images/honey.jpg" alt="">
        </div>
        <div style="text-align: center;">
          <a href="https://github.com/Viacheslav1998/cms-quickduck" style="color: white;">
            <img class="ico2" src="/public/ico/hub.png" alt="gitHub"><br>
            кто то просил сылку на репу
          </a>
        </div>
      </div>
      <p style="margin: 5px; font-size: 18px;">интерессная панель управление сайтом | реализация многих идей</p>
      <p>
        <span style="color:#000; background-color: #E6BF0B; padding: 5px; margin: 5px; border-radius: 5px; margin-top: 10px;"><b>только для личного использования | не для расспространения</b></span>
        <span style="color:#E6BF0B; background-color: #212121; padding: 5px; border-radius: 5px; margin-top: 10px;"><b>Development SilentStorm</b></span>
      </p>
      <p style="margin: 0 5px;  padding: 0 5px; font-weight: bold; color: white; background-color: #212121; border-radius: 5px; text-align: center;">development in progress... 2024</p>
    </div>
  </div>
</template>
<style scoped>

.additional-unit {
  background-color: silver;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.additional-unit img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: top;
}

.footer {
  padding: 20px 10px 15px 10px;
  margin-top: 20px;
  background-color: #a53131;
  color: white;
  font-family: Calibri;
}

.currencies {
  position: relative;
  display: block;
  width: 170px;
  padding: 20px 0 5px 0;
  background-color: #212121;
  border-radius: 16px;
  color: #e6bf0b;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.ico {
  border-radius: 20px;
  padding: 10px;
  background-color: wheat;
  width: 150px;
  height: 150px;
}

.ico2 {
  border-radius: 20px;
  padding: 10px;
  width: 150px;
  height: 150px;
}
</style>