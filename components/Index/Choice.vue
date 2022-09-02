<template>
  <div
    class="lg:grid lg:grid-cols-2 h-screen lg:bg-none bg-primary lg:pt-0 pt-44"
  >
    <div
      class="bg-no-repeat bg-cover bg-center lg:block hidden"
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
        lg:px-20
        md:px-16
        px-6
        text-white
      "
    >
      <div
        class="font-bold lg:text-4xl text-2xl py-3"
        data-aos="fade-right"
        data-aos-duration="1900"
      >
        We know <br />
        <span class="text-blue-500">& understand</span> your <br />great choice
      </div>
      <div
        class="text-xs text-gray-200"
        data-aos="fade-right"
        data-aos-duration="2100"
      >
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