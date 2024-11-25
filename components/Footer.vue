<template>
  <footer class="relative bg-secondary w-full bg-cover bg-center bg-no-repeat">
    <img
      class="absolute w-full h-full object-cover opacity-20"
      src="/public/assets/images/texture/8.png"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        <div>
          <img src="/public/assets/images/logo.png" alt="" />
          <p class="text-white">
            موقع هـو منصة إلـكترونية تـهدف إلـى تقديم مـجموعة متنوعة مـن
            الخيارات للـسياح والمقيمين لاستكشاف الجمال والتاريخ
          </p>

          <div class="flex items-center gap-2 mt-6">
            <NuxtLink v-for="(icon, index) in icons" :key="index" to="/">
              <div
                class="bg-primary rounded-full p-1 w-10 h-10 flex items-center justify-center group hover:bg-white transition-colors"
              >
                <Icon
                  :name="`bi:${icon}`"
                  class="text-white group-hover:text-primary"
                />
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="hidden xl:block"></div>

        <div>
          <h4 class="text-lg text-white font-bold mb-4">الصفحات</h4>
          <div class="grid grid-cols-2">
            <div class="flex flex-col gap-2">
              <NuxtLink v-for="(link, index) in links[0]" :key="index" to="/">
                <div class="text-white">
                  {{ link }}
                </div>
              </NuxtLink>
            </div>

            <div class="flex flex-col gap-2">
              <NuxtLink v-for="(link, index) in links[1]" :key="index" to="/">
                <div class="text-white">
                  {{ link }}
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg text-white font-bold mb-4">بيانات التواصل</h4>
          <div class="flex items-center gap-4">
            <div
              class="bg-white aspect-square rounded-full w-10 h-10 p-1 flex items-center justify-center"
            >
              <Icon
                name="material-symbols:call-outline"
                class="text-primary w-6 h-6"
              />
            </div>
            <p class="text-white font-semibold">+2 1235 1235 123</p>
          </div>

          <div class="flex items-center gap-4 my-4">
            <div
              class="bg-white aspect-square rounded-full w-10 h-10 p-1 flex items-center justify-center"
            >
              <Icon name="ic:baseline-email" class="text-primary w-6 h-6" />
            </div>
            <p class="text-white font-semibold">Info@mail.com</p>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="bg-white aspect-square rounded-full w-10 h-10 p-1 flex items-center justify-center"
            >
              <Icon
                name="material-symbols:location-on"
                class="text-primary w-6 h-6"
              />
            </div>
            <p class="text-white font-semibold">Egypt - Cairo</p>
          </div>
        </div>
      </div>
      <hr class="border-white mt-8 mb-4" />
      <div class="text-white flex items-center justify-between flex-wrap gap-4">
        <p>جميع الحقوق محفوظة Round 20204</p>
        <p>صنع ب❤️ بواسطة APEX</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const icons = ["twitter-x", "instagram", "tiktok", "snapchat"];
const links = [
  ["خدماتنا", "عن الشركة", "الوجهات السياحية", "المدونة", "ألبوم الصور"],

  ["الأحكام والشروط", "سياسات الخصوصية", "الأسئلة الشائعة", "تواصل معنا"],
];
</script>
<style lang=""></style>
