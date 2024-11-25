<template>
  <div class="">
    <div
      class="relative aspect-square border-primary border-opacity-20 border-8 rounded-2xl overflow-hidden group"
    >
      <img
        class="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-110"
        :src="`/_nuxt/public/assets/images/explore/${img}`"
        alt="Zoomable image"
      />
    </div>
    <h4 class="mt-4 text-xl font-bold text-center text-secondary">
      {{ title }}
    </h4>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, required: true },
  img: { type: String, required: true },
});
</script>
<style lang=""></style>
