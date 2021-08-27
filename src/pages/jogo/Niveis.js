import React from "react";

const Niveis = ({ handleDificuldade }) => {
  return (
    <div className="game-center">
      <div className="card-grid col3">
        <div className="card-container" onClick={() => handleDificuldade(2)}>
          <span className="card-icon material-icons">self_improvement</span>
          <span className="card-title">Fácil</span>
        </div>

        <div className="card-container" onClick={() => handleDificuldade(3)}>
          <span className="card-icon material-icons">hiking</span>
          <span className="card-title">Médio</span>
        </div>

        <div className="card-container" onClick={() => handleDificuldade(4)}>
          <span className="card-icon material-icons">coronavirus</span>
          <span className="card-title">Difícil</span>
        </div>
      </div>
    </div>
  );
};

export default Niveis;
