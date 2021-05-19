import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

const Niveis = ({
    handleDificuldade
}) => {
    return(
        <div className="container">
            <button className="mr-4 btn btn-lg btn-primary btn-block" onClick={() => handleDificuldade(2)}>Fácil</button>
            <button className="mr-4 btn btn-lg btn-primary btn-block" onClick={() => handleDificuldade(3)}>Médio</button>
            <button className="mr-4 btn btn-lg btn-primary btn-block" onClick={() => handleDificuldade(4)}>Difícil</button>
        </div>
    )
}

export default Niveis