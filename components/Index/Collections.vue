<template>
  <div
    class="
      lg:h-screen lg:flex lg:space-x-10
      justify-center
      items-center
      lg:px-32
      px-6
      bg-blue-50
    "
  >
    <div class="w-1/3">
      <div class="text-sm text-black font-medium">Collection in 2022</div>
      <div class="font-bold text-4xl capitalize py-3">
        Rich Home <br /><span class="text-blue-500">Your First Choice</span
        ><br />
        from $198k
      </div>
      <div class="text-xs text-black">
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
            text-white
          "
        >
          <div class="text-sm font-medium capitalize">Go Shopping</div>
          <svg style="width: 16px; height: 16px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="w-2/3 flex items-center space-x-4">
      <div class="p-2 h-64 w-44 shadow-lg">
        <img
          class="object-cover h-full"
          src="/collections/collection1.jpg"
          alt=""
        />
      </div>
      <div class="p-2 h-96 w-56 shadow-lg">
        <img
          class="object-cover h-full"
          src="/collections/collection1.jpg"
          alt=""
        />
      </div>
      <div class="p-2 h-64 w-44 shadow-lg">
        <img
          class="object-cover h-full"
          src="/collections/collection1.jpg"
          alt=""
        />
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

<style lang="scss" scoped>
</style>