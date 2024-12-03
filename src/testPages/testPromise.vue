<template>
  <div class="container">
    <div class="base">
      <span style="color: #373737; background-color: yellowgreen; padding: 5px;  border-radius: 5px;"><b>памятка</b></span>
      <div class="top-line-padding"></div>
      <h1><b>THE PROMISE | CALLBACK | ASYNC | AWAIT</b></h1>
      <span style="color: wheat; font-family: calibri; "><b>Секретная локация любопытного тестировщика</b></span>
      <br><i style="color: wheat;">вспомним callback функции</i>
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

    <div class="base">
      <h3>Что касается Promise</h3>

      <pre>
        <code style="color: wheat;">
          function doSomething() {
            return new Promise((resolve, reject) => {
              console.log("Готово.");
              // Успех в половине случаев.
              if (Math.random() > 0.5) {
                resolve("Успех");
              } else {
                reject("Ошибка");
              }
            });
          }

          const promise = doSomething();
          promise.then(successCallback, failureCallback);

          …или просто:

          doSomething().then(successCallback, failureCallback);
        </code>
      </pre>
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
      setTimeout(setDefaultValue, 5000);
    }

    const setDefaultValue = () => {
      data.value = 'тут значение которое будет измененно';
    }     

    // you can see The Promise

    function justDoItNow() {
      return new Promise((resolve, reject) => {
        console.log('готово.');
        if (Math.random() > 0.5) {
          resolve('успех');
        } else {
          reject('ошибка');
        }
      });
    }

    const doSmsthng = (result) => {
      console.log('мы что то сделали и это работает ' + result);
    }

    const notBuildFunny = (error) => {
      console.log('вот говорят же - работает не трогай... опять все заруинил XD ' + error);
    }


    const promise = justDoItNow();
    promise.then(doSmsthng, notBuildFunny);

    //another

    const choiceWay = new Promise(function(lightWay, badWay) {
      if ( 1 < 10) {
        lightWay();
        setTimeout(() => {
          console.log('yes of course');
        },1500);
      } else {
        badWay();
      }
    });

    choiceWay.then(
      function() { 
        console.log("это то что true");
      },
      function() {
        console.log("это то что false");
      }
    );

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
.top-line-padding {
  margin-bottom: 10px!important;
}

</style>