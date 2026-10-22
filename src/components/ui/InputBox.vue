<template>
  <input v-model="inputVal" @input="$emit('update',inputVal)" placeholder="搜索图书..." />
</template>
<script setup>
import {ref,watch} from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update'])
const inputVal = ref(props.modelValue)
watch(()=>props.modelValue,(v)=>inputVal.value=v)
</script>
<style scoped>
input{
  width:300px;
  padding:6px;
  font-size:16px;
}
</style>
