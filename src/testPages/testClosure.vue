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
      <span style="color: wheat; font-size: 18px; background-color: olive; padding: 8px; margin: 5px 0; border-radius: 5px; margin-top: 10px;"><b>А теперь рассмотрим примеры</b></span>
    </div>

    <div class="base">
      <pre>
        <code style="color: wheat;">
          function createCounter() {
            let count = 0; // локальная переменная
            return function() {
              count++; // доступ к переменной из внешней функции
              console.log(count);
            };
          }

          const counter = createCounter(); // создать замыкание
          counter(); // 1
          counter(); // 2
        </code>
      </pre>

      <pre style=" background-color: black;">
        <code style="color: darkturquoise; font-weight: bold; font-size: 18px;">
          function quickTest() {
            return 'space'; 
          }

          function moveAgain() {
            var attention = 'attention';
            return function() {
              return attention + ' ' + quickTest();
            };
          }

          const defaultVal1 = moveAgain();
          console.log(defaultVal1());
          
          // теперь с передачей функции в замыкание 
          function testQ() {
            return 'just code...';
          }

          function moveNow(callBack) {
            var blackBox = 'the game';
            return function() {
              return callBack() + ' ' + blackBox;
            };
          }
          const spaceAct = moveNow(testQ);
          console.log(spaceAct());
        </code>
      </pre>
    </div>

    <div class="base">
      <h3>Помни</h3>
      <p style="color: white;">Замыкание — это вложенная функция, которая "помнит" переменные внешней функции, даже после завершения её выполнения.</p>
      <p style="color: white;">Замыкание = функция + область видимости внешней функции.</p>
    </div>

    <div class="base">
      <h2 style="color: wheat">Также важно знать про утечку данных - если не удалять замыкание после использование то можно забить память</h2>
      <pre>
      <p style="color: orchid;"> 
        взять пример из кода наше замыкание - const spaceAct = moveNow(testQ);
        теперь почисти память - когда тебе оно больше не понадобиться 
        spaceAct = null;
      </p>
    </pre>
    </div>

  </div>
</template>

<script>

export default {
  name: 'testClosure',
  setup() {

    function spaceC() {
      let baseTime = 0;
      return function() {
        baseTime++;
        console.log(baseTime);
      }
    }
    
    const counter = spaceC();
    // вызывай сколько надо
    for(let i = 0; i < 3; i++) {
      counter();
    }
    
    // another example

    function moveAlways() {
      var name = 'hello JDM';

      function giveCstmCar() {
        console.log(name);
      }

      return giveCstmCar;
    }

    var defaultFunc = moveAlways();
    defaultFunc();

    // another
    function quickTest() {
      return 'space'; 
    }

    function moveAgain() {
      var attention = 'attention';
      return function() {
        return attention + ' ' + quickTest();
      };
    } 
    // const defaultVal1 = moveAgain();
    // console.log(defaultVal1());
    
    // теперь с передачей функции в замыкание 
    function testQ() {
      return 'just code...';
    }

    function moveNow(callBack) {
      var blackBox = 'the game';
      return function() {
        return callBack() + ' ' + blackBox;
      };
    }
    const spaceAct = moveNow(testQ);
    console.log(spaceAct());
    

  }
  

}

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