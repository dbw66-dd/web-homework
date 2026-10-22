<template>
  <header class="header">
    <h2>{{title}}</h2>
  </header>
</template>
<script setup>
defineProps(['title'])
</script>
<style scoped>
.header{
  background:#42b983;
  color:white;
  padding:12px;
  margin:0;
}
</style>
