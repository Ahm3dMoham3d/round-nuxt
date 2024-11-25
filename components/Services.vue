<template>
  <div class="relative mt-8">
    <img
      class="w-24 absolute left-10 md:left-40"
      src="/public/assets/images/texture/2.png"
    />
    <img
      class="w-16 absolute right-0 -z-10"
      src="/public/assets/images/texture/3.png"
    />
    <img
      class="w-full h-full object-cover absolute right-0 -z-10"
      src="/public/assets/images/texture/5.png"
    />
    <div
      class="grid grid-cols-1 lg:grid-cols-2 container mx-auto px-4 py-14 gap-8"
    >
      <div>
        <h2 class="text-secondary text-2xl font-bold">الخدمات</h2>
        <h4 class="text-lg text-gray mt-2">
          توفر شركة Round in Oman العديد من الخدمات
        </h4>
        <h4 class="text-lg text-gray mb-8">
          المتنوعة و المميزة استكشفها و استمتع معنا
        </h4>
        <div
          v-for="card in cards"
          :key="card.text"
          class="shadow-md rounded-xl mb-4 last:mb-0 p-4 flex items-center gap-4"
        >
          <div
            :class="`min-w-14 w-14 aspect-square rounded-full p-3 flex items-center justify-center `"
            :style="{ backgroundColor: card.color }"
          >
            <img
              :src="`/_nuxt/public/assets/images/services/${card.icon}.png`"
            />
          </div>

          <div class="col-span-10">
            <h4 class="text-secondary font-bold">{{ card.title }}</h4>
            <p class="text-gray text-sm">{{ card.text }}</p>
          </div>
        </div>
      </div>

      <div class="relative lg:order-first flex justify-center">
        <img
          class="w-[85%] h-[100%] max-w-[408px] max-h-[544px]"
          src="/public/assets/images/services/bg.png"
        />

        <img
          class="w-20 absolute bottom-0 right-0 -z-10"
          src="/public/assets/images/texture/4.png"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const cards = [
  {
    title: "خدمات الرحلات",
    text: "فرصة رائعة لاكتشاف أماكن جديدة وتجربة مغامرات مميزة ",
    color: "#1CA8CB",
    icon: "icon1",
  },
  {
    title: "خدمات التنقل",
    text: "يمكنك حجز تاكسي أو تأجير سيارة حسب طلبك لإكمال راحتك معنا",
    color: "#8143EE",
    icon: "icon2",
  },
  {
    title: "الخدمات الترفيهية",
    text: " وسيلة رائعة لإضافة المتعة والتنوع إلى رحلتك.  اختيار الأنشطة الترفيهية التي تناسب اهتماماتهم",
    color: "#43E7CC",
    icon: "icon3",
  },
  {
    title: "خدمة حجز الفنادق",
    text: "خدمة حجز الفندق هي طريقة مريحة وسهلة لضمان مكان إقامة مناسب أثناء الرحلات",
    color: "#1C85CB",

    icon: "icon4",
  },
];
</script>
