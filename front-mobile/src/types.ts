export type Product = {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: string;
  categories: Category[];
}

export type Category = {
  id: number;
  name: string;
}