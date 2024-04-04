<template>
  <div class="min-w-[300px]">
    <h1
      class="text-center text-2xl text-color-secondary-light dark:text-color-secondary-dark font-semibold"
    >
      Đăng nhập
    </h1>
    <p
      class="mb-0 mt-1 text-center text-sm text-color-secondary-light dark:text-color-secondary-dark"
    >
      Đăng nhập tài khoản để trải nghiệm dịch vụ
    </p>
    <div class="mt-10">
      <div>
        <div>
          <span
            class="text-sm text-color-secondary-light dark:text-color-secondary-dark font-semibold"
          >
            E-mail:
          </span>
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
          <span
            class="text-sm text-color-secondary-light dark:text-color-secondary-dark font-semibold"
          >
            Password
          </span>
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
      <!-- <div class="mt-6">
      <nuxt-link>
          <p
          class="mb-0 text-right text-sm text-color-secondary-light dark:text-color-secondary-dark"
        >
          Quên mật khẩu?
        </p>
      </nuxt-link>
      </div> -->
      <div class="mt-6">
        <a-button type="primary" block size="large">Đăng nhập</a-button>
      </div>
      <div class="mt-6">
        <p
          class="mb-0 text-sm text-color-secondary-light dark:text-color-secondary-dark"
        >
          Nếu chưa có tài khoản?
          <nuxt-link
            to="/auth/register"
            class="underline text-color-icon-light dark:text-color-icon-dark"
          >
            <span class=""> Đăng ký </span>
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";
const user = ref({
  email: "",
  password: "",
});

const isVisiblePassword = ref(false);
</script>

<style scoped></style>
