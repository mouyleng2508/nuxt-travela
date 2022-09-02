<template>
  <div
    class="
      h-screen
      grid grid-cols-3 grid-rows-2
      gap-1
      lg:py-20 lg:px-32
      px-6
      bg-blue-50
    "
  >
    <div class="bg-red-100 border flex">
      <!-- <div class=" ">small text</div> -->
      <div class="p-2 h-64 w-44 shadow-lg">
        <img
          class="object-cover h-full"
          src="/collections/collection1.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="bg-primary border row-span-2 py-10 px-7 text-white">
      <div class="text-base">About <span class="text-blue-600">Us</span></div>
      <div v-for="i in 3" :key="i" class="text-xs pt-4 flex flex-col">
        <div class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          debitis eos tempore consectetur voluptates dolores fugiat. Itaque,
          quaerat illum debitis nihil laboriosam iste, laborum dolorum autem
          atque tempora est commodi.
        </div>
      </div>
      <div class="text-xs pt-4">Short text here</div>
      <div class="pt-7">
        <button class="bg-blue-500 py-2 px-7 text-white">
          <div class="text-sm font-normal capitalize">Read More</div>
        </button>
      </div>
    </div>
    <div class="bg-yellow-100 border">1</div>
    <div class="bg-gray-100 border">1</div>
    <div class="bg-green-100 border">1</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>