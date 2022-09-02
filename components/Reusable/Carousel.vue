<template>
  <div class="my-16 mx-16">
    <VueSlickCarousel v-bind="settings">
      <div class="border h-24 w-40">
        <img
          class="h-20 object-contain mx-auto"
          src="~static/Choice/choice1.jpg"
        />
      </div>
      <div class="">
        <img
          class="h-20 object-contain mx-auto"
          src="~static/Choice/choice2.jpg"
        />
      </div>
      <div class="">
        <img
          class="h-20 object-contain mx-auto"
          src="~static/Choice/choice3.jpg"
        />
      </div>
      <div class="">
        <img
          class="h-20 object-contain mx-auto"
          src="~static/Choice/choice4.jpg"
        />
      </div>
      <div class="">
        <img
          class="h-20 object-contain mx-auto"
          src="~static/Choice/choice5.jpg"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>