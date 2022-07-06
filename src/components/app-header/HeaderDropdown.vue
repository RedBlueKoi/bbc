<script setup lang="ts"></script>

<template>
  <div class="header-dropdown">
    <button class="categories-button">
      Categories <i class="fa-solid fa-chevron-down"></i>
    </button>
    <ul>
      <li>
        <router-link to="../category/0-15_months"> 0-12 months </router-link>
      </li>
      <li>
        <router-link to="../category/12-18_months"> 8-15 months </router-link>
      </li>
      <li><router-link to="../category/1-3_years"> 1-3 years </router-link></li>
      <li><router-link to="../category/3-6_years"> 3-6 years </router-link></li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
  .header-dropdown {
    position: relative;
  }

  .categories-button {
    background-color: var(--primary-back-dark);
    margin-top: 0.25em;
    border: none;
    font: var(--default-font-family);
  }
  .categories-button i {
    transition: transform 300ms ease-in-out;
  }
  .categories-button:hover i {
    transform: rotateZ(180deg);
  }

  .header-dropdown ul {
    background-color: var(--primary-button-color);
    color: #ffffff;
    display: none;
  }

  .header-dropdown li {
    padding: 0.25rem 0.5rem;
  }

  .header-dropdown a {
    color: #fff;
    text-decoration: none;
  }

  .header-dropdown li:hover {
    background: var(--secondary-button-color);
  }

  .header-dropdown:hover ul {
    display: block;
    position: absolute;
    min-width: 8em;
    z-index: 1;
    cursor: pointer;
  }
</style>
