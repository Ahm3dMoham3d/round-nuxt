<template>
  <div
    class="border border-border rounded-full px-3 py-3 bg-[#F8F8F8] flex items-center"
  >
    <input
      placeholder="رقم الواتساب"
      type="tel"
      dir="rtl"
      class="placeholder-gray bg-transparent focus:outline-none w-[80%]"
    />
    <div class="flex items-center gap-2 w-[20%] justify-end">
      <select class="bg-transparent">
        <option selected value="+968">+968</option>
        <option value="+967">+967</option>
      </select>
      <img class="w-6 h-6" src="/public/assets/icons/oman.png" />
    </div>
  </div>
</template>
