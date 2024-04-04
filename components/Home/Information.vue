<template>
  <div class="bg-color-secondary-dark p-6 rounded-lg">
    <div class="flex items-center gap-3">
      <HeartIcon
        class="w-6 h-6 text-color-icon-light dark:text-color-icon-dark"
      />
      <span class="text-sm text-color-secondary-light font-semibold">
        Đang hẹn hò với Thùy Dương
      </span>
    </div>
    <div class="flex items-center gap-3 mt-3">
      <LinkIcon
        class="w-6 h-6 text-color-icon-light dark:text-color-icon-dark"
      />
      <a
        class="text-sm text-color-secondary-light font-semibold"
        href="https://www.facebook.com/profile.php?id=100058435117089"
        target="_blank"
      >
        Click Here
      </a>
    </div>

    <!-- <div class="flex items-center gap-3 mt-2">
      <EnvelopeIcon
        class="w-6 h-6 text-color-icon-light dark:text-color-icon-dark"
      />
      <span class="text-sm text-color-secondary-light font-semibold">
        nguyenductaihcm@gmail.com
      </span>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { LinkIcon, HeartIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped></style>
