import Navbar from "@/componentes/Navbar";
import Image from "next/image";
import styles from "./page.module.css";
import './main.css'

export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div>
        <div className="fundo">
          <div className="row">
            <div className="col-7">
            <img className="img" src="https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1200,h=1200,fit=cover,format=jpeg/wp-content/uploads/2024/01/senai-cursos.jpeg" alt="senai" />
            </div>
            <div className="col-4 pt-3 pl-5">
    
              <h1 className="cadastro">login</h1>
              <input className="usuario" placeholder="Usuário"></input>
              <input className="usuario" placeholder="Senha"></input>
              <div className="entrar">
              <a href="/cursos" className=" redondo" >Entrar</a>
              </div>
              <h3 className="cd-se">- Não possui login -</h3>
              <a className="cd-so" href="/cadastro">Cadastre-se</a>
              <link href='https://fonts.googleapis.com/css?family=Julius Sans One' rel='stylesheet'></link>
              <link href='https://fonts.googleapis.com/css?family=Bebas Neue' rel='stylesheet'></link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

