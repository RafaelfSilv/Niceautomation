import "./Cadastro.css";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="cadastro-page">
      <div className="cadastro-wrapper">
        {/* BOTÃO VOLTAR */}
        <Link to="/" className="btn-back">
          ← Voltar para o início
        </Link>

        <div className="cadastro-box">
          <div className="cadastro-header">
            <h1>Cadastro</h1>
            <p>Crie sua conta para acessar os serviços da Nice Automation.</p>
          </div>

          <form className="cadastro-form">
            <div className="input-group">
              <label>Nome</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Digite seu email" />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="Crie uma senha" />
            </div>

            <button type="submit" className="btn-submit">
              Cadastrar
            </button>

            <p className="cadastro-footer">
              Já tem conta? <span>Login</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
