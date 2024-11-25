<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="(slide, idx) in locations" :key="idx">
        <TripsCard :img="slide.img" :title="slide.title" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup>
const containerRef = ref(null);

const swiper = useSwiper(containerRef, {
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2, spaceBetween: 35 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
  },
});

const locations = [
  { title: "ولاية بوشر", img: "1.webp" },
  { title: "ولاية صلالة", img: "2.png" },
  { title: "ولاية مسقط", img: "3.png" },
  { title: "ولاية العامرات", img: "4.png" },
  { title: "محافظة ظفار", img: "5.jpeg" },
];

const nextSlide = () => {
  containerRef.value.swiper.slideNext();
};

const prevSlide = () => {
  containerRef.value.swiper.slidePrev();
};

defineExpose({
  nextSlide,
  prevSlide,
});
</script>
