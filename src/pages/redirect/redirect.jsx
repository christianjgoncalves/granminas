import './redirect.css'
import { useEffect } from 'react'
import { FiHeadphones } from 'react-icons/fi'

function Redirect() {
    useEffect(() => {
        // Redireciona para o WhatsApp após 3 segundos
        const timer = setTimeout(() => {
            window.location.href = 'https://wa.me/553185464249'
        }, 3000)

        // Limpa o timer se o componente desmontar
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="redirect-page">
            <div className="redirect-container">
                <div className="redirect-icon">
                    <FiHeadphones size={80} />
                </div>

                <h1 className="redirect-message">
                    Você será redirecionado para o nosso Suporte.
                </h1>

                <img 
                    src="/Gran Minas Branca LOGO SVG.svg" 
                    alt="GranMinas Logo" 
                    className="redirect-logo"
                />
            </div>
        </div>
    )
}

export default Redirect