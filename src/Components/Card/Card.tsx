import cl from "./Card.module.css"
import { Product } from "../../Interfaces/Interfaces";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const Card: React.FC<Product> = ({ id, description, category, image, price, rating, title }) => {
    const context = useContext(CartContext)
    const [isAdded, setIsAdded] = useState(false);

    const addToCart = (product = { id, description, category, image, price, rating, title }) => {

        context?.setCartItems([
            ...context.cartItems,
            product
        ])

        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false)
        }, (1000));
    }

    return (
        <div className={cl.grid_item}>
            <div className={cl.card}>
                <div className={cl.cardImage} style={{ backgroundImage: `url('${image}')` }}></div>

                <div className={cl.cardContent}>
                    <h3 className={cl.cardTitle}>{title.length > 20 ? title.slice(0, 20) + "..." : title}</h3>
                    <p className={cl.cardCategory}>{category}</p>
                    <p className={cl.cardDescription}>{description.length > 200 ? description.slice(0, 200) + "..." : description}</p>
                    <div className={cl.cardFooter}>
                        <span className={cl.cardPrice}>${price.toFixed(2)}</span>
                        <span className={cl.cardRating}>
                            Rate: {rating.rate} ({rating.count} reviews)
                        </span>
                    </div>
                </div>

                <button className={cl.addToCartButton} disabled={isAdded ? true : false} onClick={() => { addToCart({ id, description, category, image, price, rating, title }) }}>
                    {isAdded ?
                        <span style={{ color: "rgb(1, 255, 1)" }}>Adding to cart!</span>
                        :
                        <span>Add to cart</span>
                    }
                </button>

            </div>
        </div>
    );
}

export default Card;
