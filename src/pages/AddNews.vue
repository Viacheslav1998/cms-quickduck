<script>
import { defineComponent } from 'vue'
import Editor from '@tinymce/tinymce-vue';

export default defineComponent({
  name: 'AddNews',
  components: {
    'editor': Editor
  }
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
        
        <div>
          <editor
            api-key="0dlmagrtkkct366u3iv3bopx8ha1foy0mqtudu6p0tb6p0wr"
            :init="{
              toolbar_mode: 'sliding',
              plugins: [
                // Core editing features
                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                // Your account includes a free trial of TinyMCE premium features
                // Try the most popular premium features until Oct 19, 2024:
                'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
              ],
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
            }"
            initial-value="Давай пиши !"
          />
        </div>
        <div class="space"></div>
        <button type="submit" class="btn btn-danger">Создать</button>
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

.space {
  width: 100%;
  height: 20px;
}

.name-page {
  margin-top: 20px;
  padding: 20px;
  color: silver;
  border: 1px solid grey;
}

</style>