import './success.css'
import { FiShoppingCart, FiCheck } from 'react-icons/fi'

function Success() {
    return (
        <div className="success-page">
            <div className="success-container">
                <div className="success-icon-wrapper">
                    <FiShoppingCart size={80} />
                    <div className="check-badge">
                        <FiCheck size={28} />
                    </div>
                </div>

                <h1 className="success-title">
                    Obrigado! Sua compra foi efetivada com sucesso.
                </h1>

                <img 
                    src="/Gran Minas Branca LOGO SVG.svg" 
                    alt="GranMinas Logo" 
                    className="success-logo"
                />
            </div>
        </div>
    )
}

export default Success