<script setup>
import { ref } from "vue";

const isMobileToggleOpen = ref(false);

const itemsInCart = ref(0);
</script>

<template>
  <header class="bg-alternative fixed top-0 left-0 w-full shadow-alternative shadow-sm">
    <nav class="lg:max-w-screen-xl flex justify-between mx-auto items-center p-2.5">
      <router-link to="/" class="font-bold text-xl space-x-2 inline-flex tracking-wider"
        ><img src="../../assets/favicon-32x32.png" alt="hero-icon" /><span>MyCom</span></router-link
      >
      <!-- toggler btn -->
      <button class="transition lg:hidden p-2.5" @click="isMobileToggleOpen = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <!-- toggler btn -->
      <ul class="hidden lg:flex space-x-4 items-center">
        <li>
          <button class="btn-link pr-2">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <transition name="cart-change" mode="out-in">
                <span
                  :key="itemsInCart"
                  class="bg-primary text-xs text-white px-1 py-0.5 rounded-xl relative top-2 -left-1.5"
                  >{{ itemsInCart }}</span
                >
              </transition>
            </div>
          </button>
        </li>
        <li>
          <button class="btn-link">Orders</button>
        </li>
        <li>
          <router-link class="btn-alternative" to="/login">Login</router-link>
        </li>
        <li>
          <router-link class="btn-primary" to="/signup">Signup</router-link>
        </li>
        <li>
          <button class="btn-primary">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
  <transition name="mobile">
    <nav v-if="isMobileToggleOpen" class="fixed top-0 left-0 w-full h-full bg-primary lg:hidden">
      <div class="flex justify-end p-2.5">
        <button class="p-2.5 text-white" @click="isMobileToggleOpen = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul class="text-alternative grid grid-cols-1 divide-y border-y">
        <router-link
          class="transition px-6 py-3 hover:bg-alternativebg"
          to="/cart"
          @click="isMobileToggleOpen = false"
        >
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="bg-alternative text-xs text-black px-1 py-0.5 rounded-xl">0</span
            ><span>Cart</span>
          </div>
        </router-link>
        <router-link
          class="transition px-6 py-3 hover:bg-alternativebg"
          to="/orders"
          @click="isMobileToggleOpen = false"
          >Orders</router-link
        >
        <router-link
          class="transition px-6 py-3 hover:bg-alternativebg"
          to="/login"
          @click="isMobileToggleOpen = false"
          >Login</router-link
        >
        <router-link
          class="transition px-6 py-3 hover:bg-alternativebg"
          to="/signup"
          @click="isMobileToggleOpen = false"
          >Signup</router-link
        >
        <li class="transition px-6 py-3 hover:bg-alternativebg">Logout</li>
      </ul>
    </nav>
  </transition>
</template>

<style scoped>
.mobile-enter-active,
.mobile-leave-active {
  transition: all 0.3s;
  max-height: 100%;
}

.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
  max-height: 0;
}

.cart-change-enter-active {
  transition: all 0.2s ease;
}
.cart-change-leave-active {
  transition: all 0.2s ease;
}

.cart-change-enter,
.cart-change-leave-to {
  transform: scale(1.2);
  background-color: #3f72af;
}
</style>
