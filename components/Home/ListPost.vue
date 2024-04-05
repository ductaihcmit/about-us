<template>
  <div>
    <div class="bg-color-secondary-dark p-4 rounded-lg flex items-center gap-4">
      <a-avatar :size="40">USER</a-avatar>
      <button
        @click="postStore.openDialog()"
        class="flex items-center transition-all ease-in bg-color-gray-light hover:bg-color-gray-dark text-color-secondary-light hover:text-color-secondary-dark px-4 py-2 rounded-full w-full h-10"
      >
        <span class="ml-2 text-sm"> Bạn đang nghĩ gì?</span>
      </button>
    </div>
    <div
      class="bg-color-secondary-dark p-4 rounded-lg flex items-center justify-between mt-4"
    >
      <p class="mb-0 text-lg font-semibold">Bài viết</p>
      <button
        class="flex items-center transition-all ease-in bg-color-secondary-light hover:bg-color-gray-dark dark:bg-color-secondary-dark text-color-main-light hover:text-color-secondary-light dark:text-color-main-dark px-4 py-2 rounded-lg"
      >
        <FunnelIcon class="w-5 h-5" />
        <span class="ml-2 text-sm"> Bộ lọc </span>
      </button>
    </div>
    <div
      class="bg-color-secondary-dark p-4 rounded-lg flex items-center justify-between mt-4"
    >
      <div class="flex items-center">
        <a-avatar :size="40">USER</a-avatar>
        <div class="ml-2">
          <p class="mb-0 text-color-secondary-light font-semibold leading-3">
            Nguyễn Đức Tài Tài
          </p>
          <span class="text-xs text-color-gray-dark">
            23 tháng 3 lúc 00:43
          </span>
        </div>
      </div>
    </div>
    <LayoutDialogPost />
  </div>
</template>

<script setup lang="ts">
import { FunnelIcon } from "@heroicons/vue/24/solid";
import { usePostStore } from "@/store/post";
const postStore = usePostStore();
</script>

<style scoped></style>
