<script setup lang="ts">
  import { ref } from "vue";

  const iconSize = ref(30);
</script>

<template>
  <div class="socials">
    <router-link to="/" class="facebook-link">
      <img
        src="@/assets/images/site/FB_logo.png"
        alt="Twitter Logo"
        :width="iconSize"
        height="auto" />
    </router-link>
    <router-link to="/" class="Twitter-link">
      <img
        src="@/assets/images/site/tw_logo.png"
        alt="Twitter Logo"
        :width="iconSize"
        height="auto"
    /></router-link>
  </div>
</template>

<style scoped lang="postcss">
  .socials {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
</style>
