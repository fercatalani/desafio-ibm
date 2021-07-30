import logo from "../../assets/images/logo.png";
import "./styles.css";

export const Header = () => (
  <header>
    <img src={logo} alt="logo" class="logo" />

    <div className="container">
      <a href="https://google.com.br">Início</a>
      <a href="https://google.com.br">Novo Livro</a>
    </div>
  </header>
);
