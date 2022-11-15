<template>
  <div class="bg-primary lg:py-16 py-10 lg:px-20 md:px-16 px-6">
    <div class="grid lg:grid-cols-4 grid-cols-1 lg:gap-8">
      <div class="mb-4">
        <h2 class="mb-3 lg:text-base text-sm font-semibold text-white">
          Contact Info
        </h2>
        <ul class="text-gray-400">
          <li class="text-sm hover:underline capitalize font-light">
            Phone: +855 12 345 678 9
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Address: Phnom Penh, Cambodia
          </li>
        </ul>

        <div class="text-xs text-gray-400 font-light lg:pt-8 pt-4 pb-3">
          We accept:
        </div>
        <Payment class="mb-7" />
      </div>
      <div class="mb-4">
        <h2 class="mb-3 lg:text-base text-sm font-semibold text-white">
          Get help
        </h2>
        <ul class="text-gray-400">
          <li
            class="
              lg:text-sm
              text-xs
              pb-1
              hover:underline
              capitalize
              font-light
            "
          >
            Delivery Information
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              pb-1
              hover:underline
              capitalize
              font-light
            "
          >
            Sale Term and Conditions
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              pb-1
              hover:underline
              capitalize
              font-light
            "
          >
            Return & Refunds
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              pb-1
              hover:underline
              capitalize
              font-light
            "
          >
            Privacy Notice
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              pb-1
              hover:underline
              capitalize
              font-light
            "
          >
            Shopping FAQs
          </li>
        </ul>
      </div>

      <div class="mb-4">
        <h2 class="mb-3 lg:text-base text-sm font-semibold text-white">
          Popular Categories
        </h2>
        <ul class="text-gray-400">
          <li
            class="
              lg:text-sm
              text-xs
              hover:underline
              pb-1
              capitalize
              font-light
            "
          >
            Home(45)
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              hover:underline
              pb-1
              capitalize
              font-light
            "
          >
            Door (278)
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              hover:underline
              pb-1
              capitalize
              font-light
            "
          >
            House(64)
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              hover:underline
              pb-1
              capitalize
              font-light
            "
          >
            Gallery(129)
          </li>
          <li
            class="
              lg:text-sm
              text-xs
              hover:underline
              pb-1
              capitalize
              font-light
            "
          >
            Chairs(3)
          </li>
        </ul>
      </div>

      <!-- get in touch -->
      <div class="mb-4">
        <h2 class="mb-3 lg:text-base text-sm font-semibold text-white">
          Let's stay in touch
        </h2>

        <Subscribe />

        <div class="pt-3 text-gray-500 lg:text-sm text-xs">
          Keep up to date with our latest news and special offers.
        </div>
      </div>
    </div>

    <div class="lg:pt-10 pt-5">
      <hr />
    </div>

    <!-- copy right -->
    <div
      class="
        flex
        lg:flex-row
        flex-col
        lg:justify-between
        justify-center
        pt-4
        text-gray-400
        font-light
        lg:text-sm
        text-xs
      "
    >
      <div>©2022, All rights reserved</div>
      <div>
        Developed by
        <span class="hover:underline"
          ><a href="http://mouyleng-h.me/" target="_blank"
            >Heng Mouyleng</a
          ></span
        >
        using
        <span class="hover:underline"
          ><a href="https://nuxtjs.org/" target="_blank">Nuxtjs</a>
        </span>
        x
        <span class="hover:underline"
          ><a href="https://tailwindcss.com/" target="_blank">Tailwind</a></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Payment from "~/components/Icons/Payment.vue";
import Subscribe from "~/components/Reusable/Subscribe.vue";
export default {
  components: {
    Payment,
    Subscribe,
  },
};
</script>

<style lang="scss" scoped>
</style>