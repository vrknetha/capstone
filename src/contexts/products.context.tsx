import { createContext, useState } from "react";
import shop_data from "../shop-data.json";
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
