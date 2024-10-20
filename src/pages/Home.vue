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
  data() {
    return {
      currentTime: new Date().toLocaleTimeString()
    }
  },
  methods: {
    updateTime() {
      this.currentTime = new Date().toLocaleTimeString();
    }
  },
  mounted() {
    this.timer = setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
})
</script>

<template>
  <div class="container">
  <div>
    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
  </div>
    <div class="name-page">
      <h2>Главная</h2>
    </div>
    <div class="tools">
      <p>Твои инструменты:</p>
    </div>
    <div class="d-flex justify-content-start sp">
      <div>
        <VueDatePicker v-model="date" inline auto-apply :dark="true" />
      </div>
      <div class="time-widget">
        <p>{{ currentTime }}</p>
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
.time-widget {
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
}
.time-widget p {
  background-color: #005cb2;
  padding: 20px;
  border-radius: 10px;
  color: white;}
.sp {
  background-color: #333;
}
</style>