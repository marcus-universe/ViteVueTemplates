<script setup lang="ts"></script>

<template>
  <header class="flex_c_h">
    <div class="wrapper">
      <nav class="flex_c_h gap1 medium">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
