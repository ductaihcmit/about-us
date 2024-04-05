<template>
  <div>
    <a-modal
      v-model:open="postStore.dialog"
      centered
      :footer="false"
      :closable="false"
    >
      <div class="flex items-center justify-between p-4">
        <p class="mb-0 text-lg font-semibold">Tạo bài viết</p>
        <button
          @click="postStore.dialog = false"
          class="transition-all ease-in p-2 rounded-full bg-color-gray-light hover:bg-color-gray-dark"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>
      <a-divider class="my-0" />
      <div class="p-4">
        <div class="flex items-center">
          <a-avatar :size="40">USER</a-avatar>
          <div class="ml-2">
            <p class="mb-0 text-color-secondary-light font-semibold leading-3">
              Nguyễn Đức Tài Tài
            </p>
          </div>
        </div>
        <div class="mt-3">
          <textarea
            name=""
            id=""
            rows="10"
            class="w-full focus:outline-none"
          ></textarea>
        </div>
        <div class="mt-3 h-60 p-2 border rounded-lg" v-if="isShowSelectImg">
          <div
            class="rounded-lg bg-color-gray-dark relative h-full flex items-center justify-center"
          >
            <div class="absolute top-2 right-2">
              <button
                @click="isShowSelectImg = false"
                class="transition-all ease-in p-2 rounded-full bg-color-main-light hover:bg-color-main-dark"
              >
                <XMarkIcon class="w-5 h-5" />
              </button>
            </div>
            <div>
              <div class="flex items-center justify-center">
                <img
                  src="/public/images/social/upload.png"
                  width="80"
                  height="80"
                />
              </div>
              <p
                class="mb-0 mt-3 text-center text-color-main-light font-semibold"
              >
                Thêm ảnh/Video
              </p>
              <p
                class="mb-0 text-center text-xs text-color-gray-light font-semibold"
              >
                Kéo vào hoặc thả
              </p>
            </div>
          </div>
        </div>
        <div
          class="mt-3 border p-3 rounded-lg flex items-center justify-between"
        >
          <p class="mb-0 text-sm font-semibold text-color-secondary-light">
            Thêm vào bài viết của bạn
          </p>
          <a-tooltip placement="bottom">
            <template #title>
              <span>Thêm ảnh</span>
            </template>
            <PhotoIcon
              @click="isShowSelectImg = true"
              class="w-6 h-6 text-blue-500 cursor-pointer focus:outline-none"
            />
          </a-tooltip>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon, PhotoIcon } from "@heroicons/vue/24/solid";
import { usePostStore } from "@/store/post";
const isShowSelectImg = ref(false);

const postStore = usePostStore();
</script>

<style scoped></style>
