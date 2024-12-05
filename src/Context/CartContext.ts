import { createContext } from "react";
import { CartContextType } from "../Interfaces/Interfaces";

export const CartContext = createContext<CartContextType | undefined>({
    cartItems: [],
    setCartItems: () => { },
});