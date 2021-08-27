import React from "react";
import { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import api from '../../Api';
import '../../css/ranking.css';
class Ranking extends Component {

  state = {
    ranking: [],
  }

  async componentDidMount() {
    const response = await api.get("/user/findall")
    this.setState({ ranking: response.data.users });
    const { match: { params } } = this.props;
    console.log(params)
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
          <td className="cell100 column1">{name}</td>
          <td className="cell100 column2">{surname}</td>
          <td className="cell100 column3">{points}</td>
        </tr>
      )
    })
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <div className="Ranking">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to={(id) === 0 ? "/inicio" : "/inicioadm"}>Início</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Ranking dos jogadores</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="limiter">
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table100 ver1 m-b-110">
                <div className="table100-head">
                  <table>
                    <thead>
                      <tr className="row100 head">
                        <th className="cell100 column1">Nome</th>
                        <th className="cell100 column2">Sobrenome</th>
                        <th className="cell100 column3">Pontos</th>
                      </tr>
                    </thead>
                  </table>
                </div>

                <div className="table100-body">
                  <table>
                    <tbody>
                      {this.renderTableData()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Ranking;
