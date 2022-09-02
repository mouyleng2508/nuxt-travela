<template>
  <div>
    <div
      id="navbar"
      :class="
        scrollPosition == 0
          ? 'w-full flex items-center justify-between px-4 lg:px-20 py-3 fixed z-50  navbar  '
          : 'w-full flex items-center justify-between px-4 lg:px-20 py-3 fixed z-50 bg-white filter drop-shadow-lg navbar'
      "
    >
      <!-- ATTCAPITAL LOGO -->
      <div class="">
        <NuxtLink to="/" class="flex items-center">
          <img
            class="md:h-10 h-8"
            src="~static/logo/logo1.png"
            alt="Travelus_logo.png"
          />
          <div
            :class="`uppercase md:text-base text-sm font-bold ${
              scrollPosition == 0 ? 'text-white' : 'text-black '
            }`"
          >
            Travelus
          </div>
        </NuxtLink>
      </div>

      <!-- Burger Icon -->
      <!-- <MenuIcon
        :toggleDrawer="toggleDrawer"
        class="lg:hidden ml-2"
        :class="` ${scrollPosition == 0 ? 'text-white' : 'text-black '}`"
      /> -->

      <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-12 md:mt-0">
          <NuxtLink
            v-for="(item, n) in navItems"
            :key="n"
            :to="item.to"
            @click="drawer = false"
            class="
              block
              py-2
              pr-4
              pl-3
              text-xs
              md:border-0
              hover:text-primary
              md:p-0
            "
            :class="` ${scrollPosition == 0 ? 'text-white' : 'text-black '}`"
            active-class="text-primary border-b border-primary font-bold "
            exact=""
          >
            <li>{{ item.title }}</li>
          </NuxtLink>

          <!-- <div class="mr-6 cursor-pointer">
            <button
              @click="
                $colorMode.preference =
                  $colorMode.preference == 'dark' ? 'light' : 'dark'
              "
              v-if="$colorMode.preference == 'dark'"
            >
              <Moon :scrollPosition="scrollPosition" />
            </button>
            <button
              @click="
                $colorMode.preference =
                  $colorMode.preference == 'dark' ? 'light' : 'dark'
              "
              v-else
            >
              <Sun :scrollPosition="scrollPosition" />
            </button>
          </div> -->
        </ul>
      </div>
    </div>

    <!-- start drawer -->
    <div v-show="drawer" class="lg:hidden block">
      <div
        class="
          w-full
          flex flex-col
          items-start
          px-4
          py-3
          fixed
          z-50
          top-0
          left-0
          bg-white
          filter
          drop-shadow-lg
          transform
          duration-1000
          ease-out
        "
      >
        <div class="flex justify-between w-full">
          <div>
            <NuxtLink to="/" class="flex items-center">
              <img
                class="md:h-10 h-8"
                src="~static/logo/logo1.png"
                alt="ATTCAPITAL_LOGO_LIGHT.png"
              />
              <div class="uppercase md:text-base text-sm text-black font-bold">
                Tranvelus
              </div>
            </NuxtLink>
          </div>

          <!-- close drawer -->
          <div @click="toggleDrawer">
            <svg
              style="width: 24px; height: 24px"
              class="text-primary"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
              />
            </svg>
          </div>
        </div>

        <div class="w-full border-b border-primary py-1"></div>

        <ul
          class="
            flex flex-col
            justify-center
            items-center
            w-full
            md:space-y-0
            space-y-2
            p-4
            py-3
            md:flex-row md:space-x-12 md:mt-0
          "
        >
          <NuxtLink
            v-for="(item, n) in navItems"
            :key="n"
            :to="item.to"
            class="block pt-4 text-xs hover:text-primary text-center text-black"
            active-class="text-primary border-b border-primary font-bold "
            exact=""
          >
            <li @click="drawer = false">{{ item.title }}</li>
          </NuxtLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import MenuIcon from "~/components/icons/Menu.vue";

//icons
import Moon from "@/components/Icons/Moon.vue";
import Sun from "@/components/Icons/Sun.vue";
export default {
  components: {
    // MenuIcon,
    Moon,
    Sun,
  },
  data() {
    return {
      drawer: false,
      scrollPosition: 0,
      lastScroll: 0,
      navItems: [
        { title: "Home", to: "/" },
        { title: "New Estate", to: "/estate" },
        { title: "Latest", to: "/latest" },
        { title: "Tops", to: "/tops" },
        { title: "Ballerina", to: "/ballerina" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.getElementById("navbar");
      this.lastScroll = scrollTop;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style >
.navbar {
  transition: top 0.5s ease-in-out;
}
</style>