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
    default: "TITLE",
  },
});
</script>

<template>
  <article class="bg-alternative rounded-md text-center overflow-hidden">
    <img :src="props.imgSource" alt="product" class="w-full h-40 object-cover" />
    <div class="p-4">
      <h2 class="font-bold">{{ props.title }}</h2>
      <div class="flex justify-center space-x-2 mt-4">
        <button class="btn-alternative">View Details</button>
        <button class="btn-primary">Add to cart</button>
      </div>
    </div>
  </article>
</template>
