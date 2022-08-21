<script setup>
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
</script>

<template>
  <section class="bg-alternativebg m-2 p-4 rounded-lg shadow-sm max-w-xs">
    <ul class="space-y-1 my-2">
      <li v-for="cat in categoryList" :key="cat">
        <button
          class="transition w-full text-left text-white px-2 py-2 rounded-lg hover:bg-alternative hover:text-black focus:bg-alternative focus:text-black"
        >
          {{ cat }}
        </button>
      </li>
    </ul>
  </section>
</template>
