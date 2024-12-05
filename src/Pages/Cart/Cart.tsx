import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import CartCard from "../../Components/CartCard/CartCard";
import cl from "./Cart.module.css"
const Cart = () => {
    const cartContext = useContext(CartContext)
    const [price, setPrice] = useState<number>(0);

    const removeFromCart = (key: number) => {
        cartContext?.setCartItems(cartContext.cartItems.filter(item => cartContext.cartItems.indexOf(item) != key))
    }

    useEffect(() => {
        const totalPrice = cartContext?.cartItems.reduce((sum, item) => sum + item.price, 0) || 0;
        setPrice(Number(totalPrice.toFixed(2)));

    }, [cartContext?.cartItems])

    console.log(price)

    return (
        <div className={cl.cart_body}>
            <div className={cl.cart_container}>
                {
                    cartContext?.cartItems.length ?
                        cartContext.cartItems.map((item, key) => {
                            return (
                                <CartCard key={key} {...item} deleteItem={() => removeFromCart(key)} />
                            )
                        })
                        : <div style={{ color: "red" }}>Cart is empty!!!</div>
                }

            </div>
            {
                price ?
                    <div className={cl.cart_total_price}>
                        Total price: <span>${price}</span>
                    </div>
                    : ""
            }

            {cartContext?.cartItems.length ?
                <button className={cl.cart_empty} onClick={() => { cartContext?.setCartItems([]) }}>Empty the cart</button>
                : ""
            }


        </div>
    );
}

export default Cart;
