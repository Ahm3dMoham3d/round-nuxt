<template>
  <div class="bg-center bg-contain bg-no-repeat h-[100vh]">
    <div class="container mx-auto px-4 py-8 h-full">
      <img
        class="w-20 absolute left-0 top-0 -rotate-[180deg] -z-10"
        src="/public/assets/images/texture/1.png"
      />

      <img
        class="w-full h-[80vh] object-cover absolute right-0 -z-10"
        src="/public/assets/images/texture/5.png"
      />

      <div class="grid lg:grid-cols-2 h-full gap-24">
        <div
          style="
            background: url('/_nuxt/public/assets/images/auth/bg.png') no-repeat
              center;
            background-size: cover;
          "
          class="hidden relative lg:block rounded-xl h-full w-full"
        >
          <img
            class="w-20 absolute left-10 z-20 top-10"
            src="/_nuxt/public/assets/images/texture/7.png"
          />
          <div
            class="absolute w-full h-full bg-black/50 rounded-xl flex items-center justify-center"
          >
            <div class="px-4">
              <h1 class="text-white text-6xl font-bold">أهلاً و سهلاً في</h1>
              <h1 class="text-white text-6xl font-bold">Round</h1>
              <p class="text-white text-2xl w-[70%] mt-8">
                بـوابتك إلـى مـغامـرات لا تُنسـى وكـنوز مـخفية حول سلطنة عُمـان
              </p>
            </div>
          </div>
        </div>

        <div class="py-16 h-full">
          <form
            action=""
            class="shadow-md rounded-xl bg-white h-full border border-[#DFDFDF] pt-8 px-4 pb-4 mx-auto max-w-[650px]"
          >
            <div class="flex justify-center items-center">
              <img
                class="w-24 text-center"
                src="/public/assets/images/logo.png"
              />
            </div>

            <div class="my-8">
              <h2 class="text-2xl font-bold text-center">إنشاء حساب</h2>
              <p class="text-gray text-center mt-4">
                يجب إدخال البيانات لإنشاء حساب جديد
              </p>
            </div>

            <UiInputField placeholder="الأسم بالكامل" class="my-4" />
            <UiInputField
              placeholder="البريد الألكتروني"
              type="email"
              class="my-4"
            />
            <UiPhoneNumberInput class="my-4" />
            <UiInputField
              placeholder="كلمة المرور"
              type="password"
              class="my-4"
            />
            <UiButton class="w-full my-4" size="lg" label="أنشاء حساب" />
            <p class="text-gray text-center">
              امتلك حساب بالفعل
              <NuxtLink to="/" class="text-primary">تسجيل الدخول</NuxtLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "تسجيل الدخول",
  ogTitle: "تسجيل الدخول",
  description: "اسـكتشف العديد من الرحلات و الخدمات الرائعة",
  ogDescription: "اسـكتشف العديد من الرحلات و الخدمات الرائعة",
});
</script>
