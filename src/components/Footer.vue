<script>
import { ref, onMounted } from 'vue';

export default {

  setup() {
    const rates = ref({
      RUB: null,
      USD: null,
      EUR: null
    });

    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await fetch("https://nationalbank.kz/rss/rates_all.xml");
        if(!response.ok) throw new Error('Ошибка загрузки данных');

        const xml = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "application/xml");

        //извлечь
        ['RUB', 'USD', 'EUR'].forEach((currency) => {
          const item = xmlDoc.querySelector(`item title:contains("${currency}")`);
          if (item) {
            const rate = item.parentNode.querySelector('description').textContent;
            rates.value[currency] = parseFloat(rate).toFixed(2);
          }
        });
       } catch (err) {
        error.value = "не удалось загрузить курсы валют.";
        console.error(err);
      } 
    });

    return {rates, error};
  },
};

</script>
<template>
  <div class="container">
    <div class="footer">
      <p style="margin: 10px 5px;">CMS - управление сайтом</p>
      <p>
        <span style="color:#000; background-color: #E6BF0B; padding: 5px; margin: 5px; border-radius: 5px; margin-top: 10px;"><b>только для личного использования | не для расспространения</b></span>
        <span style="color:#E6BF0B; background-color: #212121; padding: 5px; border-radius: 5px; margin-top: 10px;"><b>Development SilentStorm</b></span>
      </p>
    </div>
  </div>
</template>
<style scoped>

.footer {
  padding: 20px 10px 1px 10px;
  margin-top: 20px;
  background-color: #a53131;
  color: white;
  font-family: Calibri;
}

</style>