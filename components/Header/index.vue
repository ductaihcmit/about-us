<template>
  <div class="h-40 flex justify-center">
    <div class="fixed min-w-[600px] mx-auto">
      <div class="mt-4 lg:mt-8 rounded-full shadow-sm py-3 px-6" id="header">
        <div class="flex items-center justify-between">
          <p class="mb-0 font-semibold text-black dark:text-white">Jan</p>
          <div class="flex items-center gap-6">
            <div>
              <nuxt-link to="/">
                <p
                  class="mb-0 text-sm font-semibold text-black dark:text-white"
                >
                  Home
                </p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/contact-us">
                <p
                  class="mb-0 text-sm font-semibold text-black dark:text-white"
                >
                  Contact Us
                </p>
              </nuxt-link>
            </div>
          </div>
          <!-- <button @click="toggleDarkMode">Toggle Dark Mode</button> -->
          <a-button
            shape="circle"
            @click="toggleDarkMode()"
            class="flex items-center justify-center"
          >
            <MoonIcon class="w-5 h-5" v-show="colorMode.value === 'light'" />
            <SunIcon class="w-5 h-5" v-show="colorMode.value === 'dark'" />
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
const colorMode = useColorMode();
const toggleDarkMode = () => {
  colorMode.preference === "light"
    ? (colorMode.preference = "dark")
    : (colorMode.preference = "light");
};
</script>

<style scoped>
#header {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
}
</style>
