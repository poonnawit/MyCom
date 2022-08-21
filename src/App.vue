<script setup>
import MainHeader from "./components/MainHeader.vue";
</script>

<template>
  <main>
    <MainHeader></MainHeader>
    <div class="h-16"></div>
    <main class="lg:max-w-screen-xl mx-auto bg-alternativebg">
      <router-view></router-view>
    </main>
  </main>
</template>
