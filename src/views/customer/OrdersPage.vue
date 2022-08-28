<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
const thbPrice = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 2,
});

const dateTime = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "long",
  timeStyle: "medium",
});

const ordersList = ref([
  {
    orderId: "o1",
    timestamp: 1661703223265,
    status: "shipped",
    total: 2910000,
    showItems: false,
    items: [
      {
        prodId: "p1",
        title: "CPU INTEL CORE I7-12700 LGA 1700",
        imgSrc: "/img/A0141528OK_BIG_1.jpg",
        price: 1320000,
        quantity: 1,
      },
      {
        prodId: "p2",
        title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
        imgSrc: "/img/A0144243OK_BIG_1.jpg",
        price: 1590000,
        quantity: 2,
      },
    ],
  },
  {
    orderId: "o2",
    timestamp: 1661703200000,
    status: "preparing",
    total: 1320000,
    showItems: false,
    items: [
      {
        prodId: "p1",
        title: "CPU INTEL CORE I7-12700 LGA 1700",
        imgSrc: "/img/A0141528OK_BIG_1.jpg",
        price: 1320000,
        quantity: 1,
      },
    ],
  },
]);
</script>

<template>
  <div class="m-2">
    <h1 class="text-center font-bold text-3xl my-16">Your orders history</h1>
    <ul class="space-y-3">
      <li v-for="order in ordersList" :key="order.orderId">
        <article
          class="transition p-4 bg-white shadow-md hover:shadow-lg hover:scale-[1.001] hover:cursor-pointer shadow-gray-300 rounded-md"
          @click="order.showItems = !order.showItems"
        >
          <div
            class="md:flex md:justify-between md:items-center px-4"
          >
            <div class="inline-flex">
              <div
                v-if="order.status === 'preparing'"
                class="inline-flex text-yellow-500 w-32 space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>Preparing</div>
              </div>
              <div
                v-else-if="order.status === 'shipped'"
                class="inline-flex text-green-500 w-32 space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z"
                  />
                  <path
                    d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z"
                  />
                  <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
                <div>Shipped</div>
              </div>
              <div
                v-else-if="order.status === 'cancel'"
                class="inline-flex text-red-500 w-32 space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div>Cancel</div>
              </div>
              <div>{{ `#${order.orderId}` }}</div>
            </div>
            <div class="inline-flex">
              <div>{{ dateTime.format(order.timestamp) }}</div>
              <div class="font-bold text-xl w-48 text-end">
                {{ thbPrice.format(order.total / 100) }}
              </div>
            </div>
          </div>
          <div
            v-if="order.showItems"
            class="mt-2 pt-2 border-t border-gray-200 divide-y divide-gray-200"
          >
            <article v-for="item in order.items" :key="item.prodId" class="flex justify-between cursor-default" @click="order.showItems = !order.showItems">
              <router-link
                :to="`/products/${item.prodId}`"
                :title="item.title"
                class="transition p-4 max-w-2xl inline-flex items-center hover:text-alternativebg"
              >
                <img :src="item.imgSrc" :alt="item.title" class="hidden mx-4 lg:block lg:h-16" />
                <h2 class="font-bold text-lg line-clamp-3 m-0">{{ item.title }}</h2>
              </router-link>
              <div
                class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4"
              >
                <h3 class="text-lg">{{ thbPrice.format(item.price / 100) }}</h3>
                <div>{{ `x ${item.quantity}` }}</div>
                <transition name="price-change" mode="out-in">
                  <div :key="item.quantity" class="font-bold text-lg">
                    {{ thbPrice.format((item.price * item.quantity) / 100) }}
                  </div>
                </transition>
              </div>
            </article>
          </div>
          <div
            class="w-full hover:text-alternativebg"
          >
            <svg
              v-if="!order.showItems"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mx-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mx-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
