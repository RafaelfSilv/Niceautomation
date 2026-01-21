import "./Footer.css";


export default function Footer() {
  

  return (
    <>
      

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