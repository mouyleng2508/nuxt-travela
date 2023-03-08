<template>
  <div class="
          h-screen
          lg:flex lg:space-x-10
          justify-center
          items-center
          lg:px-20
          md:px-16
          px-6
          lg:py-16
          pt-44
          bg-blue-50
        ">
    <div class="lg:w-1/3">
      <div class="text-sm text-black font-medium" data-aos="zoom-in" data-aos-duration="1900">
        Collection in 2022
      </div>
      <div class="font-bold lg:text-4xl text-2xl capitalize py-3" data-aos="fade-up" data-aos-duration="2100">
        Rich Home <br /><span class="text-secondary">Your First Choice</span><br />
        from $198k
      </div>
      <div class="text-xs text-black" data-aos="zoom-in" data-aos-duration="2100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        distinctio sed fugiat, id at, mollitia laboriosam placeat nulla earum
        nisi sit assumenda optio in ipsum ex ut provident aliquid dolorem!
      </div>
      <div class="pt-4" data-aos="fade-up-left" data-aos-duration="1800">
        <button class="btn w-44 flex items-center justify-center bg-blue-500 py-3
                                    px-6 lg:text-sm text-xs font-medium text-white">
          <div>Go Shopping</div>
          <svg class="h-4 w-4 svg-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </button>
      </div>
    </div>
    <div class="lg:w-2/3 hidden lg:flex items-center lg:space-x-4 space-x-2">
      <div class="p-2 h-64 w-44 shadow-lg">
        <img class="object-cover h-full" src="/Collections/collection1.jpg" alt="" />
      </div>
      <div class="p-2 h-96 w-56 shadow-lg">
        <img class="object-cover h-full" src="/Collections/collection2.jpg" alt="" />
      </div>
      <div class="p-2 h-64 w-44 shadow-lg">
        <img class="object-cover h-full" src="/Collections/collection3.jpg" alt="" />
      </div>
      <!-- <div class="transform rotate-90 capitalize text-gray-500 font-light">
        All Fashion
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>