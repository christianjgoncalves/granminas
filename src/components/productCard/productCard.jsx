import './productCard.css'
import { Link } from 'react-router'

function ProductCard({ product }) {
    const { url, backgroundUrl, nome, id } = product

    return (
        <>
            <Link to={`/produto/${id}`}>
                <div className="card-produto">
                    <img 
                        src={backgroundUrl}
                        className="card-background" 
                    />

                    <div className="card-content">
                        <h3 className="card-nome">{nome}</h3>
                        
                        <div className="card-main-image-wrapper">
                        <img 
                            src={url} 
                            alt={nome} 
                            className="card-main-image" 
                        />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard