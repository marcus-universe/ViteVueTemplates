<script setup lang="ts">
import { computed, watch, onMounted, ref } from 'vue'
import store from '@/store'

const { dispatch } = store
const header: any = ref(null)

onMounted(() => {
  setTimeout(() => {
    header.value = document.querySelector('header')
  }, 0)
})

const headerHeight = computed(() => header.value?.offsetHeight || 0)

watch(headerHeight, (value) => {
  dispatch('setHeaderHeight', value)
})
</script>

<template>
  <header ref="header" class="flex_c_h">
    <nav class="flex_c_h gap1 medium w100">
      <RouterLink to="/" class="text_center">Home</RouterLink>
      <RouterLink to="/about" class="text_center">About</RouterLink>
    </nav>
  </header>
</template>
