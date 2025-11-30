import './navbar.css'
import { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from 'react-router';

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleCatalogClick = (sectionId) => {
        setOpen(false); // Fecha o dropdown
        
        // Se já estiver na página inicial, apenas faz scroll
        if (window.location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            // Se estiver em outra página, navega e depois faz scroll
            navigate('/');
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="navbar">
            <Link to="/"><img src="/Gran Minas Branca LOGO SVG.svg" alt="Logo" className="logo-img" /></Link>
            
            <nav className="nav-links">
                <Link to="/">HOME</Link>
                <div className="catalogo-wrapper">
                    <button className="catalogo-btn" onClick={() => setOpen(!open)}>CATÁLOGO</button>

                    {open && (
                        <div className="dropdown">
                            <button 
                                className="dropdown-link"
                                onClick={() => handleCatalogClick('caminhoes')}
                            >
                                Caminhões de mineração
                            </button>
                            <button 
                                className="dropdown-link"
                                onClick={() => handleCatalogClick('escavadeiras')}
                            >
                                Escavadeiras minera
                            </button>
                            <button 
                                className="dropdown-link"
                                onClick={() => handleCatalogClick('carregadeiras')}
                            >
                                Carregadeiras de rodas
                            </button>
                        </div>
                    )}
                </div>
                <Link to="/redirect-suporte">SUPORTE</Link>
                <Link to="/cart">
                    <FiShoppingCart className="cart-icon" size={20} />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar