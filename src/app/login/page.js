import Navbar from "@/componentes/Navbar"
import "../login/pages.css"
export default function Login() {
    return (
        <>
        <div>
        <Navbar></Navbar>
        <div className="padding">
            <div className="margin">
                <div className="pageAluno">
                    <div className="quadrado">
                        <div className="imagem11">
                        <img src="https://cdn-icons-png.flaticon.com/256/1338/1338037.png" width={300}></img>
                        </div>
                    </div>
                    <div>
                        <p className="aluno-titulo">aluno</p>
                        <link href='https://fonts.googleapis.com/css?family=Bebas Neue' rel='stylesheet'></link>
                        <div className="consultas">
                                    <input className="Cel" placeholder="Cel"></input>
                                    <input className="Cel" placeholder="Email"></input>
                                    <input className="Cel" placeholder="Nascimento"></input>
                                    <input className="Cel" placeholder="CPF"></input>
                                    <input className="Cel" type="password" placeholder="RG"></input>
                                    <input className="Cel" type="password" placeholder="Mãe"></input>
                                    <input className="Cel" type="password" placeholder="Cel"></input>
                                    <input className="Cel" type="password" placeholder="Pai"></input>
                                    <input className="Cel" type="password" placeholder="Cel"></input>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

        </>
    )
}  