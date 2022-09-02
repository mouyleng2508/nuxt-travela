<template>
  <div class="bg-primary py-16 lg:px-20 px-6">
    <div class="grid lg:grid-cols-4 grid-cols-1 lg:gap-8">
      <div>
        <h2 class="mb-6 text-base font-semibold text-white">Contact Info</h2>
        <ul class="text-gray-400">
          <li class="text-sm hover:underline capitalize font-light">
            Phone: +855 12 345 678 9
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Address: Phnom Penh, Cambodia
          </li>
        </ul>

        <div class="text-xs text-gray-400 font-light pt-8 pb-4">We accept:</div>
        <Payment />
      </div>
      <div>
        <h2 class="mb-6 text-base font-semibold text-white">Get help</h2>
        <ul class="text-gray-400">
          <li class="text-sm hover:underline capitalize font-light">
            Delivery Information
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Sale Term and Conditions
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Return & Refunds
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Privacy Notice
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Shopping FAQs
          </li>
        </ul>
      </div>

      <div>
        <h2 class="mb-6 text-base font-semibold text-white">
          Popular Categories
        </h2>
        <ul class="text-gray-400">
          <li class="text-sm hover:underline capitalize font-light">
            Home(45)
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Door (278)
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            House(64)
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Gallery(129)
          </li>
          <li class="text-sm hover:underline capitalize font-light">
            Chairs(3)
          </li>
        </ul>
      </div>

      <!-- get in touch -->
      <div>
        <h2 class="mb-6 text-base font-semibold text-white">
          Let's stay in touch
        </h2>

        <div class="flex border border-secondary">
          <input
            class="
              w-full
              appearance-none
              border-b
              bg-white
              py-2
              px-4
              text-gray-700 text-xs
              focus:outline-none focus:ring-0
            "
            placeholder="Your Email Address"
            type="text"
          />
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
            <div class="text-xs font-medium text-white">Subscribe</div>
          </button>
        </div>

        <div class="pt-3 text-gray-500 text-sm">
          Keep up to date with our latest news and special offers.
        </div>
      </div>
    </div>

    <div class="pt-10">
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
            >Heng Mouleng</a
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
export default {
  components: {
    Payment,
  },
};
</script>

<style lang="scss" scoped>
</style>