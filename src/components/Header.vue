<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<template>

   <div class="container">
    <h1>CMS</h1>
    <p>quickduck - панелька управление сайтом</p>
   </div>

   <div class="navi">
      <nav class="flex justify-evenly font-sans text-2xl font-semibold text-slate-200">
        <RouterLink to="/" class="cursor-pointer hover:text-yellow-300">home</RouterLink>
        <RouterLink to="/news" class="cursor-pointer hover:text-yellow-300">news</RouterLink>
        <RouterLink to="/gardens" class="cursor-pointer hover:text-yellow-300">gardens</RouterLink>
        <RouterLink to="/tech" class="cursor-pointer hover:text-yellow-300">tech</RouterLink>
        <RouterLink to="/about" class="cursor-pointer hover:text-yellow-300">about us</RouterLink>
      </nav>
   </div>
</template>