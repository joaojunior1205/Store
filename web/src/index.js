import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const IndexCompoenet = () => {
   const [user, setUser] = useState([]);
    
    const loadUser = () => {
        axios.get("http://localhost:3001/user")
          .then((response) => setUser(response.data))
          .catch((err) => {console.error("ops! ocorreu um erro" + err)});
    }
    
    loadUser()

    const RenderNome = (nome, email) => {
        return (
            <div style={{backgroundColor: '#ddd', padding: 20, marginBottom: 20, borderRadius: 20}}>
                <h4>Nome: {nome}</h4>
                <h4>Email: {email}</h4>
            </div>
        )
    }
    
    const register = (
        <div>
            <h1>{user.map((e) => RenderNome(e.nome, e.email))}</h1>
        </div>
    )

    return register;
}




ReactDOM.render(<IndexCompoenet />, document.getElementById('root'));