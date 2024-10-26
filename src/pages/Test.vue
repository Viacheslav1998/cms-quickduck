<template>
  <div class="news-form">
    <h2>тестирование приложений...</h2>
  </div>
  <hr>
  <div style="color: white; text-align: center;">
    {{ message }} <br>
    {{ YourName  }} <br>
    {{ age }}
  </div>
  <br>
  <button @click="stateNamePerson">Сделай это немедленно</button>
  <br>
  <transition name="fade">
  <div v-if="isVisible" @click="toggle" style="padding: 20px; background-color: blanchedalmond; width: 50%; margin: 0 auto;" >
    <p class="close toggle-content" style="float: right;  border-radius: 10px; padding: 2px 8px 4px 8px;">X</p>
    <div  
    class="alert alert-danger"
    style="width: 60%; padding: 20px; margin: 10px auto;">
      и тут еще один момент говорят тут еще ничего нет
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      message: 'ты можешь больше чем думаешь!',
      YourName: 'А как тебя зовут ?',
      age: 'Возраст всего лишь цифры',
      isVisible: true,
    };
  },
  methods: {
    stateNamePerson() {
      this.message = 'мотивационное сообщение изменено'
    }, 
    toggle() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>
.news-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: grey;
}
.alert {
  margin-bottom: 20px;
}
.close {
  cursor: pointer;
  transition: all ease 0.2s;
  border: 1px solid silver;
}
.close:hover {  color: orangered; border:1px solid red;}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease; /* Плавный переход по прозрачности */
}
.fade-enter, .fade-leave-to /* .fade-leave-active в <2.1.8 */ {
  opacity: 0; /* Исходная и конечная прозрачность */
}
</style>
