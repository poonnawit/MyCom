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
});
</script>

<template>
  <article class="bg-alternative rounded-md overflow-hidden">
    <router-link to="#"
      ><img :src="props.imgSource" alt="product" class="transition duration-500 w-full h-60 object-cover hover:scale-105"
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
</template>
