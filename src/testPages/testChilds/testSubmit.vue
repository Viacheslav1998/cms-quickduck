<template>
  <div class="container">
    <div class="space">
      <h1>Конкретно этот блок дочерний</h1>
      <p>Отсюда будут выводиться нужные данные</p>
      <i>это всего лишь понмиание emits</i><br><br>
      <button type="button" class="btn btn-warning" @click="danger">Warning</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestSubmit',
  emits: ['click'],
  methods: {
    danger() {
      this.$emit('click', {message: 'привет ты получил этот текст'});
    }
  },
}
</script>

<style spaces>
.space {
  padding: 20px;
  background-color: blueviolet;
  color: white!important;
}
</style>