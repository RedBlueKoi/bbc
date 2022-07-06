<script setup lang="ts">
  import AppFooterNav from "./AppFooterNav.vue";
  import AppFooterSocials from "./AppFooterSocials.vue";
</script>

<template>
  <footer class="app-footer">
    <div class="copyrighted">
      <i class="fa fa-copyright"></i>
      <span>2022</span>
      <span>Black Books Center, LLC</span>
    </div>
    <app-footer-nav />
    <app-footer-socials />
  </footer>
</template>

<style scoped lang="postcss">
  .app-footer {
    background: var(--primary-back-dark);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  .copyrighted {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }
  @media (min-width: 768px) {
    .app-footer {
      flex-direction: row;
    }
  }
</style>
