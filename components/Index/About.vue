<template>
  <div
    class="
      h-screen
      lg:grid lg:grid-cols-3
      gap-1
      lg:py-10 lg:px-20
      pt-44
      lg:bg-blue-50
      bg-primary
    "
  >
    <div
      class="
        border
        self-center
        place-self-end
        shadow-lg
        lg:flex
        flex-col
        space-y-1
        hidden
      "
    >
      <!-- <div class=" ">small text</div> -->

      <div class="lg:w-44 xl:w-52">
        <img class="object-contain" src="/collections/collection1.jpg" alt="" />
      </div>
      <div class="lg:w-44 xl:w-52">
        <img class="object-contain" src="/collections/collection1.jpg" alt="" />
      </div>
    </div>
    <div class="bg-primary py-10 text-white px-6">
      <div class="text-base font-bold">
        About <span class="text-blue-600">Us</span>
      </div>
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
    <div class="lg:block hidden place-self-center">
      <div class="">
        <div
          class="bg-cover bg-no-repeat bg-center h-80 lg:w-64 xl:w-full"
          :style="{
            backgroundImage: ` url('/About/venice.jpg')`,
          }"
        ></div>
        <div class="pt-3 px-2 font-bold">
          <div>Soft & Cozy</div>
          <div class="text-secondary">Estate Awesome</div>
          <div class="text-xs font-light text-primary pt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            cupiditate fuga ex aut dolore facere omnis asperiores minima
            deleniti voluptates tenetur perspiciatis inventore eos similique at,
            ea, ipsum iste et!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>