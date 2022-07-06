<script setup lang="ts">
  import { RouterLink } from "vue-router";
</script>

<template>
  <section class="call-to-action">
    <div class="action-container">
      <h1>Black Books Center</h1>
      <h5>Opening a World of Wonders</h5>
      <router-link to="category" class="button button-primary action-button"
        >Shop for books</router-link
      >
    </div>
  </section>
</template>

<style scoped lang="postcss">
  .call-to-action {
    background: url(@/assets/images/site/books.jpg) center center no-repeat;
    background-size: cover;
    background-color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .action-container {
    max-width: 600px;
    width: 100%;
    text-align: center;
    z-index: 1;
    position: relative;
  }
  .call-to-action::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
  h1 {
    font-size: 3.5rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  .action-button {
    margin-top: 2rem;
  }
</style>
