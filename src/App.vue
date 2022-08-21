<script setup>
import MainHeader from "./components/layout/MainHeader.vue";
</script>

<template>
  <main>
    <MainHeader></MainHeader>
    <div class="h-16"></div>
    <main class="lg:max-w-screen-xl mx-auto">
      <router-view></router-view>
    </main>
  </main>
</template>
