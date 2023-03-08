<template>
  <div class="h-screen">
    <Navbar />
    <div class="h-full">
      <Nuxt class="min-h-screen" />
    </div>

    <!-- Scroll to Top -->
    <div v-show="scY > 300" @click="scrollToTop" class="
          fixed
          md:bottom-16
          bottom-8
          md:right-16
          right-8
          flex flex-col
          items-center animate-bounce
        ">
      <div class="bg-secondary p-3 text-white rounded-full shadow-xl">
        <svg class="h-6 w-6 md:h-5 md:w-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/layout/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      drawer: false,
      topIcon: false,
      scTimer: 0,
      scY: 0,
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped></style>