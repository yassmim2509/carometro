import Navbar from "@/componentes/Navbar"
import "../cursos/page.css"

export default function Cursos() {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className="cursos1">
                    <div className="margin1">
                        <div className="padding1">
                            <h1 className="turma">T U R M A S</h1>
                            <link href='https://fonts.googleapis.com/css?family=Bebas Neue' rel='stylesheet'></link>
                            <div className="padding2">
                                <div className="circulo">
                                    <h2>IDEV-1</h2>
                                </div>
                                <div className="circulo2">
                                <a href="/turma">              
                                    <h2 className="preto">IDEV-2</h2>
                                    </a>
                                </div>
                                <div className="circulo3"> 
                                <h2>IDEV-3</h2>
                                </div>
                                </div>
                                <div className="padding3">
                                <div className="circulo4">
                                    <h2>IMEC-1</h2>
                                </div>
                                <div className="circulo5">
                                    <h2>IMEC-2</h2>
                                </div>
                                <div className="circulo6">
                                    <h2>IMEC-3</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}