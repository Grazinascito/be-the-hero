import "./style.scss";
import logoImg from "../../assets/Logo.svg";
import backImg from "../../assets/backImg.svg";
import {Button} from "../../components/Button"
import { Link } from "react-router-dom";

export function Register() {
  return (
    <section className="register-container">
      <div className="register-content">
        <div className="principal-register">
          <div className="principal-register__img">
            <img src={logoImg} alt="logoImg" />
          </div>
          <div className="principal-register__text">
            <h2>Cadastro</h2>

            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>
          </div>
          <div className="footer__principal-register">
            <Link to="/">
              <img src={backImg} alt="loginIconImg" />
              <strong>Voltar para a pagina de login</strong>
            </Link>
          </div>
        </div>
        <div className="principal-register--inputs">
          <input type="text" placeholder="Nome da ONG" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Senha" />
          <input type="text" placeholder="WhatsApp"/>
          <div className="inputs__city-uf">

            <input className="inputs__city-uf--city"  type="text" placeholder="Cidade"/>
            <input type="text" placeholder="UF"/>
          </div>
          <Button>
              Cadastrar
          </Button>
        </div>
      </div>
    </section>
  );
}
