import './footer.css'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo e descrição */}
                    <div className="footer-section footer-brand">
                        <img 
                            src="/Gran Minas Branca LOGO SVG.svg" 
                            alt="GranMinas Logo" 
                            className="footer-logo"
                        />
                        <p className="footer-description">
                            Soluções em equipamentos de mineração e construção.
                        </p>
                    </div>

                    {/* Links rápidos */}
                    <div className="footer-section">
                        <h3 className="footer-title">Links Rápidos</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/#caminhoes">Caminhões</Link></li>
                            <li><Link to="/#escavadeiras">Escavadeiras</Link></li>
                            <li><Link to="/#carregadeiras">Carregadeiras</Link></li>
                            <li><Link to="/cart">Carrinho</Link></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contato</h3>
                        <ul className="footer-contact">
                            <li>
                                <a href="https://wa.me/553185464249" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp size={18} />
                                    <span>(31) 8546-4249</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+553185464249">
                                    <FiPhone size={18} />
                                    <span>(31) 8546-4249</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contato@granminas.com.br">
                                    <FiMail size={18} />
                                    <span>contato@granminas.com.br</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} GranMinas. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer