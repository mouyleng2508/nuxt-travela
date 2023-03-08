<template>
  <div class="pt-10 bg-blue-50">
    <div class="bg-cover bg-no-repeat h-5/6" :style="{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/contact.jpg')`,
    }">
      <div class="flex justify-center items-center lg:p-10 p-3 lg:py-24">
        <div class="
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
                    ">
          <div class="font-bold text-primary lg:text-xl text-base">
            Let's stay in touch
          </div>
          <div class="lg:text-sm text-xs lg:pt-2 pt-2 text-primary">
            Enjoy 15% off your first order when you join our mailing list.
          </div>

          <Subscribe class="lg:my-6 my-3" />
          <div class="text-gray-500 lg:text-sm text-xs">
            We respect your privacy, so we never share your information
          </div>
        </div>
      </div>
    </div>
    <div class="
                  py-6
                  flex
                  md:flex-row
                  flex-col
                  items-center
                  justify-center
                  md:space-x-5 md:space-y-0
                  space-y-3
                  text-gray-500
                ">
      <div class="flex space-x-5">
        <a target="_blank" href="#" class="flex items-center space-x-2">
          <Instagram />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            Instagram
          </div>
        </a>
        <a target="_blank" href="#" class="flex items-center space-x-2">
          <Twitter />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            Twitter
          </div>
        </a>
      </div>
      <div class="flex space-x-5">
        <a target="_blank" href="#" class="flex items-center space-x-2">
          <Facebook />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            Facebook
          </div>
        </a>
        <a target="_blank" href="#" class="flex items-center space-x-2">
          <TikTok />
          <div class="font-medium transform hover:underline lg:text-sm text-xs">
            TikTok
          </div>
        </a>
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

<style lang="scss" scoped></style>