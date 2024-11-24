<template>
  <nav class="absolute z-10 top-0 w-full bg-black/20 backdrop-blur-[3px]">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink v-for="(icon, index) in icons" :key="index" to="/">
            <div
              class="border border-white rounded-full p-1.5 w-6 h-6 flex items-center justify-center"
            >
              <Icon :name="`bi:${icon}`" class="text-white" />
            </div>
          </NuxtLink>
        </div>

        <LangSwitcher />
      </div>
      <hr class="border-white my-4" />
      <div class="flex items-center justify-between">
        <img src="/public/assets/images/logo.png" />
        <div class="flex items-center gap-6">
          <NuxtLink
            class="text-sm text-white"
            v-for="(link, index) in links"
            :key="index"
            to="/"
          >
            {{ link }}
          </NuxtLink>
        </div>
        <UiButton />
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const icons = ["twitter-x", "instagram", "tiktok", "snapchat"];
const links = [
  "الرئيسية",
  "خدماتنا",
  "عن الشركة",
  "الوجهات السياحية",
  "المدونة",
  "ألبوم الصور",
];
</script>
<style></style>
