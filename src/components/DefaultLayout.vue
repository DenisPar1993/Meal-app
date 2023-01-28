<template>
 <div class="bg-gray-100 h-full">
    <NavBar />
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
import NavBar from './NavBar.vue'
</script>