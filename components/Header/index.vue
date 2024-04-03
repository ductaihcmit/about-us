<template>
  <div class="h-40 flex justify-center">
    <div class="fixed min-w-[600px] mx-auto">
      <div class="mt-4 lg:mt-8 rounded-full shadow-sm p-3" id="header">
        <div class="flex items-center justify-between">
          <p class="mb-0 font-semibold">Coffee & Tea</p>

          <a-button
            shape="circle"
            @click="toggle()"
            class="flex items-center justify-center"
          >
            <MoonIcon class="w-5 h-5" v-if="!taine" />
            <SunIcon class="w-5 h-5" v-else />
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
const taine = ref(false);
const toggle = () => {
  taine.value = !taine.value;
  console.log("taine.value :>> ", taine.value);
};
</script>

<!-- <style scoped>
#header {
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
}
</style> -->
