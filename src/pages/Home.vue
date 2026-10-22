<template>
  <div class="home">
    <h1>欢迎来到图书收藏系统</h1>
    <p>在这里管理你的图书收藏</p>
    <BookCount />
    <BookAlert msg="提示：可以在图书列表页面查看所有书籍！"/>
  </div>
</template>
<script setup>
import BookCount from '../components/book/BookCount.vue'
import BookAlert from '../components/book/BookAlert.vue'
</script>
<style scoped>
.home{
  padding:20px;
}
</style>
