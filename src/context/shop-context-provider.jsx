import { useState } from "react";
import ShopContext from './shop-context'
import PRODUCTS from '../PRODUCTS'

function defaultCart() {
    const cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

function ShopContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(defaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.preco
            }
        }
        return totalAmount
    }

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
        console.log(cartItems)
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
        console.log(cartItems)
    }

    const changeItemValue = (id, newValue) => {
        setCartItems((prev) => ({...prev, [id]: newValue}))
        console.log(cartItems)
    }

    const deleteItem = (id) => {
        setCartItems((prev) => ({...prev, [id]: 0}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, changeItemValue, getTotalCartAmount, deleteItem}

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

export default ShopContextProvider