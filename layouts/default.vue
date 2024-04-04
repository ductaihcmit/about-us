<template>
  <div class="bg-white dark:bg-black h-full">
    <div class="circle-blur-top"></div>
    <div class="circle-blur-right"></div>
    <div class="relative z-[1]">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.circle-blur-top {
  position: absolute;
  background-color: lightblue;
  filter: blur(80px);
  width: 450px;
  height: 450px;
  border-radius: 100%;
  left: 50%;
  top: -10%;
}

.circle-blur-right {
  position: absolute;
  background-color: lightblue;
  filter: blur(80px);
  width: 450px;
  height: 450px;
  border-radius: 100%;
  right: 0%;
  top: 50%;
}
</style>
