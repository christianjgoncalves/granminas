import './hero.css'; 
import { Link } from 'react-router';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <Link to="/redirect-suporte" className="hero-button">CONTRATAR AGORA.</Link>
      </div>
    </section>
  );
}

export default Hero;