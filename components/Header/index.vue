<template>
  <div class="h-32 flex justify-center">
    <div class="fixed min-w-[600px] mx-auto">
      <div class="mt-4 lg:mt-8 rounded-full shadow-sm py-3 px-6 bg-white">
        <div class="flex items-center justify-between">
          <p class="mb-0 font-semibold text-color-secondary-light">Social</p>
          <!-- <div class="flex items-center gap-6">
            <div>
              <nuxt-link to="/">
                <p
                  class="mb-0 text-sm font-semibold text-color-secondary-light"
                >
                  Home
                </p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/contact-us">
                <p
                  class="mb-0 text-sm font-semibold text-color-secondary-light"
                >
                  Contact Us
                </p>
              </nuxt-link>
            </div>
          </div> -->
          <!-- <button @click="toggleDarkMode">Toggle Dark Mode</button> -->
          <div class="flex items-center gap-4">
            <nuxt-link to="/auth/login">
              <p class="mb-0 text-sm font-semibold text-color-secondary-light">
                Đăng nhập
              </p>
            </nuxt-link>
            <a-button
              shape="circle"
              @click="toggleDarkMode()"
              class="flex items-center justify-center"
            >
              <MoonIcon
                class="w-5 h-5 text-color-icon-light dark:text-color-icon-dark"
                v-show="colorMode.value === 'light'"
              />
              <SunIcon
                class="w-5 h-5 text-color-icon-light dark:text-color-icon-dark"
                v-show="colorMode.value === 'dark'"
              />
            </a-button>
          </div>
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
