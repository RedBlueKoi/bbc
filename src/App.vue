<script setup lang="ts">
  import AppHeader from "@/components/app-header/AppHeader.vue";
  import AppFooter from "@/components/app-footer/AppFooter.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <div class="layout">
    <app-header />
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<style lang="postcss">
  @import "@/assets/base.css";

  .layout {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
