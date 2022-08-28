<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const cartList = ref([
  {
    prodId: "p1",
    title:
      "CPU INTEL CORE I7-12700 LGA 1700 CPU INTEL CORE I7-12700 LGA 1700 CPU INTEL CORE I7-12700 LGA 1700",
    price: 1320000,
    quantity: 1,
    imgSrc: "/img/A0141528OK_BIG_1.jpg",
  },
  {
    prodId: "p2",
    title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
    price: 1590000,
    quantity: 2,
    imgSrc: "/img/A0144243OK_BIG_1.jpg",
  },
]);

const cartTotal = computed(() => {
  return (
    cartList.value.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0) / 100
  ).toFixed(2);
});
</script>

<template>
  <div class="m-2 space-y-4">
    <h1 class="text-center font-bold text-3xl my-4">Review your cart</h1>
    <p class="text-center text-xl">Free delivery and free returns.</p>
    <ul class="space-y-3 pb-8 border-b border-gray-300">
      <li v-for="item in cartList" :key="item.prodId">
        <article
          class="md:flex md:justify-between md:items-center bg-white shadow-md shadow-gray-300 rounded-md"
        >
          <router-link
            :to="`/products/${item.prodId}`"
            :title="item.title"
            class="transition p-4 max-w-2xl inline-flex items-center hover:text-alternativebg"
          >
            <img :src="item.imgSrc" :alt="item.title" class="hidden mx-4 lg:block lg:h-32" />
            <h2 class="font-bold text-xl line-clamp-3 m-0">{{ item.title }}</h2>
          </router-link>
          <div
            class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4"
          >
            <h3 class="text-lg">{{ "฿" + (item.price / 100).toFixed(2) }}</h3>
            <div
              class="flex justify-between text-center text-lg border w-fit border-alternativebg divide-x divide-gray-400 rounded-md"
            >
              <button
                class="transition py-1 font-bold w-8 bg-alternative rounded-l-md select-none hover:bg-alternativebg hover:text-white"
                @click="if (item.quantity > 1) item.quantity--;"
              >
                -
              </button>
              <span class="py-1 w-12 select-none">{{ item.quantity }}</span>
              <button
                class="transition py-1 font-bold w-8 bg-alternative rounded-r-md select-none hover:bg-alternativebg hover:text-white"
                @click="if (item.quantity < 10) item.quantity++;"
              >
                +
              </button>
            </div>
            <h3 class="font-bold text-lg">
              {{ "฿" + ((item.price * item.quantity) / 100).toFixed(2) }}
            </h3>
            <button class="btn-link" @click="null">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </article>
      </li>
    </ul>
    <div class="md:ml-auto md:mr-4 md:w-[40rem] text-lg">
      <div class="flex justify-between">
        <div>Subtotal</div>
        <div>{{ "฿" + cartTotal }}</div>
      </div>
      <div class="flex justify-between">
        <div>Shipping</div>
        <div>FREE</div>
      </div>
      <div class="flex justify-between pt-4 mt-4 border-t border-gray-300 font-bold text-xl">
        <div>Total</div>
        <div>{{ "฿" + cartTotal }}</div>
      </div>
    </div>
    <div class="text-center md:text-right md:ml-auto md:mr-4 md:w-[40rem]">
      <div>
        <button class="btn-primary px-24">Check Out</button>
      </div>
      <!-- <div class="space-y-4">
        <p>Please login or signup before check out.</p>
        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <button class="btn-alternative w-full md:w-fit">Login</button>
          <button class="btn-primary w-full md:w-fit">Signup</button>
        </div>
      </div> -->
    </div>
  </div>
</template>
