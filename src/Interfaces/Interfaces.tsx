export interface Product {
    id: number;
    description: string;
    category: string;
    image: string;
    price: number;
    rating: {
        count: number;
        rate: number;
    };
    title: string;
}

export interface CartContextType {
    cartItems: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}


export interface CartCardProps {
    deleteItem: () => void;
    category: string;
    image: string;
    price: number;
    title: string;
}