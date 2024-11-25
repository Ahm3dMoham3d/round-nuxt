<template>
  <div class="absolute mt-[-15vh] md:mt-[-7vh] z-[5] w-full mb-10">
    <div
      class="bg-white border rounded-2xl border-primary shadow-lg max-w-[90vw] lg:max-w-[860px] mx-auto"
    >
      <form class="grid grid-cols-11 items-end gap-6 p-6">
        <div class="col-span-11 lg:col-span-3">
          <UiDropdown
            :placeholder="data.trip_type ? data.trip_type : 'أختر نوع الرحلة'"
            label="نوع الرحلة"
          >
            <div class="flex items-center justify-between">
              <label class="text-sm text-gray" for="many"
                >رحلة متعددة الأيام</label
              >
              <input
                type="radio"
                id="many"
                name="trip_type"
                value="رحلة متعددة الأيام"
                v-model="data.trip_type"
              />
            </div>

            <div class="flex items-center justify-between mt-2">
              <label class="text-sm text-gray" for="single"
                >رحلة ليوم واحد</label
              >
              <input
                type="radio"
                id="single"
                name="trip_type"
                value="رحلة ليوم واحد"
                v-model="data.trip_type"
              />
            </div>
          </UiDropdown>
        </div>
        <div class="col-span-11 lg:col-span-3">
          <UiDropdown
            :placeholder="
              data.trip_destination ? data.trip_destination : 'أختر الوجهة'
            "
            label="الوجهات"
          >
            <div class="flex items-center justify-between">
              <label class="text-sm text-gray" for="مسقط">مسقط</label>
              <input
                type="radio"
                id="مسقط"
                name="trip_destination"
                value="مسقط"
                v-model="data.trip_destination"
              />
            </div>

            <div class="flex items-center justify-between mt-2">
              <label class="text-sm text-gray" for="صلالة">صلالة</label>
              <input
                type="radio"
                id="صلالة"
                name="trip_destination"
                value="صلالة"
                v-model="data.trip_destination"
              />
            </div>

            <div class="flex items-center justify-between mt-2">
              <label class="text-sm text-gray" for="بوشر">بوشر</label>
              <input
                type="radio"
                id="بوشر"
                name="trip_destination"
                value="بوشر"
                v-model="data.trip_destination"
              />
            </div>
          </UiDropdown>
        </div>
        <div class="col-span-11 lg:col-span-3">
          <UiDropdown
            :placeholder="
              data.trip_price == 0
                ? '50ر.ع'
                : data.trip_price == 1
                ? '120ر.ع'
                : '500ر.ع'
            "
            label="السعر"
          >
            <input
              dir="rtl"
              type="range"
              id="range"
              v-model="data.trip_price"
              min="0"
              max="2"
              step="1"
              class="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer"
            />

            <div class="flex justify-between w-full text-xs text-gray-500">
              <span>50 ر.ع</span>
              <span>120 ر.ع</span>
              <span>500 ر.ع</span>
            </div>
          </UiDropdown>
        </div>

        <div class="col-span-11 lg:col-span-2">
          <UiButton
            type="submit"
            class="w-full"
            size="lg"
            icon-position="append"
            icon="material-symbols:arrow-left-alt-rounded"
            label="البحث"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const data = reactive({
  trip_type: "",
  trip_destination: "",
  trip_price: 0,
});
</script>
