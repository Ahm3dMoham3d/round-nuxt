<template>
  <div>
    <section class="h-[90vh] bg-no-repeat bg-cover bg-center">
      <video
        class="h-[100%] w-full object-cover"
        src="/public/assets/videos/hero.mp4"
        muted
        loop
        autoplay
      ></video>
      <div class="absolute w-full top-0 h-[90vh] bg-black/60"></div>
      <div class="absolute w-full top-0 h-[90vh] mt-8">
        <div class="container mx-auto px-4 py-4 flex items-center h-full">
          <div>
            <h1
              class="text-5xl leading-relaxed md:text-6xl font-bold text-white"
            >
              اجعل رحلتـك أكثر تحـدياً
            </h1>
            <h4 class="text-xl md:text-2xl font-medium text-white md:mt-4">
              اسـكتشف العديد من الرحلات و الخدمات الرائعة
            </h4>
            <UiButton
              class="mt-10"
              size="lg"
              icon-position="append"
              icon="material-symbols:arrow-left-alt-rounded"
              label="احجز الأن"
            />
          </div>
        </div>
      </div>
    </section>
    <HeroSearchForm />
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
