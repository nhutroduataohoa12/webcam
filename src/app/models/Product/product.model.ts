import { Category } from '../Category/category.model';

export class Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  categories: Category[];
  quantity: number;

  constructor(
    id: string,
    name: string,
    image: string,
    description: string,
    price: string,
    categories: Category[],
    quantity: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.categories = categories;
    this.quantity = quantity;
  }
}
