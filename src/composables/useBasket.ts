import { computed, ref } from "vue";
import type { Book } from "./useBooks";
import useBooks from "./useBooks";

interface BasketItem {
  bookId: number;
  amount: number;
}
interface Basket {
  items: BasketItem[];
}
const basket = ref<Basket>({
  items: [],
});

const useBasket = () => {
  const { books } = useBooks();
  const addItem = (bookId: number) => {
    const currentItem = basket.value.items.find(
      (item) => item.bookId === bookId
    );
    if (!currentItem) {
      basket.value.items.push({
        amount: 1,
        bookId,
      });
      return;
    }
    currentItem.amount++;
  };
  const removeItem = (bookId: number) => {
    const currentItem = basket.value.items.find(
      (item) => item.bookId === bookId
    );
    if (!currentItem) return;
    if (currentItem.amount > 1) {
      currentItem.amount--;
    } else {
      basket.value.items = basket.value.items.filter(
        (item) => item.bookId !== bookId
      );
    }
  };

  const totalAmount = computed(() =>
    basket.value.items.reduce((result, currentItem) => {
      return result + currentItem.amount;
    }, 0)
  );
  const totalPrice = computed(() =>
    basket.value.items.reduce((result, currentItem) => {
      const book: Book | undefined = books.value.find(
        (item) => item.id === currentItem.bookId
      );
      return !book ? result : result + book.price * currentItem.amount;
    }, 0)
  );

  return { basket, addItem, removeItem, totalPrice, totalAmount };
};

export default useBasket;
