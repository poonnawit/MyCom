<script setup></script>

<template>
  <FormCard>
    <div class="text-center space-y-6 my-6">
      <h1 class="font-bold text-3xl">MyCom</h1>
      <h3 class="text-xl">Signup</h3>
    </div>
    <form @submit.prevent="null" class="space-y-4 my-3 mx-8">
      <div>
        <label for="email" class="block font-bold mb-2">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@abc.com"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="confirm-email" class="block font-bold mb-2">Confirm E-mail</label>
        <input
          type="text"
          name="confirm-email"
          id="confirm-email"
          placeholder="Re-enter E-mail"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="password" class="block font-bold mb-2">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="At least 8 characters"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <hr />
      <div>
        <label for="fullname" class="block font-bold mb-2">Fullname</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="street" class="block font-bold mb-2">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="amphoe" class="block font-bold mb-2">Amphoe / District</label>
        <input
          type="text"
          name="amphoe"
          id="amphoe"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="province" class="block font-bold mb-2">Province</label>
        <input
          type="text"
          name="province"
          id="province"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="postal" class="block font-bold mb-2">Postal Code</label>
        <input
          type="text"
          name="postal"
          id="postal"
          class="block p-1 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div class="space-x-2">
        <input type="checkbox" name="admin" id="admin" />
        <label for="admin">Signup as administrator</label>
      </div>
      <div class="space-x-3">
        <button class="btn-primary">Signup</button>
        <router-link to="/login" class="btn-link">Login instead</router-link>
      </div>
    </form>
  </FormCard>
</template>
