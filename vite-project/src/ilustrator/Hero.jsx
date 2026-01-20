import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="heroDark">
      {/* FUNDO DINÂMICO */}
      <div className="heroFx">
        <span className="orb orb1"></span>
        <span className="orb orb2"></span>
        <span className="orb orb3"></span>
      </div>

      <div className="heroDark-container">
        {/* TEXTO */}
        <motion.div
          className="heroDark-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="heroDark-kicker"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            AUTOMAÇÃO + INTELIGÊNCIA ARTIFICIAL
          </motion.p>

          <motion.h1
            className="heroDark-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Automação Nice!
          </motion.h1>

          <motion.p
            className="heroDark-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
          >
            Empresa especializada em criação de soluções através de automação integrada
            a Inteligência Artificial dinamizando a forma como trará seus clientes a
            favor do seu negócio!
          </motion.p>

          <motion.button
            className="heroDark-btn pulse"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em contato e faça seu orçamento!
          </motion.button>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          className="heroDark-image"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="IA Automação"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}