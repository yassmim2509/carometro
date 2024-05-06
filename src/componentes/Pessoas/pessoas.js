'use client'
import './pessoas.css';
import '../../app/turma/page'

export default function Pessoas({ icone, nome }) {

    return (
        <div className='botoes'>
            <div className="botao">
                <img onClick={() => window.location.href = `/login`} className="icone" src={icone}></img>
                <p>{nome}</p>
                <link href='https://fonts.googleapis.com/css?family=Bebas Neue' rel='stylesheet'></link>
            </div>
        </div>



    );
}