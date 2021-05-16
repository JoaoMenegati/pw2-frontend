import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function Ranking() {
  return (
    <div className="flex flex-col">
        <div className="container">
            <Link to="/Inicio">
                <button className="btn btn-lg btn-primary btn-block">Inicio</button>
            </Link>
        </div>
        <h1>Esse e o rankig</h1>
    </div>
  );
}

export default Ranking;
