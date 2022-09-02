<template>
  <div class="grid grid-cols-2 h-screen">
    <div
      class="bg-no-repeat bg-cover bg-center"
      :style="{
        backgroundImage: ` url('/Choice/great_choice.jpg')`,
      }"
    ></div>
    <div
      class="
        bg-primary
        flex flex-col
        justify-center
        items-start
        px-20
        text-white
      "
    >
      <div class="font-bold text-4xl py-3">
        We know <br />
        <span class="text-blue-500">& understand</span> your <br />great choice
      </div>
      <div class="text-xs text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        distinctio sed fugiat, id at, mollitia laboriosam placeat nulla earum
        nisi sit assumenda optio in ipsum ex ut provident aliquid dolorem!
      </div>
      <div class="pt-4">
        <!-- <Carousel /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/Reusable/Carousel.vue";
export default {
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
</style>