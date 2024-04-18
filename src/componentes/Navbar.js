import Home from "@/app/page";
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="navbar ynavbar">
                    <a class="navbar-brand" href="#">♛ C A R Ô M E T R O ♛</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/"> Tire Sua foto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/">Consutas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/">Alunos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/">Matrícula</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/">Turma</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/">Cursos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/">Usuários</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/app/">Administrador</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}  