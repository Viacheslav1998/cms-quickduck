<script>
export default {
  name: '404'
}
</script>

<template>
  <div class="container">
    <div class="space-404">
      <h3>Cтраница на которую вы попали не существует !</h3>
    </div>
    <div class="container-404">
      <img src="/images/404.jpg" alt="404-page-not-found">
    </div>
    <div class="content-404">
      <p>Такой страницы не существует, но навигация на верху поможет выйти тебе отсюда</p>
    </div>
  </div>
</template>

<style scope>
.space-404 {
  padding: 22px 20px 20px 20px;
  margin: 20px 0;
  background: whitesmoke;
}
.space-404 h3 {
  color: darkgoldenrod;
  font-weight: 600;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container-404 img {
  width: 100%;
  object-fit: cover;
}
.content-404 {
  padding: 20px 20px 5px 20px;
  background-color:darkorchid;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
}

</style>