import "./style.scss";
import logoImg from "../../assets/Logo.svg";
import backImg from "../../assets/backImg.svg";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { RegisterProvider, useRegisterContext } from "../../context/register";

export function Register() {
  const {
    nameRegister,
    setNameRegister,
    EmailRegister,
    setEmailRegister,
    passWordRegister,
    setPassWordRegister,
    whatsAppRegister,
    setWhatsAppRegister,
    estadoRegister,
    setEstadoRegister,
    cityRegister,
    setCityRegister,
    handleRegisterInput,
  } = useRegisterContext();

  return (
    <RegisterProvider>
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
          <form
            onSubmit={handleRegisterInput}
            className="principal-register--inputs"
          >
            <input
              type="text"
              placeholder="Nome da ONG"
              onChange={(event) => setNameRegister(event.target.value)}
              value={nameRegister}
              
            />
            <input
              type="text"
              placeholder="E-mail"
              onChange={(event) => setEmailRegister(event.target.value)}
              
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(event) => setPassWordRegister(event.target.value)}
              

            />
            <input
              type="text"
              placeholder="WhatsApp"
              onChange={(event) => setWhatsAppRegister(event.target.value)}
              
            />
            <div className="inputs__city-uf">
              <input
                className="inputs__city-uf--city"
                type="text"
                placeholder="Cidade"
                onChange={(event) => setCityRegister(event.target.value)}
               
              />
              <input
                type="text"
                placeholder="UF"
                onChange={(event) => setEstadoRegister(event.target.value)}
                
              />
            </div>
            <Button>Cadastrar</Button>
          </form>
        </div>
      </section>
    </RegisterProvider>
  );
}
