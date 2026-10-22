<template>
  <div class="book-item">
    <h3>{{book.name}}</h3>
    <p>作者：{{book.author}}</p>
    <p>{{book.desc}}</p>
  </div>
</template>

<script setup>
const props = defineProps(['book'])
</script>

<style scoped>
.book-item{
  border:1px solid #ccc;
  padding:10px;
  margin:8px 0;
  border-radius:6px;
}
</style>
