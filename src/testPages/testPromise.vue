<template>
  <div class="container">
    <div class="base">
      <span class="" style="color: #373737; background-color: yellowgreen; padding: 5px; margin: 5px 0; border-radius: 5px; margin-top: 10px;"><b>памятка</b></span>
      <h1><b>THE PROMISE</b></h1>
      <span style="color: wheat; font-family: calibri; "><b>Секретная локация любопытного тестировщика</b></span>
    </div>
    <div class="base">
      <p>
        Promise (промис) - это объект, представляющий результат успешного или неудачного завершения асинхронной операции. Так как большинство людей пользуются уже созданными промисами, это руководство начнём с объяснения использования вернувшихся промисов до объяснения принципов создания.
      </p>
      <q style="color: red;"><span style="color: wheat;">Обязательная цитата авторитетного источника MDN.</span></q>
    </div>
    <div class="base">
      <p>В сущности, промис - это возвращаемый объект, в который вы записываете два колбэка вместо того, чтобы передать их функции.</p><br>
      <p>в место старомодной функции которая принимает 2 callback и вызывает по условию один из них успешный он был или нет</p>
      <i style="color: wheat;">callBack функции - это любая функция которая передается в другую функцию в качестве аргумента</i>
      <p>///////////////////////////////////////////////////////////////////</p>
      <pre>
        <code style="color: wheat;">
        function doSomethingOldStyle(successCallback, failureCallback) {
          console.log("Готово.");
          // Успех в половине случаев.
          if (Math.random() > 0.5) {
            successCallback("Успех");
          } else {
            failureCallback("Ошибка");
          }
        }

        function successCallback(result) {
          console.log("Успешно завершено с результатом " + result);
        }

        function failureCallback(error) {
          console.log("Завершено с ошибкой " + error);
        }

        doSomethingOldStyle(successCallback, failureCallback);
        </code>
      </pre>
      <p>///////////////////////////////////////////////////////////////////</p>

    </div>
    <div class="base">
      <br>
      <h3 style="color: gold;">Демо callBack функций</h3>
      <button 
        type="submit"
        @click="spaceWay"
        class="custom-push">
        <span><b>нажать</b></span>
      </button>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'; 
export default {
  name: 'testPromise',

  setup() {
    const data = ref('тут значение которое будет измененно');

    const groveCountry = () => {
      if (2 > 3) {
        return '2 больше 3 хотя это не возможно';
      } else {
        return 'верно 3 больше 2';
      }
    }

    const spb = () => {
      return 'я знаю этол значение вернется в месте с данными или без них но просто текст';
    }

    const oceanSpecial = (callback, callback2) => {
      data.value = callback();
      console.log(callback2())
    }

    const spaceWay = () => {
      oceanSpecial(groveCountry, spb);
    }

    

    return {
      data,
      spaceWay,
    }
  },

}


</script>

<style scoped>
h1, p { color: white;}
.base {
  margin: 20px 0;
  padding: 20px;
  background-color: #373737;
}
.custom-push {
  border: none; color: #373737; background-color: goldenrod; padding: 5px; margin: 5px 0; border-radius: 5px; margin-top: 10px;
}
.custom-push:hover {
  color: white;
  background-color: yellowgreen;
}
.custom-push:active {
  background-color: gold;
}

</style>