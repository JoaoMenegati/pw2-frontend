import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function Inicio() {
  return (
    <div>
        <h1 className="text-3xl text-white font-bold">Bem vindo ao GameQuiz do Covid!</h1>
        <Link to="/quiz">
          <button className="mr-4 btn btn-lg btn-primary btn-block">Jogar</button>
        </Link>
        <Link to="/ranking">
          <button className="btn btn-lg btn-primary btn-block">Ranking</button>
        </Link>
    </div>
  );
}

export default Inicio;