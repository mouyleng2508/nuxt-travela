<template>
  <div class="grid grid-cols-2 h-screen">
    <div
      class="
        bg-primary
        flex flex-col
        justify-center
        items-start
        px-44
        text-white
      "
    >
      <div class="uppercase text-sm flex">
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
      <div class="font-bold text-4xl capitalize py-3">
        Now it's easy to find <span class="text-blue-500">your home</span>
      </div>
      <div class="text-xs text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        distinctio sed fugiat, id at, mollitia laboriosam placeat nulla earum
        nisi sit assumenda optio in ipsum ex ut provident aliquid dolorem!
      </div>
      <div class="pt-4">
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
          <div class="text-sm font-medium">Get Started</div>
          <svg style="width: 16px; height: 16px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="bg-no-repeat bg-cover bg-center"
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