<template>
  <div>
    <Transition name="fade">
      <slot v-if="show"></slot>
    </Transition>
  </div>
</template>

<script setup>
defineProps(['show'])
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
