import { ReactNode, useState } from "react";
import { Product } from "../../Interfaces/Interfaces";
import { CartContext } from "../../Context/CartContext";

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([])
    return (
        <CartContext.Provider value={{cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
