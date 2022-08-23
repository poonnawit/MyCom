<script setup>
const props = defineProps({
  imgSource: {
    type: String,
    required: false,
    default: null,
  },
  title: {
    type: String,
    required: false,
    default: "Lorem ipsum dolor sit amet consectetur.",
  },
  summary: {
    type: String,
    required: false,
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aliquam!",
  },
  mode: {
    type: String,
    required: false,
    default: "grid",
  },
});
</script>

<template>
  <article v-if="mode === 'grid'" class="bg-alternative rounded-md overflow-hidden">
    <router-link to="#"
      ><img
        :src="props.imgSource"
        alt="product"
        class="transition duration-500 w-full h-60 object-cover hover:scale-105"
    /></router-link>
    <div class="p-4">
      <h2 class="transition font-bold hover:text-alternativebg">
        <router-link to="#">{{ props.title }}</router-link>
      </h2>
      <div class="flex justify-between items-center space-x-2 mt-4">
        <h3 class="font-bold text-xl">4,200.-</h3>
        <button class="btn-primary text-sm">Add to cart</button>
      </div>
    </div>
  </article>
  <article v-if="mode === 'list'" class="bg-alternative rounded-md overflow-hidden">
    <h2>{{ props.title }}</h2>
    <p>{{ props.summary }}</p>
    <h2>4,200.-</h2>
    <div>
      <button>
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
      </button>
    </div>
  </article>
</template>
