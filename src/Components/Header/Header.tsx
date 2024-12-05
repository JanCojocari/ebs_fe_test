import { Link } from "react-router";
import cl from "./Header.module.css"
const Header = () => {
    const links = [
        {
            to: "/home",
            text: "Home"
        },
        {
            to: "/cart",
            text: "Cart"
        }
    ]

    return (
        <div className={cl.header}>
                <nav className={cl.nav_bar}>
                    {
                        links.map(({ to, text },key) => {
                            return (
                                <Link key={key} to={to} className={cl.link}>{text}</Link>
                            )
                        })
                    }
                </nav>
        </div>
    );
}

export default Header;
