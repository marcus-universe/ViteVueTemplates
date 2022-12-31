<template>
  <NavbarTop />
  <main :style="{ marginTop: headerHeight + 'px' }">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts">
import NavbarTop from '@/components/UI/NavbarTop.vue'

export default {
  components: {
    NavbarTop,
  },
  computed: {
    headerHeight(): number {
      return this.$store.state.headerHeight
    },
  },
}
</script>
