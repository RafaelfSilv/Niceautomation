import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Automação Nice!</h1>
          <p>
            Empresa especializada em criação de soluções através de automação
            integrada a Inteligência Artificial dinamizando a forma como trará
            seus clientes a favor do seu negócio!
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Automação"
          />
        </div>
      </div>

      <button className="hero-button">
        Entre em contato e faça seu orçamento!
      </button>
    </section>
  );
}