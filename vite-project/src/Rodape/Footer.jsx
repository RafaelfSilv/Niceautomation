import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const phone = "5541999999999"; // <-- coloque o número real do vendedor
  const message = "Olá! Vim pelo site e gostaria de tirar uma dúvida / fazer orçamento.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* ✅ BOTÃO WHATSAPP FLUTUANTE (continua no site) */}
      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      {/* ✅ FOOTER ORGANIZADO */}
      <footer className="footer">
        <div className="footer-container">

          {/* ESQUERDA: LOGO + NOME */}
          <div className="footer-brand">
            <img
              src="Logo.jpeg"
              alt="Logo Nice Automation"
              className="footer-logo"
            />

            <div className="footer-brandText">
              <h3>Nice Automation</h3>
              <p>Automação + Inteligência Artificial</p>
            </div>
          </div>

          {/* DIREITA: COLUNAS */}
          <div className="footer-columns">
            <div className="footer-col">
              <h4>Sobre nós</h4>
              <a href="#">Quem somos</a>
            </div>

            <div className="footer-col">
              <h4>Nosso contato</h4>
              <a href="mailto:example@email.com">example@email.com</a>
              <a href="#">(41) 1111-1111</a>
            </div>

            <div className="footer-col">
              <h4>Perguntas Frequentes</h4>
              <a href="#">Sobre o nosso serviço</a>
              <a href="#">Sobre a nossa assistente</a>
              <a href="#">Implementação por bloco</a>
            </div>
          </div>
        </div>

        {/* LINHA + DIREITOS */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nice Automation. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}