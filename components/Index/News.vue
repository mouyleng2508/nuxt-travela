<template>
  <div class="h-screen bg-blue-50 lg:px-40 py-16">
    <div class="text-3xl font-medium text-center">
      Our Latest <span class="text-secondary">News</span>
    </div>
    <dir class="text-gray-500 text-center">
      There is an anti-aging revolution occurring in healthcare today and that
      you are the main bene
    </dir>
    <div class="grid grid-cols-4 grid-rows-2 gap-1">
      <div
        class="
          border
          col-span-2
          bg-no-repeat bg-center bg-cover
          h-64
          w-full
          flex flex-col
          justify-end
          items-start
          p-7
          text-white
          capitalize
        "
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/crosswalk.jpg')`,
        }"
      >
        <div class="font-light text-xs">Real Estate News</div>
        <div class="text-xl font-bold">
          3 Steps to get that quick summer <br />
          glow head to toes
        </div>
        <div class="pt-3">
          <button
            class="
              bg-secondary
              py-2
              px-5
              flex
              space-x-2
              items-center
              justify-center
            "
          >
            <div class="text-sm font-medium">Read more</div>
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
        class="
          border
          col-span-2
          bg-no-repeat bg-center bg-cover
          h-64
          w-full
          flex flex-col
          justify-end
          items-start
          p-7
          text-white
          capitalize
        "
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/friends.jpg')`,
        }"
      >
        <Card />
      </div>
      <div
        class="
          border
          col-span-2
          bg-no-repeat bg-center bg-cover
          h-64
          w-full
          flex flex-col
          justify-end
          items-start
          p-7
          text-white
          capitalize
        "
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/discussion.jpg')`,
        }"
      >
        <Card />
      </div>
      <div
        class="
          border
          bg-no-repeat bg-center bg-cover
          h-64
          w-full
          flex flex-col
          justify-end
          items-start
          p-7
          text-white
          capitalize
        "
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/street.jpg')`,
        }"
      >
        <Card />
      </div>
      <div
        class="
          border
          bg-no-repeat bg-center bg-cover
          h-64
          w-full
          flex flex-col
          justify-end
          items-start
          p-7
          text-white
          capitalize
        "
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/road.jpg')`,
        }"
      >
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Reusable/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
</style>