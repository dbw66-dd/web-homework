<template>
  <div class="desc">
    <slot name="title"></slot>
    <p>图书简介：<slot></slot></p>
  </div>
</template>
<style scoped>
.desc{
  margin-top:10px;
  padding:10px;
  background:#fafafa;
}
</style>
