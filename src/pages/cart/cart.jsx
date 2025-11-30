import './cart.css'
import ShopContext from '../../context/shop-context'
import { useContext, useState } from 'react'
import PRODUCTS from '../../PRODUCTS'
import CartItem from '../../components/cartItem/cartItem'
import { useNavigate } from 'react-router'
import Footer from '../../components/footer/footer'

function Cart() {
    const navigate = useNavigate()
    const { cartItems, deleteItem } = useContext(ShopContext)
    const [selectedItems, setSelectedItems] = useState({})

    // Verifica se há itens no carrinho
    const hasItems = PRODUCTS.some(product => cartItems[product.id] !== 0)

    // Seleciona ou desmarca todos os itens
    const handleSelectAll = (e) => {
        const isChecked = e.target.checked
        const newSelection = {}
        PRODUCTS.forEach(product => {
            if (cartItems[product.id] !== 0) {
                newSelection[product.id] = isChecked
            }
        })
        setSelectedItems(newSelection)
    }

    // Seleciona ou desmarca um item individual
    const handleSelectItem = (productId, isChecked) => {
        setSelectedItems(prev => ({
            ...prev,
            [productId]: isChecked
        }))
    }

    // Verifica se todos os itens estão selecionados
    const allSelected = PRODUCTS.filter(p => cartItems[p.id] !== 0)
        .every(p => selectedItems[p.id])

    // Exclui todos os itens selecionados
    const handleDeleteSelected = () => {
        Object.keys(selectedItems).forEach(productId => {
            if (selectedItems[productId]) {
                deleteItem(Number(productId))
            }
        })
        setSelectedItems({})
    }

    // Conta quantos itens estão selecionados
    const selectedCount = Object.values(selectedItems).filter(Boolean).length

    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-header">
                    <h1 className="cart-title">Lista</h1>
                    
                    {hasItems && (
                        <div className="cart-actions">
                            <label className="select-all">
                                <input 
                                    type="checkbox" 
                                    checked={allSelected}
                                    onChange={handleSelectAll}
                                />
                                <span>Selecionar Tudo</span>
                            </label>
                            
                            {selectedCount > 0 && (
                                <button 
                                    className="delete-selected-btn"
                                    onClick={handleDeleteSelected}
                                >
                                    Excluir selecionados ({selectedCount})
                                </button>
                            )}
                        </div>
                    )}
                </div>

                <div className="cart-items-list">
                    {!hasItems ? (
                        <div className="cart-empty">
                            <p>Seu carrinho está vazio</p>
                        </div>
                    ) : (
                        PRODUCTS.map((product) => {
                            if (cartItems[product.id] !== 0) {
                                return (
                                    <CartItem 
                                        key={product.id}
                                        product={product}
                                        isSelected={selectedItems[product.id] || false}
                                        onSelectChange={handleSelectItem}
                                    />
                                )
                            }
                            return null
                        })
                    )}
                </div>
            </div>

            {hasItems && (
                <div className="cart-footer">
                    <div className="cart-footer-container">
                        <button 
                            className="finalize-btn"
                            onClick={() => navigate("/checkout")}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Cart