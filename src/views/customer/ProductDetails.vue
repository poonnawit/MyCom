<script setup>
import { ref } from "@vue/reactivity";

const productQuantity = ref(1);
</script>

<template>
  <section class="m-3 space-y-4">
    <FormCard class="md:flex md:justify-between p-4">
      <div class="max-w-md">
        <img src="/img/A0141528OK_BIG_1.jpg" alt="" />
      </div>
      <div class="md:w-[35%] p-2">
        <h2 class="font-bold text-2xl">VGA ASUS RADEON RX 6650XT DUAL O8G - 8GB GDDR6</h2>
        <h2 class="font-bold text-center text-3xl my-8 md:my-16">15,900.-</h2>
        <div
          class="flex justify-between text-center text-lg border border-alternativebg divide-x divide-gray-400 w-fit mx-auto rounded-md"
        >
          <button
            class="transition py-1 font-bold w-8 bg-alternative rounded-l-md hover:bg-alternativebg hover:text-white"
            @click="if (productQuantity > 1) productQuantity--;"
          >
            -
          </button>
          <span class="py-1 w-12">{{ productQuantity }}</span>
          <button
            class="transition py-1 font-bold w-8 bg-alternative rounded-r-md hover:bg-alternativebg hover:text-white"
            @click="if (productQuantity < 10) productQuantity++;"
          >
            +
          </button>
        </div>
        <div class="text-center mt-2 space-x-2">
          <button class="btn-alternative">Buy Now</button>
          <button class="btn-primary">Add to cart</button>
        </div>
      </div>
    </FormCard>
    <FormCard class="p-4 space-y-6">
      <article class="space-y-2">
        <h2 class="font-bold text-2xl p-1 bg-alternative rounded-sm">Summary</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum ducimus fugit
          sunt eaque laboriosam necessitatibus totam, odit doloremque quo.
        </p>
      </article>
      <article class="space-y-2">
        <h2 class="font-bold text-2xl p-1 bg-alternative rounded-sm">Description</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis qui saepe quam commodi at?
          Expedita laborum nihil, sequi natus delectus a, beatae vero enim nostrum iure atque. Odio
          tenetur nemo non cumque harum quibusdam adipisci dolore, libero eveniet voluptatibus
          necessitatibus, amet in culpa corrupti et delectus dolores similique dolorem quaerat.
        </p>
      </article>
    </FormCard>
  </section>
</template>
