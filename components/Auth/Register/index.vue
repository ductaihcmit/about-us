<template>
  <div class="min-w-[300px]">
    <h1 class="text-center text-2xl text-color-secondary-light">Đăng ký</h1>
    <p class="mb-0 mt-1 text-center text-sm text-color-secondary-light">
      Tham gia mạng xã hội với chúng tôi
    </p>
    <div class="mt-10">
      <div>
        <div>
          <span class="text-sm text-color-secondary-light"> E-mail: </span>
        </div>
        <a-input
          v-model:value="user.email"
          placeholder="examp@gmail.com"
          size="large"
          class="mt-1 bg-color-gray-light dark:bg-color-gray-dark border-none outline-inherit !shadow-none"
        />
      </div>
      <div class="mt-4">
        <div>
          <span class="text-sm text-color-secondary-light"> Password </span>
        </div>
        <div class="relative">
          <a-input
            :type="isVisiblePassword ? 'text' : 'password'"
            v-model:value="user.password"
            placeholder="Password"
            size="large"
            class="mt-1 bg-color-gray-light dark:bg-color-gray-dark border-none outline-inherit !shadow-none"
          />
          <div
            class="absolute top-3 right-3"
            @click="isVisiblePassword = !isVisiblePassword"
          >
            <EyeSlashIcon
              class="w-5 h-5 cursor-pointer"
              v-if="!isVisiblePassword"
            />
            <EyeIcon class="w-5 h-5 cursor-pointer" v-else />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div>
          <span class="text-sm text-color-secondary-light"> Re-password </span>
        </div>
        <div class="relative">
          <a-input
            :type="isVisibleRePassword ? 'text' : 'password'"
            v-model:value="user.rePassword"
            placeholder="Re-password"
            size="large"
            class="mt-1 bg-color-gray-light dark:bg-color-gray-dark border-none outline-inherit !shadow-none"
          />
          <div
            class="absolute top-3 right-3"
            @click="isVisibleRePassword = !isVisibleRePassword"
          >
            <EyeSlashIcon
              class="w-5 h-5 cursor-pointer"
              v-if="!isVisibleRePassword"
            />
            <EyeIcon class="w-5 h-5 cursor-pointer" v-else />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mt-6">
      <nuxt-link>
          <p
          class="mb-0 text-right text-sm text-color-secondary-light "
        >
          Quên mật khẩu?
        </p>
      </nuxt-link>
      </div> -->
    <div class="mt-6">
      <button
        class="transition-all ease-in font-semibold bg-color-secondary-light hover:bg-color-gray-dark text-color-main-light hover:text-color-secondary-light h-10 w-full rounded-full"
      >
        Đăng ký
      </button>
    </div>
    <div class="mt-6">
      <p class="mb-0 text-sm text-color-secondary-light">
        Nếu đã có tài khoản?
        <nuxt-link
          to="/auth/login"
          class="underline text-color-icon-light dark:text-color-icon-dark"
        >
          <span class=""> Đăng nhập </span>
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";
const user = ref({
  email: "",
  password: "",
  rePassword: "",
});

const isVisiblePassword = ref(false);
const isVisibleRePassword = ref(false);
</script>

<style scoped></style>
