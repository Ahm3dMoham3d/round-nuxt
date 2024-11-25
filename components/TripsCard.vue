<template>
  <div class="aspect-[9/15] rounded-xl">
    <div
      class="absolute w-full h-full rounded-xl flex flex-col justify-between"
    >
      <div class="p-4 flex justify-end">
        <div
          class="bg-white rounded-full p-2 flex items-center justify-between gap-1"
        >
          4.5
          <Icon name="material-symbols:star" class="text-yellow-500 text-2xl" />
        </div>
      </div>
      <div class="bg-black/60 rounded-b-xl">
        <h4 class="text-white text-bold text-lg px-3 pt-4">رحلة {{ title }}</h4>
        <div class="flex items-center justify-between p-3">
          <div class="flex items-center gap-2 text-white">
            <Icon name="bi:tag" class="text-white text-2xl" />
            50 ع.ر
          </div>

          <button
            class="border border-white text-white text-sm p-2 rounded-full min-w-[80px] flex items-center justify-between"
          >
            المزيد
            <Icon
              name="material-symbols:arrow-left-alt-rounded"
              class="text-white text-2xl"
            />
          </button>
        </div>
      </div>
    </div>
    <img
      class="object-cover h-full rounded-xl"
      :src="`/_nuxt/public/assets/images/explore/${img}`"
    />
  </div>
</template>
<script setup>
defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
});
</script>
<style lang=""></style>
