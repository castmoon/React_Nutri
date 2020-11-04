import React, { Component } from 'react';
import './style.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            nutri: []
        };
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)
        .then((r) => r.json())
        .then((json)=>{
            let state = this.state;
            state.nutri = json;
            this.setState(state);
        })
    }

    render() {
        return (

            <div className="container">
            <header>
                React Nutri
            </header>
                {this.state.nutri.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="title">{item.titulo}</strong>
                            <img src={item.capa} className="img"/>
                    <p className="subtitle">{item.subtitulo}</p>
                    <a className="botao" href="#">Acessar</a>
                        </article>
                    )
                })}
            </div>
        );
    }
}

export default App;