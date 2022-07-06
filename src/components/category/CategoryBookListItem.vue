<script lang="ts" setup>
  import useBasket from "@/composables/useBasket";
  import type { Book } from "@/composables/useBooks";
  import { computed } from "vue";
  export interface Props {
    book: Book;
  }
  const props = defineProps<Props>();

  const { basket, addItem, removeItem } = useBasket();
  const onBookAdd = () => {
    addItem(props.book.id);
  };
  const onBookRemove = () => {
    removeItem(props.book.id);
  };
  const isInTheBasket = computed<boolean>(
    () =>
      !!basket.value.items.find(
        (basketItem) => basketItem.bookId === props.book.id
      )
  );
</script>

<template>
  <li class="book-box">
    <div class="img-wrapper">
      <img :src="book.img" alt="" />
    </div>
    <h3 class="title">{{ book.title }}</h3>
    <div class="author">{{ book.author }}</div>
    <div class="book-footer">
      <div class="price">${{ book.price.toLocaleString() }}</div>
      <button type="button" class="button button-primary" @click="onBookAdd">
        Add to the cart
      </button>
      <button
        type="button"
        class="button button-primary"
        @click="onBookRemove"
        v-if="isInTheBasket">
        -
      </button>
    </div>
  </li>
</template>

<style scoped>
  .book-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--secondary-back-color);
    color: var(--secondary-text-color);
    padding: 1rem;
  }

  .img-wrapper {
    height: 10rem;
    overflow: hidden;
  }
  .title {
    font-size: 1.5rem;
    line-height: 1;
    min-height: 3rem;
    padding-block: 0.5rem;
  }
  .author {
    font-style: italic;
  }
  .price {
    font-size: 1.5rem;
  }
  .book-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
