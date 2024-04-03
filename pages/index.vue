<template>
  <div>
    <h3 class="text-center text-cyan-500 text-3xl font-semibold">
      Tài Tài Website
      <br />
      Comming Soonaaa
    </h3>
    <!-- <DevOnly>
      <a-space wrap>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
      </a-space>
      <a-pagination v-model:current="current" :total="500" />
    </DevOnly> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const current = ref(6);
</script>

<style scoped></style>
