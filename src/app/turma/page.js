import Navbar from "@/componentes/Navbar"
import "../turma/page.css"
import Pessoas from "../../componentes/Pessoas/pessoas";

export default function turma() {
    return (
        <>
            <div className="bodyAlunos">
                <Navbar></Navbar>
                <div className="fundocd">
                    <div className="imagemETitulo">
                        <img className="imagesenai" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"></img>
                        <p className="turma">I D E V - 2</p>
                    </div>
                    <div className="icones">
                        <link href='https://fonts.googleapis.com/css?family=Bebas Neue' rel='stylesheet'></link>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/843/843149.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/10946/10946909.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/5020/5020137.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/1053/1053913.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/1338/1338022.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/10946/10946905.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/4478/4478094.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/4478/4478100.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/3737/3737567.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/2098/2098339.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/4898/4898026.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/1053/1053907.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/3563/3563865.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/3025/3025782.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/7931/7931647.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/2945/2945491.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/6872/6872333.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/2892/2892404.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/10202/10202646.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/6872/6872349.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/6872/6872313.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/4509/4509624.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/2098/2098339.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/4472/4472485.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/128/3519/3519996.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/1704/1704877.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/6970/6970413.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/6373/6373398.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/512/2423/2423856.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/1338/1338037.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/2020/2020508.png"}></Pessoas>
                        <Pessoas icone={"https://cdn-icons-png.flaticon.com/256/8065/8065310.png"}></Pessoas>

                    </div>
                </div>

            </div>
            <footer className="footer">

                <h3 className="tituloescola">Escola Senai "Shunji Nishimura"</h3>
                <p className="pi">AV FUNDAÇÃO SHUNJI NISHIMURA , 605 - Distrito Industrial Jairo Antonio Zambon - Pompéia/SP - CEP 17586-200 | Telefone: (14) 3405-1550 |E-mail:secretaria928@sp.senai.br</p>
                <p>O Serviço Nacional de Aprendizagem Industrial (SENAI) tem como objetivo estimular a inovação industrial por meio da educação, consultoria, pesquisa aplicada e serviços técnicos e tecnológicos que são decisivos para a competitividade das empresas do Estado e do Brasil.</p>
                <p className="l"> Copyright 2024 © Todos os direitos reservados.
                    O conteúdo do site não pode ser editado, copiado ou distribuído sem expressa autorização do SENAI-SP.</p>
            </footer>
        </>
    )
}       