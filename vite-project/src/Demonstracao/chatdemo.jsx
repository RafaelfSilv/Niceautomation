import "./chatdemo.css";
import { useEffect, useState, useRef } from "react";

const messages = [
  { from: "agent", label: "Agente IA", type: "text", time: "14:28", text: "Boa tarde, Pedro, tudo certinho?" },
  { from: "client", label: "Cliente", type: "text", time: "14:28", text: "Oi, tudo ótimo!" },
  { from: "agent", label: "Agente IA", type: "text", time: "14:29", text: "Aqui é o Matheus, você acabou de se cadastrar no nosso site, né?" },
  { from: "agent", label: "Agente IA", type: "audio", time: "14:30", seconds: "00:07" },
  { from: "agent", label: "Agente IA", type: "audio", time: "14:31", seconds: "00:06" },
  { from: "agent", label: "Agente IA", type: "text", time: "14:31", text: "Como te falei, essas são as informações que preciso:" },
  { from: "bot", label: "Chatbot", type: "text", time: "14:31", text: "Quantos funcionários tem sua empresa?" },
  { from: "bot", label: "Chatbot", type: "text", time: "14:31", text: "Qual setor vocês atuam?" },
  { from: "bot", label: "Chatbot", type: "text", time: "14:32", text: "Qual é o seu site?" },
];

export default function ChatDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const endRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= messages.length) return 0;
        return prev + 1;
      });
    }, 1200); // velocidade de aparição das mensagens

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chatDemo">
      <div className="chatDemo-header">
        <span className="chatDemo-pill">Demonstração em tempo real</span>
        <h3>Atendimento automatizado (IA + WhatsApp)</h3>
        <p>
          Veja como o fluxo conversa com o cliente e coleta informações de forma
          natural, rápida e organizada.
        </p>
      </div>

      <div className="chatDemo-board">
        <div className="chatDemo-phone">
          <div className="chatDemo-screen">
  <div className="chatDemo-messages">
    {messages.slice(0, visibleCount).map((m, idx) => (
      <div key={idx} className={`msgRow ${m.from}`}>
        <span className={`msgBadge ${m.from}`}>{m.label}</span>

        <div className={`msgBubble ${m.type} ${m.from}`}>
          {m.type === "audio" ? (
            <div className="audioBubble">
              <button className="audioPlay">▶</button>
              <div className="audioLine">
                <span className="audioDot" />
              </div>
              <span className="audioTime">{m.seconds}</span>
            </div>
          ) : (
            <span className="msgText">{m.text}</span>
          )}

          <span className="msgClock">{m.time}</span>
        </div>
      </div>
    ))}

    {/* Digitação fake */}
    {visibleCount > 0 && visibleCount < messages.length && (
      <div className="typingRow">
        <div className="typing">
          <span />
          <span />
          <span />
        </div>
        <small>digitando…</small>
      </div>
    )}

    <div ref={endRef} />
  </div>
</div>

        </div>

        {/* Glow/decoração */}
        <span className="chatGlow g1"></span>
        <span className="chatGlow g2"></span>
      </div>
    </div>
  );
}