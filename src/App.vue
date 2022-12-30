<script setup lang="ts">
import { ref, onMounted } from 'vue'
const header = ref<HTMLElement>()

onMounted(() => {
  console.log(header.value)
})
</script>

<template>
  <header ref="header" class="flex_c_h">
    <div class="wrapper flex_c_h align_c">
      <nav class="flex_c_h gap1 medium">
        <RouterLink to="/" class="text_center">Home</RouterLink>
        <RouterLink to="/about" class="text_center">About</RouterLink>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
</template>
