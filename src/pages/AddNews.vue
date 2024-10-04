<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddNews',
})
</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Добавить Новость</h2>
    </div>
    <div class="custom-space">
      <form>
      
        
        <button type="submit" class="btn btn-primary">Создать</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.custom-space {
  margin: 50px auto;
  padding: 20px;
  border: 1px solid grey;
}

</style>