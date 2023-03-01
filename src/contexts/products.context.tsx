import { createContext, useState } from "react";
import shop_data from "../shop-data.json";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

type ProductContextType = {
  products: Product[] | [];
};
export const ProductsContext = createContext<ProductContextType>({
  products: [],
});

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState(shop_data);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
