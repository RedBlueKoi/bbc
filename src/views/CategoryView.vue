<script setup lang="ts">
  import CategoryNav from "@/components/category/CategoryNav.vue";
  import CategoryBookList from "@/components/category/CategoryBookList.vue";
  import useBooks from "@/composables/useBooks";
  const { books } = useBooks();
</script>

<template>
  <category-nav />
  <category-book-list :books="books" />
</template>

<style scoped lang="postcss"></style>
