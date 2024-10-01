<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const date = ref(new Date().toISOString().substring(0, 10))

    return {
      date,
    };
  },
})
</script>

<template>
  <div class="container">
    <div class="name-page">
      <h2>Главная</h2>
    </div>
    <div class="tools">
      <p>Твои инструменты:</p>
    </div>
    <div>
      <div>
        <VueDatePicker v-model="date" inline auto-apply :dark="true" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tools {
  margin-top: 15px;
}
p {
  color: grey;
}
.name-page {
  margin-top: 20px;
  padding: 20px;
  color: silver;
  border: 1px solid grey;
}

</style>