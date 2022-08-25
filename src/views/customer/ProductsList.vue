<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import SidebarCategory from "../../components/layout/SidebarCategory.vue";

const products = [
  {
    title:
      "CPU INTEL CORE I7-12700 LGA 1700 CPU INTEL CORE I7-12700 LGA 1700 CPU INTEL CORE I7-12700 LGA 1700",
    summary:
      "2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770 2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770 2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770",
    price: 15,
    imgSrc: "/img/A0141528OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
    summary: "8GB / GDDR6 / 128-bit / 1xHDMI / 3xDisplayPort",
    price: 15900,
    imgSrc: "/img/A0144243OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "CPU INTEL CORE I7-12700 LGA 1700",
    summary: "2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770",
    price: 13200,
    imgSrc: "/img/A0141528OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
    summary: "8GB / GDDR6 / 128-bit / 1xHDMI / 3xDisplayPort",
    price: 15900,
    imgSrc: "/img/A0144243OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "CPU INTEL CORE I7-12700 LGA 1700",
    summary: "2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770",
    price: 13200,
    imgSrc: "/img/A0141528OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
    summary: "8GB / GDDR6 / 128-bit / 1xHDMI / 3xDisplayPort",
    price: 15900,
    imgSrc: "/img/A0144243OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "CPU INTEL CORE I7-12700 LGA 1700",
    summary: "2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770",
    price: 13200,
    imgSrc: "/img/A0141528OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
    summary: "8GB / GDDR6 / 128-bit / 1xHDMI / 3xDisplayPort",
    price: 15900,
    imgSrc: "/img/A0144243OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "CPU INTEL CORE I7-12700 LGA 1700",
    summary: "2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770",
    price: 13200,
    imgSrc: "/img/A0141528OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
    summary: "8GB / GDDR6 / 128-bit / 1xHDMI / 3xDisplayPort",
    price: 15900,
    imgSrc: "/img/A0144243OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "CPU INTEL CORE I7-12700 LGA 1700",
    summary: "2.1 GHz / Cores 12 / Threads 20 / Intel UHD Graphics 770",
    price: 13200,
    imgSrc: "/img/A0141528OK_BIG_1.jpg",
    linkToDetails: "#",
  },
  {
    title: "VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6",
    summary: "8GB / GDDR6 / 128-bit / 1xHDMI / 3xDisplayPort",
    price: 15900,
    imgSrc: "/img/A0144243OK_BIG_1.jpg",
    linkToDetails: "#",
  },
];

const productsViewMode = ref("grid");
</script>

<template>
  <div class="lg:flex">
    <SidebarCategory></SidebarCategory>
    <section class="w-full mx-2">
      <div class="flex justify-between my-7">
        <h1 class="text-center font-bold text-2xl">Products List</h1>
        <ul class="flex items-center w-fit border border-primary rounded-md">
          <li class="flex">
            <input
              type="radio"
              name="views-toggle"
              id="grid"
              class="hidden peer"
              value="grid"
              v-model="productsViewMode"
              checked
            />
            <label
              for="grid"
              class="transition px-2 py-1 rounded-l-md cursor-pointer hover:bg-alternative peer-checked:bg-alternativebg peer-checked:text-white"
              ><svg
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </label>
          </li>
          <li class="flex">
            <input
              type="radio"
              name="views-toggle"
              id="list"
              class="hidden peer"
              value="list"
              v-model="productsViewMode"
            />
            <label
              for="list"
              class="transition px-2 py-1 rounded-r-md cursor-pointer hover:bg-alternative peer-checked:bg-alternativebg peer-checked:text-white"
              ><svg
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
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </label>
          </li>
        </ul>
      </div>
      <ProductItems :products="products" :mode="productsViewMode"></ProductItems>
    </section>
  </div>
</template>
