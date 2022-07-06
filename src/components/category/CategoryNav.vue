<template>
  <div class="category-nav">
    <button type="button" class="button button-primary">8-15 m</button>
    <button type="button" class="button button-primary">1-3 y</button>
    <button type="button" class="button button-primary">3-6 y</button>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  .category-nav {
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 0.5rem;
    padding: 1rem;
    padding-bottom: 0;
  }

  .button.selected-category-button {
    background-color: var(--secondary-button-color);
  }

  .button.unselected-category-button,
  .button.unselected-category-button:visited {
    background-color: var(--secondary-back-color);
    color: #111111;
  }

  .button.unselected-category-button:hover,
  .button.unselected-category-button:active {
    background-color: var(--primary-back-dark);
  }
</style>
