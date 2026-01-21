import "./Pricing.css";

export default function Pricing() {
  const plans = [
    {
      tag: "Básico",
      name: "Single",
      desc: "Perfeito para empreendedores individuais",
      oldPrice: "R$ 29,99",
      price: "R$ 5,99",
      per: "/mês",
      off: "80% OFF",
      featured: false,
      bullets: [
        "Crie 1 site",
        "10 GB de armazenamento (SSD)",
        "1 caixa de e-mail por site (grátis 1 ano)",
        "SSL grátis",
      ],
      gainTitle: "O que você ganha:",
      gains: [
        "Sites seguros com SSL",
        "Backups automáticos",
        "Migração sem custos",
      ],
      button: "Escolher plano",
    },
    {
      tag: "MAIS POPULAR",
      name: "Premium",
      desc: "Tudo o que você precisa para começar",
      oldPrice: "R$ 49,99",
      price: "R$ 9,99",
      per: "/mês",
      off: "80% OFF",
      featured: true,
      bullets: [
        "Crie até 3 sites",
        "20 GB de armazenamento (SSD)",
        "2 caixas de e-mail por site (grátis 1 ano)",
        "Domínio grátis 1 ano",
      ],
      gainTitle: "Tudo do plano Single +",
      gains: [
        "Suporte prioritário",
        "Automação inteligente",
        "Integração com ferramentas",
      ],
      button: "Escolher plano",
    },
    {
      tag: "RECOMENDADO",
      name: "Business",
      desc: "Mais ferramentas e recursos para crescer",
      oldPrice: "R$ 77,99",
      price: "R$ 11,99",
      per: "/mês",
      off: "85% OFF",
      featured: false,
      bullets: [
        "Crie até 50 sites",
        "50 GB NVMe",
        "5 caixas de e-mail por site (grátis 1 ano)",
        "Performance avançada",
      ],
      gainTitle: "Tudo do Premium +",
      gains: [
        "Maior estabilidade",
        "Configurações avançadas",
        "Otimização de velocidade",
      ],
      button: "Escolher plano",
    },
    {
      tag: "Escalável",
      name: "Cloud Startup",
      desc: "20x mais potência para seus projetos",
      oldPrice: "R$ 129,99",
      price: "R$ 36,99",
      per: "/mês",
      off: "74% OFF",
      featured: false,
      bullets: [
        "Crie até 100 sites",
        "100 GB NVMe",
        "10 caixas de e-mail por site (grátis 1 ano)",
        "Recursos extras",
      ],
      gainTitle: "Tudo do Business +",
      gains: [
        "Maior capacidade",
        "Alta performance",
        "Escalabilidade",
      ],
      button: "Escolher plano",
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-bgfx">
        <span className="pricing-orb orb1"></span>
        <span className="pricing-orb orb2"></span>
      </div>

      <div className="pricing-container">
        <div className="pricing-head">
          <span className="pricing-pill">Planos e preços</span>
          <h2>Aproveite nossa Promoção de Ano Novo!</h2>

          <div className="pricing-perks">
            <div className="perk">✅ 30 dias para pedir reembolso</div>
            <div className="perk">✅ Cancele a qualquer momento</div>
            <div className="perk">✅ Suporte 24h</div>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((p, idx) => (
            <div key={idx} className={`pricing-card ${p.featured ? "featured" : ""}`}>
              <div className="pricing-top">
                <div className="pricing-topRow">
                  <span className={`pricing-tag ${p.featured ? "tag-featured" : ""}`}>
                    {p.tag}
                  </span>
                  <span className="pricing-off">{p.off}</span>
                </div>

                <h3>{p.name}</h3>
                <p className="pricing-desc">{p.desc}</p>

                <div className="pricing-price">
                  <span className="old">{p.oldPrice}</span>
                  <div className="now">
                    <span className="price">{p.price}</span>
                    <span className="per">{p.per}</span>
                  </div>
                </div>

                <button className={`pricing-btn ${p.featured ? "btn-featured" : ""}`}>
                  {p.button}
                </button>

                <div className="pricing-divider"></div>

                <ul className="pricing-list">
                  {p.bullets.map((b, i) => (
                    <li key={i}>✔ {b}</li>
                  ))}
                </ul>
              </div>

              <div className="pricing-bottom">
                <p className="pricing-gainTitle">{p.gainTitle}</p>
                <ul className="pricing-gains">
                  {p.gains.map((g, i) => (
                    <li key={i}>✅ {g}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          * Valores ilustrativos. Você pode personalizar os planos conforme seu negócio.
        </p>
      </div>
    </section>
  );
}