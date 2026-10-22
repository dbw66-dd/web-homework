<template>
  <div class="search-box">
    <input 
      :value="keyword" 
      @input="onInput" 
      placeholder="输入书名搜索..."
    />
    <UiButton @click="clear">清空</UiButton>
  </div>
</template>

<script setup>
import UiButton from '../ui/UiButton.vue'
defineProps(['keyword'])
const emit = defineEmits(['update:keyword'])
const onInput = (e) => emit('update:keyword', e.target.value)
const clear = () => emit('update:keyword', '')
</script>

<style scoped>
.search-box {
  display: flex;
  gap: 8px;
  margin: 10px 0;
}
.search-box input {
  flex: 1;
  padding: 6px 10px;
  font-size: 15px;
}
</style>
