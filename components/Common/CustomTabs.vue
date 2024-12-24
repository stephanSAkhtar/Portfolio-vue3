<template>
  <div class="flex-col">
    <div v-if="tabStyle == 'tabStyles'">
      <div
        class="flex mb-4 bg-[#EEF0F4] my-6 rounded-[0.5rem]"
        :class="classes"
      >
        <button
          :style="{ padding: `0.5rem ${padding}` + 'rem' }"
          style="margin: 2px 2px; text-center"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{
            'bg-white border-primary border-b-0 rounded-[0.5rem] ':
              activeTab === tab.name,
          }"
          @click="setActiveTab(tab.name)"
        >
          <div v-if="tab.image" class="flex justify-center items-center">
            <component :is="tab.image" />
          </div>
          <span v-else class="relative inline-block">
            {{ tab.name }}
            <span
              v-if="tab.count"
              class="absolute -top-2 -right-3 text-xs bg-green-500 text-white rounded-full px-1.5 py-0.5"
            >
              {{ tab.count }}
            </span>
          </span>
        </button>
      </div>
    </div>
    <div v-else>
      <div class="flex border-b border-gray-200 mb-4">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="min-w-24 max-w-fit py-4 px-4 text-sm border-b-2"
          :class="
            activeTab === tab.name
              ? 'text-primary border-primary '
              : 'text-gray-500 hover:text-primary border-transparent'
          "
          @click="setActiveTab(tab.name)"
        >
          <span class="relative inline-block">
            {{ tab.name }}
            <span
              v-if="tab.count"
              class="text-xs bg-[#38D635] text-white rounded-full px-2 py-0.5"
            >
              {{ tab.count }}
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  activeTab: String,
  tabStyle: String,
  padding: [String, Number],
  tabs: Array,
  classes: String,
});
let emit = defineEmits(["updateActiveTab"]);
const setActiveTab = (tab) => {
  emit("updateActiveTab", tab);
};
</script>