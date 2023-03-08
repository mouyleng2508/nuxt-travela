<template>
  <div class="lg:h-screen bg-blue-50 lg:px-16 md:px-24 px-4 lg:py-16 py-10">
    <div class="lg:text-4xl text-2xl font-bold text-center" data-aos="zoom-in" data-aos-duration="2100">
      Our Latest <span class="text-secondary font-bold">News</span>
    </div>
    <div class="text-gray-500 text-center pb-6 pt-2 text-xs lg:text-sm" data-aos="zoom-in" data-aos-duration="1900">
      There is an anti-aging revolution occurring in healthcare today and that
      you are the main bene
    </div>
    <div class="lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-1">
      <div class="
              border
              lg:col-span-2
              bg-no-repeat bg-center bg-cover
              h-64
              w-full
              flex flex-col
              justify-end
              items-start
              p-7
              text-white
              capitalize
             
            " :style="{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/crosswalk.jpg')`,
            }">
        <Card />
      </div>
      <div class="
              border
              lg:col-span-2
              bg-no-repeat bg-center bg-cover
              h-64
              w-full
              flex flex-col
              justify-end
              items-start
              p-7
              text-white
              capitalize
            " :style="{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/friends.jpg')`,
            }">
        <Card />
      </div>
      <div class="
              border
              lg:col-span-2
              bg-no-repeat bg-center bg-cover
              h-64
              w-full
              flex flex-col
              justify-end
              items-start
              p-7
              text-white
              capitalize
            " :style="{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/discussion.jpg')`,
            }">
        <Card />
      </div>
      <div class="
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
            " :style="{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/street.jpg')`,
            }">
        <Card />
      </div>
      <div class="
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
            " :style="{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/News/road.jpg')`,
            }">
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

<style lang="scss" scoped></style>