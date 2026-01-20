import "./WhyChoose.css";
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
        <motion.div
          className="whyDark-techBox"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3 className="whyDark-techTitle">
            Utilizamos tecnologia de ponta e atualizada
          </h3>

          <div className="whyDark-techIcons">
            {/* n8n */}
            <motion.div
              className="whyDark-techCircle n8n"
              whileHover={{ scale: 1.08, y: -8 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>n8n</span>
            </motion.div>

            {/* ChatGPT */}
            <motion.div
              className="whyDark-techCircle gpt"
              whileHover={{ scale: 1.08, y: -8 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>ChatGPT-4o</span>
            </motion.div>

            {/* Hostinger */}
            <motion.div
              className="whyDark-techCircle hostinger"
              whileHover={{ scale: 1.08, y: -8 }}
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>HOSTINGER</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}