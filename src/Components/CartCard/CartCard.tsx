import { CartCardProps } from "../../Interfaces/Interfaces";
import cl from "./CartCard.module.css"
const CartCard: React.FC<CartCardProps> = ({ deleteItem, category, image, price, title }) => {
    return (
        <div className={cl.cart_card}>
            <div className={cl.container}>
                <div className={cl.inner_cart_card}>
                    <div className={cl.card_image} style={{ backgroundImage: `url('${image}')` }}></div>
                    <div className={cl.card_text}>
                        <div className={cl.card_title}>
                            <span>{title.length > 40 ? title.slice(0, 40) + "..." : title}</span>
                        </div>
                        <div className={cl.category}>
                            Category: {category}
                        </div>
                        <div className={cl.price}>
                            $ {price}
                        </div>
                    </div>
                    <div className={cl.button_block}>
                        <button onClick={() => { deleteItem() }}>Delete from cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
