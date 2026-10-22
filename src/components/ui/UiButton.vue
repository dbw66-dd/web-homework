<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
<style scoped>
.btn{
  padding:6px 12px;
  background:#42b983;
  color:white;
  border:none;
  border-radius:4px;
  cursor:pointer;
}
</style>
