<template>
  <button :class="buttonClass">
    <Icon
      v-if="icon && iconPosition === 'prepend'"
      :name="icon"
      :class="iconClass"
    />

    {{ label }}
    <Icon
      v-if="icon && iconPosition === 'append'"
      :name="icon"
      :class="iconClass"
    />
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["md", "lg", "xl"].includes(value),
  },
  color: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "accent"].includes(value),
  },
  icon: { type: String, default: null },
  iconPosition: {
    type: String,
    default: "prepend",
    validator: (value) => ["prepend", "append"].includes(value),
  },
});

const buttonClass = computed(() => {
  const sizeClasses = {
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const colorClasses = {
    primary: "bg-primary text-white hover:bg-primary/80 transition-colors",
    accent: "bg-accent text-black hover:bg-accent/80 transition-colors",
  };

  return `rounded-full inline-flex items-center justify-center gap-2 ${
    sizeClasses[props.size]
  } ${colorClasses[props.color]}`;
});

const iconClass = computed(() => {
  const sizeClasses = {
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };
  return sizeClasses[props.size];
});
</script>
