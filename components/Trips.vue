<template>
  <div>
    <div
      style="background-image: url('/_nuxt/public/assets/images/texture/6.png')"
      class="bg-primary/20 py-2 overflow-x-hidden bg-center bg-cover pb-8"
    >
      <div class="container mx-auto px-4 flex justify-end items-center mb-4">
        <UiButton
          class="mt-10 w-full lg:w-auto"
          size="lg"
          icon-position="append"
          icon="material-symbols:arrow-left-alt-rounded"
          label="أستكشف"
        />
      </div>
      <div
        class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-4"
      >
        <div class="lg:col-span-4 mt-4 text-center lg:text-right">
          <h2 class="text-secondary text-2xl font-bold">الرحلات السياحية</h2>
          <p class="text-gray text-lg mt-2">
            استمتع باستكشاف رحلتك السياحية المميزة
          </p>

          <div class="flex items-center gap-4 mt-8">
            <button
              @click="goNext"
              class="hidden bg-primary aspect-square rounded-full p-2 w-12 h-12 lg:flex justify-center items-center hover:bg-primary/90 transition-colors"
            >
              <Icon
                class="text-white w-10 h-10"
                name="material-symbols:arrow-right-alt-rounded"
              />
            </button>

            <button
              @click="goPrev"
              class="hidden bg-primary aspect-square rounded-full p-2 w-12 h-12 lg:flex justify-center items-center hover:bg-primary/90 transition-colors"
            >
              <Icon
                class="text-white w-10 h-10"
                name="material-symbols:arrow-left-alt-rounded"
              />
            </button>
          </div>
        </div>

        <div class="lg:col-span-8">
          <TripsSlider ref="swiperRef" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const swiperRef = ref(null);

// Methods to trigger navigation
const goNext = () => {
  swiperRef.value?.nextSlide();
};

const goPrev = () => {
  swiperRef.value?.prevSlide();
};
</script>
<style lang=""></style>
