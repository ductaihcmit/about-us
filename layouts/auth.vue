<template>
  <div
    class="bg-color-gray-light dark:bg-color-gray-dark h-full flex items-center"
  >
    <!-- <div class="circle-blur-top"></div>
    <div class="circle-blur-right"></div> -->
    <div class="max-w-[1280px] mx-auto">
      <div class="grid grid-cols-2 rounded-3xl min-h-[600px]">
        <div class="h-full">
          <img
            src="/public/images/social/auth-social.gif"
            alt=""
            width="480px"
            class="rounded-l-3xl h-full"
          />
          <!-- <video
            width="400"
            height="600"
            autoplay
            loop
            muted
            class="rounded-l-3xl"
          >
            <source src="/public/video/fish.mp4" type="video/mp4" />
          </video> -->
        </div>
        <div
          class="bg-white rounded-r-3xl p-10 flex items-center justify-center"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
