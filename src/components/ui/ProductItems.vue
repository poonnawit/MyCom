<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: false,
    default: null,
  },
  mode: {
    type: String,
    required: false,
    default: "grid",
  },
});

const products = props.products;
</script>

<template>
  <ul
    v-if="mode === 'grid'"
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-2 mx-auto"
  >
    <li v-for="product in products" :key="product.title">
      <article class="bg-alternative rounded-md">
        <div class="overflow-hidden">
          <router-link :to="product.linkToDetails"
            ><img
              :src="product.imgSrc"
              alt="product"
              class="transition duration-500 w-full h-60 object-cover hover:scale-105"
          /></router-link>
        </div>
        <div class="p-4">
          <h2
            class="transition font-bold leading-[2.5ex] h-[5ex] line-clamp-2 hover:text-alternativebg"
          >
            <router-link :to="product.linkToDetails" :title="product.title">{{
              product.title
            }}</router-link>
          </h2>
          <div class="flex justify-between items-center space-x-2 mt-4">
            <h3 class="font-bold text-xl">{{ new Intl.NumberFormat().format(product.price) }}.-</h3>
            <button class="btn-primary text-sm">
              <h3 class="hidden sm:block">Add to cart</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:hidden"
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
        </div>
      </article>
    </li>
  </ul>
  <ul v-else class="border border-alternativebg divide-y divide-alternativebg">
    <li v-for="product in products" :key="product.title">
      <article class="bg-alternative">
        <div class="flex divide-x divide-alternativebg">
          <h2
            class="transition font-bold leading-[2.5ex] h-[5.5ex] p-1 line-clamp-2 w-[40%] hover:text-alternativebg"
          >
            <router-link :to="product.linkToDetails" :title="product.title">{{
              product.title
            }}</router-link>
          </h2>
          <h2 class="leading-[2.5ex] h-[5.5ex] line-clamp-2 p-1 w-[40%]">
            {{ product.summary }}
          </h2>
          <div class="text-right p-2 w-[10%]">
            <h3 class="font-bold text-xl">{{ new Intl.NumberFormat().format(product.price) }}.-</h3>
          </div>
          <div class="flex justify-center items-center w-[10%]">
            <button class="btn-primary text-sm px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
        </div>
      </article>
    </li>
  </ul>
</template>
