import "./Hero.css";
import { Reveal } from "../animation/Reveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Automação Nice!</h1>
          <Reveal>
          <p>
            Empresa especializada em criação de soluções através de automação
            integrada a Inteligência Artificial dinamizando a forma como trará
            seus clientes a favor do seu negócio!
          </p>
          </Reveal>
        </div>

        <div className="hero-image">
          <Reveal direction="right">
          <img
            src="https://www.randoncorp.com/media/2940/futuro-da-inteligencia-artificial-1110x508.jpg"
            alt="Automação"
          />
          </Reveal>
        </div>
      </div>

      <button className="hero-button">
        Entre em contato e faça seu orçamento!
      </button>
    </section>
  );
}