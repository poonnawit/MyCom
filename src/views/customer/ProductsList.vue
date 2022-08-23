<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import SidebarCategory from "../../components/layout/SidebarCategory.vue";

const productsViewMode = ref("grid");
</script>

<template>
  <div class="flex">
    <SidebarCategory></SidebarCategory>
    <section>
      <h1 class="text-center font-bold text-2xl my-10">Products List</h1>
      <ul class="flex items-center w-fit mx-auto my-5 border border-primary rounded-md">
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
      <ul class="grid grid-cols-4 gap-2 my-2 mx-auto">
        <li>
          <ProductCard imgSource="/img/A0141528OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0144243OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0141528OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0144243OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0141528OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0144243OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0141528OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0144243OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0141528OK_BIG_1.jpg"></ProductCard>
        </li>
        <li>
          <ProductCard imgSource="/img/A0144243OK_BIG_1.jpg"></ProductCard>
        </li>
      </ul>
    </section>
  </div>
</template>
