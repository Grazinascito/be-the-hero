import "./style.scss"
import logoutImg from "../../assets/logoutImg.svg";
import logoImg from "../../assets/Logo.svg";
import deleteImg from "../../assets/deleteImg.svg";

export function Home() {
  return (
    <div className="container-home">
      <header className="container-header">
        <div className="container-home__flex-start">
          <img src={logoImg} alt="logoImg" />
          <p>Bem vinda, APAD</p>
        </div>

        <div className="container-home__flex-end">
          <button>Cadastrar novo caso</button>
          <div className="logout-content">
            <button>
              <img src={logoutImg} alt="imagem de sair" />
            </button>
          </div>
        </div>
      </header>
      <section className="container-section">
        <h2>Casos cadastrados</h2>

        <div className="card-section">
          <div className="card">
            <img src={deleteImg} alt="deleteImg" />
            <p>CASO:</p>
            <span>Cadelinha atropelada</span>
            <p>DESCRIÇÃO:</p>
            <span>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </span>
            <p>VALOR:</p>
            <span>R$ 120,00 reais</span>
          </div>
          <div className="card">
            <img src={deleteImg} alt="deleteImg" />
            <p>CASO:</p>
            <span>Cadelinha atropelada</span>
            <p>DESCRIÇÃO:</p>
            <span>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </span>
            <p>VALOR:</p>
            <span>R$ 120,00 reais</span>
          </div>
          <div className="card">
            <img src={deleteImg} alt="deleteImg" />
            <p>CASO:</p>
            <span>Cadelinha atropelada</span>
            <p>DESCRIÇÃO:</p>
            <span>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </span>
            <p>VALOR:</p>
            <span>R$ 120,00 reais</span>
          </div>
          <div className="card">
            <img src={deleteImg} alt="deleteImg" />
            <p>CASO:</p>
            <span>Cadelinha atropelada</span>
            <p>DESCRIÇÃO:</p>
            <span>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </span>
            <p>VALOR:</p>
            <span>R$ 120,00 reais</span>
          </div>
          <div className="card">
            <img src={deleteImg} alt="deleteImg" />
            <p>CASO:</p>
            <span>Cadelinha atropelada</span>
            <p>DESCRIÇÃO:</p>
            <span>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </span>
            <p>VALOR:</p>
            <span>R$ 120,00 reais</span>
          </div>
        </div>
      </section>
    </div>
  );
}
