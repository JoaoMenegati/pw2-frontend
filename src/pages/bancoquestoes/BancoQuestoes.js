import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "../../css/bootstrap.min.css";
import "../../css/bancoquestoes.css";

import api from '../../Api';

class BancoQuestoes extends React.Component {
   state = {
      banco_Questoes: []
   }

   async componentDidMount() {
      const response = await api.get("/question/findAll")
      this.setState({ banco_Questoes: response.data.results });
   }

   handleClick(){
      const { banco_Questoes } = this.state;
      //this.setState({questions: banco_Questoes});
   }

   renderTableData() {
      const { banco_Questoes } = this.state;

      return banco_Questoes.map((results, index) => {
         const { question, correctAnswer, incorrectAnswers, dificulty } = results //destructuring
         let stringData = "teste"
         
         return (
            <tr className="row100 body" key={question}>
               <td className="cell100 column1">{question}</td>
               <td className="cell100 column2">{correctAnswer}</td>
               <td className="cell100 column3">{incorrectAnswers[1]}</td>
               <td className="cell100 column4">{incorrectAnswers[2]}</td>
               <td className="cell100 column5">{incorrectAnswers[3]}</td>
               <td className="cell100 column6">{(dificulty === 1) ? 'Fácil' : (dificulty === 2) ? 'Médio' : 'Díficil'}</td>
               <td className="cell100 column7"><Link to={'/editarquestoes/'+ index}>Editar</Link></td>
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
            <div className="limiter">
               <div className="container-table100">
                  <div className="wrap-table100">
                     <div className="table100 ver1 m-b-110">
                        <div className="table100-head">
                           <table>
                              <thead>
                                 <tr className="row100 head">
                                    <th className="cell100 column1">Questão</th>
                                    <th className="cell100 column2">Questão Correta</th>
                                    <th className="cell100 column3">Questão Incorreta 1</th>
                                    <th className="cell100 column4">Questão Incorreta 2</th>
                                    <th className="cell100 column5">Questão Incorreta 3</th>
                                    <th className="cell100 column6">Dificuldade</th>
                                    <th className="cell100 column7">Editar</th>
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

export default BancoQuestoes;
