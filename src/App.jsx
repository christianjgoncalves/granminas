import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home'
import ProductPage from './pages/productPage/productPage'
import Cart from './pages/cart/cart'
import Navbar from './components/navbar/navbar'
import ShopContextProvider from './context/shop-context-provider'

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produto/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
