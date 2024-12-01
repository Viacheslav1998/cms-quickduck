<template>
  <div class="container">
    <div class="base">
      <span style="color: gold; background-color: darkred; padding: 5px;  border-radius: 5px;"><b>памятка</b></span>
      <div class="top-line-padding"></div>
      <h1><b>RECURSION</b></h1>
      <br><i style="color: wheat;">потренируемся в написании рекурсий</i>
    </div>
    <div class="base">
      <p>
        Рекурсия — это способ решения задачи, при котором функция вызывает саму себя. Она применяется, когда задачу можно разделить на несколько однотипных подзадач, но меньшего размера.
      </p>
    </div>
    <div class="base">
    <p>Рекурсия – это приём программирования, полезный в ситуациях, когда задача может быть естественно разделена на несколько аналогичных, но более простых задач. Или когда задача может быть упрощена до несложных действий плюс простой вариант той же задачи. Или, как мы скоро увидим, для работы с определёнными структурами данных.</p>
    <h2 style="font-weight: bold; color: goldenrod;">Два способа мышления</h2>
    <p style="color: burlywood;">

В качестве первого примера напишем функцию pow(x, n), которая возводит x в натуральную степень n. Иначе говоря, умножает x на само себя n раз.</p>
<i style="color: darkgoldenrod;">
pow(2, 2) = 4 <br>
pow(2, 3) = 8 <br>
pow(2, 4) = 16 <br>

где pow(2, 3) = 8; // это 2 * 2 = 4  и 4 * 2 = 8 но лучше так - (2 x 2) x 2 = 8
</i>      
<p>Итеративный способ: цикл for:</p>
<pre>
        <code style="color: wheat;">
          --------------------------------------------------
          function pow(x, n) {
            let result = 1;

            // умножаем result на x n раз в цикле
            for (let i = 0; i < n; i++) {
              result *= x;
            }

            return result;
          }

          alert( pow(2, 3) ); // 8
          --------------------------------------------------
        </code>
      </pre>
    </div>

    <div class="base">
      <p>Рекурсивный способ: упрощение задачи и вызов функцией самой себя:</p>
      <pre>
        <code style="color: wheat;">
          function pow(x, n) {
            if (n == 1) {
              return x;
            } else {
              return x * pow(x, n - 1);
            }
          }

          alert( pow(2, 3) ); // 8
        </code>
      </pre>
    </div>
  </div>
</template>

<script>

export default {
  name: 'testRecursion',

  setup() {
    //iteration 
    function staticX(x, n) {
      let result = 1;
      for(let i = 0; i < n; i++) {
        result *= x;
      }
      return result
    }

    setTimeout(() => {
      console.log(staticX(2, 5));
    }, 1200);


    // recursion
    function activeMove(x, n) {
      if (n == 1) {
        return x;
      } else {
        return x * activeMove(x, n - 1);
      }
    } 

    setTimeout(() => {
      console.log( activeMove(2, 2) );
      console.log('this is test')
    }, 1200);
  }

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