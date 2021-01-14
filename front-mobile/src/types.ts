export type Product = {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  categories: Category[];
}

type Category = {
  id: number;
  name: string;
}