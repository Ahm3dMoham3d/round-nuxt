<template>
  <div v-bind="$attrs" :class="containerClass">
    <input
      :placeholder="placeholder"
      :type="type"
      class="placeholder-gray bg-transparent focus:outline-none w-full"
    />
  </div>
</template>

<script setup>
defineProps({
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  containerClass: {
    type: String,
    default: "border border-border rounded-full px-2 py-4 bg-[#F8F8F8]",
  },
});
</script>
