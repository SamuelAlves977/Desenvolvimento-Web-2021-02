import React from 'react';
import './App.css';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            val1 : "",
            val2 : "",
            resultado: "",
        };
    }
    handleInputChange = (event) => {
        //dados apresentados no console
        console.log(event);
        console.log(event.target.val1);
        console.log(event.target.val2);
        console.log(event.target.BasicOp);
        console.log(event.target.value);
        console.log(event.target.resultado);

        //alterando os eventos de .nome e .valor em tempo real.
        this.setState({[event.target.name]: event.target.value})

        // direcionamento para as operações
        switch(event.target.value) {
            case "adicao":
                this.setState({resultado: parseFloat(this.state.val1) + parseFloat(this.state.val2)});
                break;
            case "subtracao":
                this.setState({resultado: parseFloat(this.state.val1) - parseFloat(this.state.val2)});
                break;
            case "multiplicacao":
                this.setState({resultado: parseFloat(this.state.val1) * parseFloat(this.state.val2)});
                break;
            case "divisao":
                this.setState({resultado: parseFloat(this.state.val1) / parseFloat(this.state.val2).toFixed(2)});
                break;

            default: break;
        }
    }
    //formulário de interação com o usuário com a aplicação
    render(){
        return (   
            <div class="container-fluid">
                <fieldset class="border p-1 rounded" id="corpofild">
                <div class="row">
                    <div class="col-md-12" id="teste">
                        <p>Número 1: <input type="text" name="val1"  onChange={this.handleInputChange} /></p>
                        <p>Número 2: <input type="text" name="val2"  onChange={this.handleInputChange}/></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6" id="escolhatxt">
                        <p id ="opcao">Escolha a operação desejada</p>
                    </div>
                    <div class="col-md-6">
                        <fieldset class="border p-1 " id="campoOperacao">
                            <div class="form-group">
                                <label>
                                    <input type="radio"
                                        name="BasicOp" 
                                        value = "adicao" 
                                        onChange={this.handleInputChange}/> Adição
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input type="radio"  
                                        name="BasicOp" 
                                        value = "subtracao" 
                                        onChange={this.handleInputChange}/> Subtração
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input type="radio"
                                        name="BasicOp" 
                                        value = "multiplicacao"
                                        onChange={this.handleInputChange}/> Multiplicação
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input type="radio" 
                                        name="BasicOp" 
                                        value = "divisao" 
                                        onChange={this.handleInputChange}/> Divisão
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div><br></br>
                <div class="row">
                    <div class="col-md-12" id="resultado">
                        <p>Resultado: <input type="text" name="resultado" value={this.state.resultado} onChange={this.handleInputChange}/></p>
                    </div>
                </div>
                </fieldset>
            </div> 
        );
    }
}
export default Calculator;