import "./WhyChoose.css";
import ChatDemo from "../Demonstracao/chatdemo";
import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <section className="whyDark">
      {/* efeitos de fundo */}
      <div className="whyFx">
        <span className="whyOrb orbA"></span>
        <span className="whyOrb orbB"></span>
      </div>

      <div className="whyDark-container">
        {/* TEXTO */}
        <motion.div
          className="whyDark-top"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <p className="whyDark-kicker">POR QUE NÓS?</p>

          <h2 className="whyDark-title">
            Por que escolher a nossa empresa para o seu negócio?
          </h2>

          <p className="whyDark-desc">
            Nosso objetivo é trazer soluções que solucionem problemas sistematicamente lentos e
            complexos para que sejam simples e objetivos, tornando o seu produto muito mais
            rentável garantindo bons métodos de comunicação e garantindo boas relações com os seus
            clientes através da nossa ferramenta avançada que simula ações humanas.
          </p>
        </motion.div>

        {/* BOX TECNOLOGIAS */}
        <ChatDemo />
      </div>
    </section>
  );
}