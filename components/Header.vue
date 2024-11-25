<template>
  <nav class="absolute z-10 top-0 w-full bg-black/20 backdrop-blur-[3px]">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink v-for="(icon, index) in icons" :key="index" to="/">
            <div
              class="border border-white rounded-full p-1.5 w-7 h-7 flex items-center justify-center group hover:bg-white transition-colors"
            >
              <Icon
                :name="`bi:${icon}`"
                class="text-white group-hover:text-primary"
              />
            </div>
          </NuxtLink>
        </div>

        <LangSwitcher />
      </div>
      <hr class="border-white my-4" />
      <div class="flex items-center justify-between flex-wrap">
        <NuxtLink to="/">
          <img src="/public/assets/images/logo.png"
        /></NuxtLink>
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
        <NuxtLink to="/auth">
          <UiButton
            class="hidden md:flex"
            icon-position="prepend"
            icon="uil:user"
            label="التسجيل"
          />
        </NuxtLink>

        <div class="md:hidden flex items-center gap-2">
          <NuxtLink to="/auth">
            <UiButton
              class=""
              icon-position="prepend"
              icon="uil:user"
              label="التسجيل"
            />
          </NuxtLink>
          <button
            @click="menu = !menu"
            class="bg-primary rounded-full p-1.5 w-9 h-9 flex items-center justify-center hover:bg-primary/80 transition-colors"
          >
            <Icon
              :name="
                !menu
                  ? 'charm:menu-hamburger'
                  : 'material-symbols:close-rounded'
              "
              class="text-white text-2xl"
            />
          </button>
        </div>
        <div
          v-show="menu"
          class="md:hidden w-full flex flex-col text-center gap-6 border rounded-md p-4 mt-4 border-white"
        >
          <NuxtLink
            class="text-md text-white font-semibold hover:bg-primary py-2 transition-colors rounded-full"
            v-for="(link, index) in links"
            :key="index"
            to="/"
          >
            {{ link }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
const menu = ref(false);
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
