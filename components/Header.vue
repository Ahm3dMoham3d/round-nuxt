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
        <div class="hidden md:flex items-center gap-6">
          <NuxtLink
            class="nuxt-link text-sm text-white font-semibold"
            v-for="(link, index) in links"
            :key="index"
            to="/"
          >
            {{ link }}
          </NuxtLink>
        </div>
        <UiButton
          class="hidden md:flex"
          icon-position="prepend"
          icon="uil:user"
          label="التسجيل"
        />
      </div>
      <button>
        <Icon name="bi:menu" />
      </button>
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
<style scoped>
.nuxt-link {
  position: relative;
  text-decoration: none;
}

.nuxt-link::after {
  content: "";
  position: absolute;
  bottom: -6px;
  right: 0;
  width: 0;
  height: 1px;
  background-color: #189cce;
  transition: all 0.3s ease;
}

.nuxt-link:hover::after {
  width: 100%;
}
</style>
