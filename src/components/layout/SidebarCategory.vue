<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const categoryList = [
  "Laptop",
  "CPU",
  "Mainboard",
  "RAM",
  "SSD / Hard Disk",
  "Graphics Card",
  "PSU",
  "Case",
  "Monitor",
  "Mouse / Pad",
  "Speaker",
  "UPS",
];
const isExpanded = ref(false);
</script>

<template>
  <section
    class="bg-alternativebg m-2 p-4 rounded-lg shadow-sm min-w-[15rem] h-full overflow-hidden"
  >
    <ul class="space-y-1 my-2">
      <div class="lg:h-full lg:block" :class="{ 'h-0': !isExpanded, hidden: !isExpanded }">
        <li v-for="cat in categoryList" :key="cat">
          <button
            class="transition w-full text-left text-white px-2 py-2 rounded-lg hover:bg-alternative hover:text-black"
            @click="isExpanded = false"
          >
            {{ cat }}
          </button>
        </li>
      </div>
      <li>
        <button
          class="transition w-full text-white px-2 py-2 rounded-lg lg:hidden hover:bg-alternative hover:text-black"
          @click="isExpanded = !isExpanded"
        >
          <svg
            v-if="!isExpanded"
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
        </button>
      </li>
    </ul>
  </section>
</template>
