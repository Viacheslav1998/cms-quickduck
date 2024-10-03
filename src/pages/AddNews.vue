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
        <div class="form-group">
          <label for="nameNews">Названия Новости</label>
          <input type="name" class="form-control" id="nameNews" aria-describedby="nameNews">
          <small id="nameHelp" class="form-text text-muted">то что привлечет внимание</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Описание Новости</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
          <small id="nameHelp" class="form-text text-muted">Описание должно быть не большим - достаточно 255 символов - коротко о главном</small>
        </div>
        
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