<script setup></script>

<template>
  <FormCard class="mx-auto my-8 py-4 px-6 max-w-xl">
    <div class="text-center space-y-6 my-6">
      <h1 class="font-bold text-3xl">MyCom</h1>
      <h3 class="text-xl">Login</h3>
    </div>
    <form @submit.prevent="null" class="space-y-4 my-3 mx-8">
      <div>
        <label for="email" class="block font-bold mb-2">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@abc.com"
          class="block p-1 w-full border border-gray-200 rounded-md"
        />
      </div>
      <div>
        <label for="password" class="block font-bold mb-2">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="At least 8 characters"
          class="block p-1 w-full border border-gray-200 rounded-md"
        />
      </div>
      <div class="space-x-3">
        <button class="btn-primary">Login</button>
        <router-link to="/signup" class="btn-link">Create a new account</router-link>
      </div>
    </form>
  </FormCard>
</template>
