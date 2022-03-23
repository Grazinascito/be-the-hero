import "./style.scss";
import logoImg from "../../assets/Logo.svg";
import backImg from "../../assets/backImg.svg";
import { Button } from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import { initialValue, RegisterProvider } from "../../context/register";
import toast, { Toaster } from "react-hot-toast";

import { useState } from "react";

export function Register() {
  const history = useHistory();

  const [nameRegister, setNameRegister] = useState(initialValue.nameRegister);
  const [passWordRegister, setPassWordRegister] = useState(
    initialValue.passWordRegister
  );
  const [whatsAppRegister, setWhatsAppRegister] = useState(
    initialValue.whatsAppRegister
  );
  const [EmailRegister, setEmailRegister] = useState(
    initialValue.EmailRegister
  );
  const [estadoRegister, setEstadoRegister] = useState(
    initialValue.estadoRegister
  );
  const [cityRegister, setCityRegister] = useState(initialValue.cityRegister);

  async function handleRegisterInput(event: any) {
    event.preventDefault();

    const data = {
      nameRegister,
      EmailRegister,
      passWordRegister,
      whatsAppRegister,
      estadoRegister,
      cityRegister,
    };

    if (
      !nameRegister ||
      !passWordRegister ||
      !whatsAppRegister ||
      !cityRegister ||
      !estadoRegister
    ) {
      toast.error("preencha todos os campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RegisterProvider>
      <Toaster
        
        
         containerStyle={{
          position: 'relative',
          top: 20,
          left: -20,
          bottom: 20,
          right: 20,
        }}

        toastOptions={{

          success: {
            style: {
              background: "green",
             
            },
          },
          error: {
            style: {
              background: "#E00021",
              width: "500px",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold"
            },
          },
        }}
      />

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
              value={EmailRegister}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(event) => setPassWordRegister(event.target.value)}
              value={passWordRegister}
            />
            <input
              type="text"
              placeholder="WhatsApp"
              onChange={(event) => setWhatsAppRegister(event.target.value)}
              value={whatsAppRegister}
            />
            <div className="inputs__city-uf">
              <input
                className="inputs__city-uf--city"
                type="text"
                placeholder="Cidade"
                onChange={(event) => setCityRegister(event.target.value)}
                value={cityRegister}
              />
              <input
                type="text"
                maxLength={2}
                placeholder="UF"
                onChange={(event) => setEstadoRegister(event.target.value)}
                value={estadoRegister}
              />
            </div>
            <Button>Cadastrar</Button>
          </form>
        </div>
      </section>
    </RegisterProvider>
  );
}
