import { Route, BrowserRouter as Router, Routes } from "react-router"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import Header from "./Components/Header/Header"
import CartProvider from "./Components/CartProvider/CartProvider"
function App() {

  return (
    <div style={{ textAlign: 'center' }}>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  )
}

export default App
