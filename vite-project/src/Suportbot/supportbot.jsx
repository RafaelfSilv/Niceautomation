import { useEffect, useRef, useState } from "react";
import "./SupportBot.css";
import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function SupportBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Olá 👋\nComo posso te ajudar hoje?",
    },
  ]);

  const endRef = useRef(null);

  function scrollToBottom() {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (open) scrollToBottom();
  }, [open, messages]);

  // Fechar com ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function quickReply(text) {
    pushUserMessage(text);
    botAnswer(text);
  }

  function pushUserMessage(text) {
    setMessages((prev) => [...prev, { from: "user", text }]);
  }

  function botAnswer(text) {
    // Respostas simples (você pode evoluir depois)
    let response =
      "Perfeito! Me conte um pouco mais que eu já te ajudo 😊";

    const t = text.toLowerCase();

    if (t.includes("plano") || t.includes("preço") || t.includes("valores")) {
      response =
        "Sobre planos 💳: você quer automação para WhatsApp, Instagram ou atendimento no site?";
    } else if (t.includes("criar site")) {
      response =
        "Top! 🚀 Nós criamos site profissional + automações. Você quer um site institucional, landing page ou loja?";
    } else if (t.includes("contato") || t.includes("whatsapp")) {
      response =
        "Claro! 📲 Clique em “Falar com um especialista” e você será direcionado ao WhatsApp.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    }, 700);
  }

  function handleSend() {
    if (!input.trim()) return;

    const text = input.trim();
    setInput("");
    pushUserMessage(text);
    botAnswer(text);
  }

  // WhatsApp do vendedor
  const phone = "5541999999999"; // coloque o real
  const msgZap = "Olá! Vim pelo site e gostaria de tirar dúvidas / fazer orçamento.";
  const zapLink = `https://wa.me/${phone}?text=${encodeURIComponent(msgZap)}`;

  return (
    <>
      {/* BOTÃO FLUTUANTE */}
      <button
        className="botFloat-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir bot de suporte"
      >
        <FaRobot className="botFloat-icon" />
      </button>

      {/* JANELA DO CHAT */}
      {open && (
        <div className="botFloat-window">
          <div className="botFloat-header">
            <div className="botFloat-title">
              <span className="botFloat-name">Nice Bot</span>
              <span className="botFloat-status">Online</span>
            </div>

            <button className="botFloat-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="botFloat-body">
            {messages.map((m, i) => (
              <div key={i} className={`botMsg ${m.from}`}>
                <div className="botBubble">{m.text}</div>
              </div>
            ))}

            <div ref={endRef} />
          </div>

          {/* Quick replies */}
          <div className="botFloat-quick">
            <button onClick={() => quickReply("Quero criar um site")}>
              Quero criar um site
            </button>
            <button onClick={() => quickReply("Preciso de ajuda com o plano")}>
              Preciso de ajuda com o plano
            </button>
            <a className="botFloat-zap" href={zapLink} target="_blank" rel="noreferrer">
              Falar com um especialista
            </a>
          </div>

          {/* Input */}
          <div className="botFloat-inputArea">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button className="botFloat-send" onClick={handleSend}>
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}