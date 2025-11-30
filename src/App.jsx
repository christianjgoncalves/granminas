import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home'
import ProductPage from './pages/productPage/productPage'
import Cart from './pages/cart/cart'
import Navbar from './components/navbar/navbar'
import ShopContextProvider from './context/shop-context-provider'
import Success from './pages/success/success'
import Redirect from './pages/redirect/redirect'
import Checkout from './pages/checkout/checkout'

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produto/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/redirect-suporte" element={<Redirect />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
