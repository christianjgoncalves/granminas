import './hero.css'; 
import { Link } from 'react-router';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <p>Ajuste a <b>Potência</b> á Sua <b>Demanda</b>.</p>
      </div>
    </section>
  );
}

export default Hero;