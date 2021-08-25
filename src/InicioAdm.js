import { Link} from "react-router-dom";

function InicioAdm() {
  return (
    <div>
        <h1 className="text-4xl text-white">
          <span className="text-opacity-60">Bem vindo ao</span><br />
          <span className="text-5xl font-bold">GameQuiz do Covid!</span>
        </h1>
        
        <div className="mt-8" />
        
        <div className="card-grid">
          <Link to="/quiz">
            <div className="card-container">
              <span className="card-icon material-icons">play_arrow</span>
              <span className="card-title">Jogar</span>
            </div>
          </Link>
          <Link to="/ranking">
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