import { createContext, Dispatch, SetStateAction, useState } from "react";

interface AppContextInterface {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}
export const CartContext = createContext<AppContextInterface>({
  isCartOpen: false,
  setIsCartOpen: () => false,
});

export const CartProvider = ({ children }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
