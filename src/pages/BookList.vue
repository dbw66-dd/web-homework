<template>
  <div class="booklist">
    <h2>图书列表</h2>
    <BookSearch :keyword="keyword" @update:keyword="keyword = $event" />
    <div class="book-items">
      <BookItem v-for="item in filterList" :key="item.id" :book="item" />
    </div>
    <p v-if="filterList.length === 0">没有找到匹配的图书</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BookItem from '../components/book/BookItem.vue'
import BookSearch from '../components/book/BookSearch.vue'

const keyword = ref('')
const bookArr = ref([
  { id: 1, name: '战争与和平', author: '托尔斯泰', desc: '经典长篇小说' },
  { id: 2, name: '百年孤独', author: '马尔克斯', desc: '魔幻现实主义代表作' },
  { id: 3, name: '三体', author: '刘慈欣', desc: '国内科幻经典' }
])

const filterList = computed(() => {
  return bookArr.value.filter(b => b.name.includes(keyword.value))
})
</script>

<style scoped>
.booklist { padding: 20px; }
.book-items { margin-top: 15px; }
</style>
