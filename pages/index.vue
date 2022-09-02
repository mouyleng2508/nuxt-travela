<template>
  <div>
    <Home />

    <Collections />

    <About />

    <Choice />

    <News />

    <Contact />

    <Footer />
  </div>
</template>

<script>
import Home from "~/components/Index/Home.vue";
import Collections from "~/components/Index/Collections.vue";
import About from "~/components/Index/About.vue";
import Choice from "~/components/Index/Choice.vue";
import News from "~/components/Index/News.vue";
import Contact from "~/components/Index/Contact.vue";
import Footer from "~/components/Index/Footer.vue";
export default {
  name: "IndexPage",
  components: {
    Home,
    Collections,
    About,
    Choice,
    News,
    Contact,
    Footer,
  },
};
</script>
