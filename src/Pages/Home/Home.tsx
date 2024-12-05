import { useEffect, useState } from "react";
import { Product } from "../../Interfaces/Interfaces";
import Card from "../../Components/Card/Card";
import cl from "./Home.module.css"

const Home = () => {
    const [products, setProducts] = useState<Product[]>();
    const [searchQuery, setSearchQuery] = useState("");
    const getProducts = async () => {
        try {
            await fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json));
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => { getProducts() }, [])

    const filteredProducts = (products: Product[], searchQuery: string) => {
        return products.filter((item) =>
            item.category.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
            item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }
    
    return (
        <div>
            {products ?
                <>
                    <input
                        type="text"
                        className={cl.search_input}
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        placeholder="Search" />

                    <div className={cl.grid_container}>
                        <div className={cl.grid_inner_container}>
                            {
                                filteredProducts(products, searchQuery).map((product, key) => {
                                    return (
                                        <Card key={key} {...product} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
                :
                <div style={{ color: "red" }}>
                    There are no products!!!
                </div>
            }
        </div>
    );
}

export default Home;
