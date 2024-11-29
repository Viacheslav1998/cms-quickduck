<template>
  <div class="container">
    <div class="base">
      <span style="color: wheat; background-color: rebeccapurple; padding: 5px; margin: 5px 0; border-radius: 5px; margin-top: 10px;"><b>памятка</b></span>
      <div class="top-line-padding"></div>
      <h1><b>CLOSURE</b></h1>
      <b style="color: wheat; font-size: 18px;">Проработаем замыкания</b>
    </div>

    <div class="base">
      <h2>Начнем с того...</h2>
      <i style="color: wheat;">что узнаем что такое замыкание: разные формулировки</i>
      <p style="color: white;">Замыкание это - Комбинация функции, и лексического окружения, в котором эта функция была определена (состоит она из произвольных локальных элементов которые были в области действия функции во время ее обьявления)</p>
      <p style="color: goldenrod;">Еще одно обьяснение или формулировка</p>
      <p style="color: white"> Замыкание в JS - это функция которая запоминает и имеет доступ к своему логическому окружению даже после того как она была выполнена, a контекст ее создания уже завершен</p>
      <p style="color: goldenrod;">А если еще проще:</p>
      <p style="color: white;">Замыкания позволяет функции помнить переменные из области видимости в которой она была создана, даже если эта область перестала существовать</p>
      <span style="color: wheat; background-color: rebeccapurple; padding: 5px; margin: 5px 0; border-radius: 5px; margin-top: 10px;"><b>А теперь рассмотрим примеры</b></span>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

div { font-family: Calibri; }
.base {
  margin: 20px 0;
  padding: 20px;
  background-color: #373737;
}
.top-line-padding {
  margin-bottom: 10px;
}
</style>