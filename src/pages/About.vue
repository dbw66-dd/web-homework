<template>
  <div class="about">
    <h2>关于本系统</h2>
    <p>Vue3 + Vite + VueRouter 课程演示项目</p>
    <BookDesc>
      <template #title>项目说明</template>
      本项目用于Vue组件、路由、双向绑定、计算属性、插槽等知识点练习。
    </BookDesc>
  </div>
</template>
<script setup>
import BookDesc from '../components/book/BookDesc.vue'
</script>
<style scoped>
.about{padding:20px;}
</style>
