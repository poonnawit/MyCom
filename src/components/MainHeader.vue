<script setup></script>

<template>
  <header class="bg-alternative fixed top-0 left-0 w-full shadow-alternative shadow-sm">
    <nav
      class="lg:max-w-screen-xl flex justify-between mx-auto items-center p-2.5"
    >
      <router-link to="/" class="font-bold text-xl space-x-2 inline-flex tracking-wider"
        ><img src="../assets/favicon-32x32.png" alt="hero-icon" /><span>MyCom</span></router-link
      >
      <button class="transition lg:hidden p-2.5">
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
              <span class="bg-primary text-xs text-white px-1 py-0.5 rounded-xl relative top-2 -left-1.5">0</span>
            </div>
          </button>
        </li>
        <li>
          <button class="btn-link">
            Orders
          </button>
        </li>
        <li>
          <button class="btn-alternative">Login</button>
        </li>
        <li>
          <button class="btn-primary">Signup</button>
        </li>
        <li>
          <button class="btn-primary">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>
