import "./HowItWorks.css";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaRocket,
  FaSlidersH,
  FaCubes,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const howItems = [
  {
    icon: "⚡",
    title: "FollowUp inteligente",
    text:
      "Retrabalho de leads através de FollowUp ou classificações por tags, identificando a necessidade correta de envio de mensagens, mídias ou informações para aproximar o cliente do seu produto.",
  },
  {
    icon: "🏷️",
    title: "Separação por tags",
    text:
      "Utilização de tags para separação de conversas baseado no tipo de progresso, permitindo configurações personalizadas conforme sua necessidade.",
  },
  {
    icon: "📁",
    title: "Importação de mídias",
    text:
      "Possibilidade de incluir áudios, imagens, vídeos e documentos em PDF diretamente no fluxo da assistente.",
  },
];

const offers = [
  {
    title: "Suporte Técnico",
    text:
      "Equipe especializada para prestar suporte de forma rápida, eficiente e clara.",
    icon: <FaHeadset />,
  },
  {
    title: "Implementação prática e rápida",
    text:
      "Ferramentas de alta eficiência operacional, com usabilidade simples e objetiva.",
    icon: <FaRocket />,
  },
  {
    title: "Configuração à sua necessidade",
    text:
      "Personalização avançada com ajustes minuciosos para maximizar seus resultados.",
    icon: <FaSlidersH />,
  },
  {
    title: "Funções por blocos",
    text:
      "Expanda funcionalidades por demanda. Você solicita, nós implementamos e otimizamos.",
    icon: <FaCubes />,
  },
  {
    title: "Alta performance",
    text:
      "Fluxos automatizados com velocidade e estabilidade para crescer sem gargalos.",
    icon: <FaBolt />,
  },
  {
    title: "Segurança e confiança",
    text:
      "Processos seguros e organizados para aumentar credibilidade e proteger dados.",
    icon: <FaShieldAlt />,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">

        {/* ===== BLOCO 1: COMO FUNCIONA ===== */}
        <motion.div
          className="how-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="how-heading">
            <p className="how-kicker">Entenda o processo</p>
            <h2 className="how-title">Como funciona na prática</h2>
            <p className="how-subtitle">
              Uma automação inteligente que organiza, acompanha e converte seus atendimentos.
            </p>
          </div>

          <div className="how-grid">
            {howItems.map((item, index) => (
              <motion.div
                key={index}
                className="how-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <span className="how-card-icon">{item.icon}</span>
                <h3 className="how-card-title">{item.title}</h3>
                <p className="how-card-text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== BLOCO 2: O QUE OFERECEMOS ===== */}
        <motion.div
          className="offers-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="offers-heading">
            <p className="offers-kicker">Recursos e diferenciais</p>
            <h2 className="offers-title">O que oferecemos</h2>
          </div>

          <div className="offers-grid">
            {offers.map((item, index) => (
              <motion.div
                className="offer-card"
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="offer-icon"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  }}
                >
                  {item.icon}
                </motion.div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
