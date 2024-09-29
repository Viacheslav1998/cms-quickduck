<script>
import { defineComponent } from 'vue'
import Header from '@components/Header.vue'
import Footer from '@components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer
  }
})

</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style scoped>
  body {
    background-color: #4d2525; /* Серый цвет фона */
  }
</style>
