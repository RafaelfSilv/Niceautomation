import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="why">
      {/* BLOCO TEXTO */}
      <div className="why-text">
        <h2>
          Por que escolher a nossa empresa para o seu negócio
          <span>?</span>
        </h2>

        <p>
          Nosso objetivo é trazer soluções que solucionem problemas
          sistematicamente lentos e complexos para que sejam simples e
          objetivos, tornando o seu produto muito mais rentável garantindo
          bons métodos de comunicação e garantindo boas relações com os seus
          clientes tudo através da nossa ferramenta avançada que simula ações
          humanas.
        </p>
      </div>

      {/* BLOCO TECNOLOGIAS */}
      <div className="why-tech">
        <h3>Utilizamos tecnologia de ponta e atualizada</h3>

        <div className="tech-icons">
          <div className="tech-circle n8n">n8n</div>
          <div className="tech-circle gpt">ChatGPT-4o</div>
          <div className="tech-circle hostinger">HOSTINGER</div>
        </div>
      </div>
    </section>
  );
}