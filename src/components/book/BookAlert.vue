<template>
  <div v-if="show" class="alert">
    {{msg}}
    <UiButton @click="close">关闭</UiButton>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import UiButton from '../ui/UiButton.vue'
const props = defineProps(['msg'])
const show = ref(true)
const close = ()=> show.value = false
</script>
<style scoped>
.alert{
  border:1px solid orange;
  padding:10px;
  margin:8px 0;
  border-radius:6px;
}
</style>
