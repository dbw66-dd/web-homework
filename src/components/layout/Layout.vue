<template>
  <nav class="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/booklist">图书列表</router-link>
    <router-link to="/about">关于</router-link>
  </nav>
</template>
<style scoped>
.nav{
  display:flex;
  gap:20px;
  padding:12px 20px;
  background:#f4f4f4;
}
a{
  text-decoration:none;
  color:#333;
}
a.router-link-active{
  color:#42b983;
  font-weight:bold;
}
</style>
