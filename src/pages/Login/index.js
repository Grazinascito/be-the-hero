import "./style.scss";
import peopleImg from "../../assets/people.svg";
import logoImg from "../../assets/Logo.svg";
import loginIconImg from "../../assets/loginIcon.png";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Login() {

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  useEffect(() => {
    api.post("/login").then(response => {
      console.log(response.data)
    })
  },[])

  return (
    <main>
      <div className="principal-login">
        <img src={logoImg} alt="logoImg" />
        <h1>Faça seu login</h1>

        <div className="principal-login__input">
          <input type="text" placeholder="Seu E-mail" />
          <input type="text" placeholder="Sua Senha" />
          <Button>Entrar</Button>
        </div>

        <div className="footer__principal-login">
          <Link to="/register">
            <img src={loginIconImg} alt="loginIconImg" />
            <strong>Não tenho cadastro</strong>
          </Link>
        </div>
      </div>

      <div className="principal-image">
        <img src={peopleImg} alt="peopleImg" />
      </div>
    </main>
  );
}
