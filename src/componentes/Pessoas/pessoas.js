'use client'
import './pessoas.css';
import '../../app/alunos/page'

export default function Pessoas({icone}){
    
    return(
        <div className="botao">
    
                <img onClick={()=>window.location.href =`/`} className="icone" src={icone}></img>

        </div>


    );
}