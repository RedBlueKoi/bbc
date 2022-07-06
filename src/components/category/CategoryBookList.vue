<template>
  <ul class="books-list">
    <category-book-list-item
      v-for="book in books"
      :key="book.id"
      :book="book" />
  </ul>
</template>

<script lang="ts" setup>
  import type { Book } from "@/composables/useBooks";
  import CategoryBookListItem from "./CategoryBookListItem.vue";

  export interface Props {
    books: Book[];
  }
  defineProps<Props>();
</script>

<style scoped lang="postcss">
  .books-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .books-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .books-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
