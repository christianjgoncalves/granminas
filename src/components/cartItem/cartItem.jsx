import './cartItem.css'
import ShopContext from '../../context/shop-context'
import { useContext } from 'react'

function CartItem({ product, isSelected, onSelectChange }) {
    const { cartItems, addToCart, removeFromCart, changeItemValue } = useContext(ShopContext)

    const handleCheckboxChange = (e) => {
        onSelectChange(product.id, e.target.checked)
    }

    const handleDelete = () => {
        // Remove todas as quantidades do produto
        const quantity = cartItems[product.id]
        for (let i = 0; i < quantity; i++) {
            removeFromCart(product.id)
        }
    }

    return (
        <div className="cart-item">
            <input 
                type="checkbox" 
                className="cart-item-checkbox" 
                checked={isSelected}
                onChange={handleCheckboxChange}
            />
            
            <div className="cart-item-info">
                <h3 className="cart-item-title">{product.nome}</h3>
                <p className="cart-item-type">Aluguel</p>
                <p className="cart-item-price">
                    ${product.preco}/dia <span className="cart-item-stock">Em estoque</span>
                </p>
                
                <div className="cart-item-controls">
                    <button 
                        className="cart-item-btn cart-item-btn-decrease" 
                        onClick={() => removeFromCart(product.id)}
                    >
                        -
                    </button>
                    <input 
                        type="text" 
                        className="cart-item-input"
                        value={cartItems[product.id]} 
                        onChange={(e) => changeItemValue(product.id, Number(e.target.value))} 
                    />
                    <button 
                        className="cart-item-btn cart-item-btn-increase" 
                        onClick={() => addToCart(product.id)}
                    >
                        +
                    </button>
                    <button 
                        className="cart-item-btn-delete"
                        onClick={handleDelete}
                        title="Excluir item"
                    >
                        🗑️
                    </button>
                </div>
            </div>

            <img src={product.url} alt={product.nome} className="cart-item-image" />
        </div>
    )
}

export default CartItem