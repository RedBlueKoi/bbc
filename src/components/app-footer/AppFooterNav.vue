<script setup lang="ts"></script>

<template>
  <nav class="app-footer-nav">
    <ul>
      <li class="nav-item"><router-link to="/">About</router-link></li>
      <li class="nav-item"><router-link to="/">Contact</router-link></li>
      <li class="nav-item"><router-link to="/">Directions</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="postcss">
  .app-footer-nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .nav-item {
    position: relative;
  }
  .nav-item::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #fff;
    opacity: 0;
    transition: all 300ms ease-in-out;
    transform-origin: left;
    transform: scaleX(0);
  }
  .nav-item:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
  .nav-item + .nav-item::before {
    content: "";
    display: block;
    height: 1.5rem;
    width: 1px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: -0.5rem;
  }
</style>
