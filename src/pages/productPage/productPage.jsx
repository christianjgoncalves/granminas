import './productPage.css'
import { useParams } from 'react-router'
import PRODUCTS from '../../PRODUCTS'
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from 'react';
import ShopContext from '../../context/shop-context';

function ProductPage() {
    const { id } = useParams()
    const { addToCart, cartItems } = useContext(ShopContext)

    const getProduct = id => { // função para conseguir o produto com o respectivo id
        for (let product of PRODUCTS) {
            if (product.id == id) {
                return product
            }
        }
    }

    const product = getProduct(id)

    return (
        <>
            <img src={product.backgroundUrl} alt="" className="product-page-banner" />

            <div className="product-page-info">
                <h3>{product.nome}</h3>
                <p><b>Motor: </b>{product.motor}</p>
                <p><b>Potência Bruta: </b>{product.potencia}</p>
                <p><b>Peso Operacional: </b>{product.peso}</p>
                <p><b>Capacidade Nominal de Carga: </b>{product.capacidade}</p>
            </div>
            <div className="product-page-buttons">
                <button onClick={() => addToCart(product.id)}>Adicionar a Lista <FiShoppingCart className="product-page-cart-icon" size={20} /> {cartItems[product.id] > 0 && `(${cartItems[product.id]})`} </button>
                <button onClick={() => addToCart(product.id)}>CONTRATAR AGORA</button>
            </div>
        </>
    )
}

export default ProductPage