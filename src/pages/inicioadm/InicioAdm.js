import { Link } from "react-router-dom";

function InicioAdm() {
  return (
    <div className="game-center">
      <h1 className="text-4xl text-white">
        Bem vindo ao
        <br />
        <span className="text-5xl font-bold">GameQuiz do Covid!</span>
      </h1>

      <div className="mt-8" />

      <div className="card-grid">
        <Link to="/quiz/0">
          <div className="card-container">
            <span className="card-icon material-icons">play_arrow</span>
            <span className="card-title">Jogar</span>
          </div>
        </Link>
        <Link to="/ranking/1">
          <div className="card-container">
            <span className="card-icon material-icons">timeline</span>
            <span className="card-title">Ranking</span>
          </div>
        </Link>

        <Link to="/cadastro">
          <div className="card-container">
            <span className="card-icon material-icons">person_add_alt</span>
            <span className="card-title">Cadastrar Usuários</span>
          </div>
        </Link>
        <Link to="/bancoquestoes">
          <div className="card-container">
            <span className="card-icon material-icons">auto_stories</span>
            <span className="card-title">Banco de Questões</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InicioAdm;
