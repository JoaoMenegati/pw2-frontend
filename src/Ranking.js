import React, { useState, useEffect } from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import api from './Api';
import './css/ranking.css';

class Ranking extends Component {

  state = {
    ranking: [],
  }

  async componentDidMount() {
    const response = await api.get("/user/findall")
    this.setState({ ranking: response.data.users });
  }

  renderTableData() {
    const { ranking } = this.state;

    ranking.sort(function (a, b) {
      if (a.points < b.points) {
        return 1;
      }
      if (a.points > b.points) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return ranking.map((user, index) => {
      const { name, surname, login, points } = user //destructuring
      return (
        <tr key={login}>
          <td>{name}</td>
          <td>{surname}</td>
          <td>{points}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="flex flex-col">
        <div>
          <Link to="/Inicio">
            <button className="btn btn-lg btn-primary btn-block mb-4">Inicio</button>

          </Link>
        </div>
        <h1>Esse e o ranking</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ranking;
