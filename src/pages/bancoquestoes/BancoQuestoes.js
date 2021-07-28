import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "../../css/bootstrap.min.css";
import "../../css/bancoquestoes.css";

import api from '../../Api';

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
               <td><a href="#">Editar</a></td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div className="BancoQuestoes">
            <div className="container">
               <Breadcrumb>
                  <BreadcrumbItem>
                     <Link to="/inicioadm">Início</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Banco de Questões</BreadcrumbItem>
               </Breadcrumb>
            </div>
            <hr className="mb-4" />
            
               <div className="table-wrapper-scroll-y my-custom-scrollbar">
                  <table className="table table-success table-bordered table-striped table-hover mb-0">
                     <thead>
                        <tr>
                           <th>Questão</th>
                           <th>Questão Correta</th>
                           <th>Questão Incorreta 1</th>
                           <th>Questão Incorreta 2</th>
                           <th>Questão Incorreta 3</th>
                           <th>Editar</th>
                        </tr>
                     </thead>
                     <tbody>
                        {this.renderTableData()}
                     </tbody>
                  </table>
               </div>
            
         </div>
      );
   }
}

export default BancoQuestoes;
