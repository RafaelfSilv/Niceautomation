import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const phone = "5541999999999"; // <-- COLOQUE AQUI O NÚMERO DO VENDEDOR (DDD + número)
  const message = "Olá! Vim pelo site e gostaria de tirar uma dúvida / fazer orçamento.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          {/* LOGO / NOME */}
          <div className="footer-brand">
            <img
              src="Logo.jpeg"
              alt="Logo Nice Automation"
              className="footer-logo"
            />
            <span>Nice Automation</span>
          </div>

          {/* COLUNAS */}
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
      </footer>
    </>
  );
}
