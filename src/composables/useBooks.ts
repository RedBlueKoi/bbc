import { ref } from "vue";
import JustNormalBookCover from "@/assets/images/book-covers/book-cover-1.jpeg";
import Necronomicon from "@/assets/images/book-covers/book-cover-2.jpeg";
import DrawingForKids from "@/assets/images/book-covers/book-cover-3.jpeg";
import NecronomiconUnus from "@/assets/images/book-covers/book-cover-4.webp";
import NecronomiconPro from "@/assets/images/book-covers/book-cover-5.jpeg";

export interface Book {
  id: number;
  img: string;
  title: string;
  author: string;
  isNowAvailable: boolean;
  price: number;
}

const books = ref<Book[]>([
  {
    id: 1,
    img: JustNormalBookCover,
    title: "Just a normal book",
    author: "Von Tiling",
    isNowAvailable: true,
    price: 6.66,
  },
  {
    id: 2,
    img: Necronomicon,
    title: "Necro",
    author: "Elden John",
    isNowAvailable: false,
    price: 5.66,
  },
  {
    id: 3,
    img: DrawingForKids,
    title: "Drawing for kids + Examples",
    author: "Elden John",
    isNowAvailable: false,
    price: 2.66,
  },
  {
    id: 4,
    img: NecronomiconUnus,
    title: "Necro Unus",
    author: "Elden John",
    isNowAvailable: false,
    price: 6.66,
  },
  {
    id: 5,
    img: NecronomiconPro,
    title: "Necro Pro",
    author: "Elden John",
    isNowAvailable: true,
    price: 9.99,
  },
]);

const useBooks = () => {
  return { books };
};

export default useBooks;
