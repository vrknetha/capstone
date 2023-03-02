interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

type ProductContextType = {
  products: Product[] | [];
};

interface CartItem extends Product {
  quantity: number;
}
