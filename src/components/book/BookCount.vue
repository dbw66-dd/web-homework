<template>
  <div class="count-box">
    <h3>图书总数：{{count}}</h3>
    <UiButton @click="add">增加一本</UiButton>
  </div>
</template>
<script setup>
import {ref,onMounted} from 'vue'
import UiButton from '../ui/UiButton.vue'
const count = ref(0)
const add = ()=> count.value++
onMounted(()=>{
  count.value = 3
})
</script>
<style scoped>
.count-box{
  margin:10px 0;
  padding:10px;
  border:1px solid #ccc;
  border-radius:6px;
}
</style>
