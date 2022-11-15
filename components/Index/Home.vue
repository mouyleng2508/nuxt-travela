<template>
  <div class="lg:grid lg:grid-cols-2 h-screen lg:bg-none bg-primary">
    <div
      class="
        bg-primary
        flex flex-col
        justify-center
        items-start
        lg:px-20
        md:px-16
        px-6
        lg:py-16
        pt-44
        text-white
      "
    >
      <div
        class="uppercase text-sm flex"
        data-aos="fade-down"
        data-aos-duration="1900"
      >
        <svg
          class="h-5 w-5 transform rotate-45 text-blue-500"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M1,21H23L12,2" />
        </svg>
        <svg
          class="h-5 w-5 transform rotate-90 text-blue-500"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M1,21H23L12,2" />
        </svg>
        <div class="pl-4 text-sm text-gray-200">Bengle Home Balcony</div>
      </div>
      <div
        class="font-bold lg:text-4xl text-2xl capitalize py-3"
        data-aos="fade-up"
        data-aos-duration="1900"
      >
        Now it's easy to find <br />
        <span class="text-blue-500">your home</span>
      </div>
      <div
        class="text-xs text-gray-300"
        data-aos="fade-up"
        data-aos-duration="2900"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        distinctio sed fugiat, id at, mollitia laboriosam placeat nulla earum
        nisi sit assumenda optio in ipsum ex ut provident aliquid dolorem!
      </div>
      <div class="pt-4" data-aos="fade-up-left" data-aos-duration="2800">
        <button
          class="
            bg-blue-500
            py-3
            px-6
            flex
            space-x-2
            items-center
            justify-center
          "
        >
          <div class="lg:text-sm text-xs font-medium">Get Started</div>
          <svg class="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="bg-no-repeat bg-cover bg-center hidden lg:block"
      :style="{
        backgroundImage: ` url('/background/home.jpg')`,
      }"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>