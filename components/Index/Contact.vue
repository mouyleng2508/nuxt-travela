<template>
  <div class="pt-10 bg-blue-50">
    <div
      class="bg-cover bg-no-repeat h-5/6"
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/contact.jpg')`,
      }"
    >
      <div class="flex justify-center items-center lg:p-10 p-3 lg:py-24">
        <div
          class="
            h-64
            lg:w-3/4
            w-full
            flex flex-col
            items-center
            justify-center
            rounded-lg
            bg-white bg-opacity-90
            lg:p-10
            p-4
            px-2
            text-center
          "
        >
          <div class="font-bold text-primary lg:text-lg text-base">
            Let's stay in touch
          </div>
          <div class="lg:text-sm text-xs lg:pt-4 pt2 text-primary">
            Enjoy 15% off your first order when you join our mailing list.
          </div>

          <Subscribe class="lg:my-6 my-3" />
          <div class="text-gray-500 lg:text-sm text-xs">
            We respect your privacy, so we never share your information
          </div>
        </div>
      </div>
      <!-- <div class="bg-white">
        <div>Let's stay in touch</div>
        <div>
          Enjoy 15% off your first order when you join our mailing list.
        </div>
        <div class="relative">
          <div
            class="
              flex
              absolute
              inset-y-0
              left-0
              items-center
              pl-3
              pointer-events-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="
              block
              p-4
              pl-10
              w-full
              text-sm text-gray-900
              bg-gray-50
              rounded-lg
              border border-gray-300
              focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Search"
            required
          />
          <button
            type="submit"
            class="
              text-white
              absolute
              right-2.5
              bottom-2.5
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-4
              py-2
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            Search
          </button>
        </div>
      </div> -->
    </div>
    <div
      class="
        py-6
        flex
        md:flex-row
        flex-col
        items-center
        justify-center
        md:space-x-5 md:space-y-0
        space-y-3
        text-gray-500
      "
    >
      <div class="flex space-x-5">
        <div class="flex items-center space-x-2">
          <Instagram />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            Instagram
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <Twitter />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            Twitter
          </div>
        </div>
      </div>
      <div class="flex space-x-5">
        <div class="flex items-center space-x-2">
          <Facebook />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            Facebook
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <TikTok />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            TikTok
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Instagram from "~/components/Icons/Instagram.vue";
import Twitter from "~/components/Icons/Twitter.vue";
import Facebook from "~/components/Icons/Facebook.vue";
import TikTok from "~/components/Icons/TikTok.vue";
import Subscribe from "~/components/Reusable/Subscribe.vue";
export default {
  components: {
    Instagram,
    Twitter,
    Facebook,
    TikTok,
    Subscribe,
  },
};
</script>

<style lang="scss" scoped>
</style>