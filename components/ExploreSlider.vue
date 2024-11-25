<script setup>
const locations = [
  { title: "ولاية بوشر", img: "1.webp" },
  { title: "ولاية صلالة", img: "2.png" },
  { title: "ولاية مسقط", img: "3.png" },
  { title: "ولاية العامرات", img: "4.png" },
  { title: "محافظة ظفار", img: "5.jpeg" },
];
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="(slide, idx) in locations" :key="idx">
        <ExploreCard :title="slide.title" :img="slide.img" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style scoped></style>
