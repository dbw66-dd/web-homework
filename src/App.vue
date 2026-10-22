<template>
  <div>
    <Header title="图书收藏系统"/>
    <Layout />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/layout/Header.vue'
import Layout from './components/layout/Layout.vue'
import Footer from './components/layout/Footer.vue'
</script>
