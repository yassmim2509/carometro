import Navbar from "@/componentes/Navbar"
import "../cadastro/page.css"

export default function Cadastro() {
    return (
        <>
            <div>
                <div className="fundocd">
                    <div className="row">
                        <div className="col-7">
                            <link href='https://fonts.googleapis.com/css?family=Bebas Neue' rel='stylesheet'></link>
                            <div className="foms">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"></img>
                                <h1 className="titulocadrastro">C A D A S T R E - S E </h1>

                                    <input className="usuario" placeholder="Email"></input>
                                    <input className="usuario" placeholder="Idade"></input>
                                    <input className="usuario" placeholder="Data de Nascimento"></input>
                                    <input className="usuario" placeholder="Telefone"></input>
                                    <input className="usuario" type="password" placeholder="Crie uma Senha"></input>
                                    <div className="entrar">
                                        <a href="/cursos" className=" redondo" >Entrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    )
}       