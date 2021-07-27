import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import api from './Api';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

class BancoQuestoes extends React.Component {
   state = {
      banco_Questoes: [],
   }

   async componentDidMount() {
      const response = await api.get("/question/findAll")
      this.setState({ banco_Questoes: response.data.results });
   }

   renderTableData() {
      const { banco_Questoes } = this.state;

      return banco_Questoes.map((results, index) => {
         const { question, correctAnswer, incorrectAnswers } = results //destructuring
         return (
            <tr key={question}>
               <td>{question}</td>
               <td>{correctAnswer}</td>
               <td>{incorrectAnswers[1]}</td>
               <td>{incorrectAnswers[2]}</td>
               <td>{incorrectAnswers[3]}</td>
            </tr>

            /*<tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
               <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               </DropdownButton>
            </td>
            </tr>*/
         )
      })
   }

   render() {
      return (
         <div className="BancoQuestoes">
            <div>
               <Link to="/InicioAdm">
                  <button className="btn btn-lg btn-primary btn-block mb-4">Inicio</button>
               </Link>
            </div>
            <Table striped bordered hover variant="dark" size="sm">
               <thead>
                  <tr>
                     <th>Questão</th>
                     <th>Alternativa Correta</th>
                     <th>Alternativa Incorreta</th>
                     <th>Alternativa Incorreta</th>
                     <th>Alternativa Incorreta</th>
                  </tr>
               </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </Table>
         </div>
      );
   }
}

export default BancoQuestoes;
