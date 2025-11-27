import './home.css'
import ProductCard from "../../components/productCard/productCard"
import PRODUCTS from "../../PRODUCTS"
import Hero from '../../components/hero/hero'
import { useEffect } from 'react';
import { useLocation } from 'react-router';

function Home() {
    const location = useLocation();

    // sistema para o botao de catalogo na navbar funcionar
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            const element = document.getElementById(sectionId);
            
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>  
            <Hero />
            <h1 className='home-title'>CATÁLOGO</h1>
            <div className='home__title-box'>
                <h2 id="caminhoes" className='home-subtitle'>CAMINHÕES DE MINERAÇÃO</h2>
            </div>
            {PRODUCTS.map((product) => {
                if (product.tipo == "Caminhão") return <ProductCard product={product} key={product.id}/>
            })}

            <div className='home__title-box'>
                <h2 id="escavadeiras" className='home-subtitle'>ESCAVADEIRAS MINERA</h2>
            </div>
            {PRODUCTS.map((product) => {
                if (product.tipo == "Escavadeira") return <ProductCard product={product} key={product.id}/>
            })}

            <div className='home__title-box'>
                <h2 id="carregadeiras" className='home-subtitle'>CARREGADEIRAS DE RODAS</h2>
            </div>
            {PRODUCTS.map((product) => {
                if (product.tipo == "Carregadeira") return <ProductCard product={product} key={product.id}/>
            })}
        </>
    )
}

export default Home