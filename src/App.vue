<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useElementSize } from '@vueuse/core'
import store from './store'
const header = ref(null)
const { height } = useElementSize(header)
const { dispatch } = store

onMounted(() => {
  //Get Header Height
  dispatch('setHeaderHeight', height.value)
  console.log(header.value)
})
</script>

<template>
  <header ref="header" class="flex_c_h">
    <nav class="flex_c_h gap1 medium w100">
      <RouterLink to="/" class="text_center">Home</RouterLink>
      <RouterLink to="/about" class="text_center">About</RouterLink>
    </nav>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
</template>
