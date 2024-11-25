<template>
  <label class="text-sm font-medium text-gray">{{ label }}</label>
  <div ref="dropdown" class="relative">
    <div
      @click="opened = !opened"
      :class="`transition-colors ${
        opened ? 'bg-white' : 'bg-[#F8F8F8]'
      } border-border border px-4 py-2 rounded-full flex items-center justify-between min-w-[180px] w-full cursor-pointer mt-4`"
    >
      <div class="text-gray text-sm">{{ placeholder }}</div>
      <div
        class="border-2 border-primary rounded-full p-0.5 w-6 h-6 flex items-center justify-center transition-transform duration-300"
        :class="{ 'rotate-180': opened }"
      >
        <Icon
          name="tabler:chevron-down"
          class="text-primary font-black"
          :stroke-width="2"
        />
      </div>
    </div>

    <div
      v-show="opened"
      class="bg-[#F8F8F8] border-border border rounded-2xl shadow-lg px-4 py-3 absolute mt-2 w-full h-auto z-[20]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const opened = ref(false);
const dropdown = ref(null);

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    opened.value = false;
  }
};
// Register event listeners
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Clean up event listeners
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

defineProps({
  label: { type: String },
  placeholder: { type: String },
});
</script>
